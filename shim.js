/*
 * Camada de conexão: entrega para o jogo uma interface igual à do Socket.io (io(), on, emit com resposta),
 * mas falando com o servidor do Stadium por Server-Sent Events + fetch. Não precisa instalar nada.
 * Se a internet cair por alguns segundos, o navegador reconecta sozinho e a partida continua de onde parou
 * (o servidor espera 45 segundos antes de dar a partida por encerrada).
 */
(function () {
  'use strict';
  function rand(bytes) {
    var a = new Uint8Array(bytes); crypto.getRandomValues(a);
    return Array.prototype.map.call(a, function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }
  var sid = rand(12); // identifica esta aba; some ao fechar a página

  window.io = function () {
    var handlers = {}; var es = null; var ready = false; var queue = []; var lastEvent = Date.now(); var closed = false; var dropped = false;
    var socket = {
      connected: false,
      on: function (ev, fn) { (handlers[ev] = handlers[ev] || []).push(fn); return socket; },
      off: function (ev) { delete handlers[ev]; return socket; },
      emit: function (ev, data, ack) {
        if (typeof data === 'function') { ack = data; data = {}; }
        if (!ready) { queue.push([ev, data, ack]); return socket; }
        fetch('/api/emit?sid=' + sid, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ e: ev, d: data }) })
          .then(function (r) { return r.json(); })
          .then(function (r) { if (typeof ack === 'function') ack(r); })
          .catch(function () { if (typeof ack === 'function') ack({ ok: false, error: 'Sem conexão com o servidor.' }); });
        return socket;
      },
      close: function () { closed = true; if (es) es.close(); },
      disconnect: function () { socket.close(); }
    };
    function fire(ev, data) { (handlers[ev] || []).slice().forEach(function (fn) { try { fn(data); } catch (e) { setTimeout(function () { throw e; }, 0); } }); }
    function drop() { ready = false; socket.connected = false; if (!dropped) { dropped = true; fire('disconnect'); } }

    function connect() {
      if (closed) return;
      if (es) { try { es.close(); } catch (e) { /* já fechado */ } }
      lastEvent = Date.now();
      es = new EventSource('/api/events?sid=' + sid);
      es.addEventListener('ping', function () { lastEvent = Date.now(); });
      es.onmessage = function (m) {
        lastEvent = Date.now();
        var p; try { p = JSON.parse(m.data); } catch (e) { return; }
        if (p.e === '__ready') {
          ready = true; socket.connected = true; dropped = false; fire('connect', p.d);
          queue.splice(0).forEach(function (q) { socket.emit(q[0], q[1], q[2]); });
        } else fire(p.e, p.d);
      };
      es.onerror = function () { drop(); }; // o navegador tenta reconectar sozinho (retry: 2000)
    }
    // se o servidor ficar mudo (sinal fraco), reabre a conexão
    setInterval(function () { if (!closed && Date.now() - lastEvent > 45000) { drop(); connect(); } }, 10000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden && !closed && Date.now() - lastEvent > 20000) { drop(); connect(); } });
    // mantém o servidor gratuito acordado enquanto alguém está com a página aberta
    setInterval(function () { if (!document.hidden) fetch('/api/ping').catch(function () { /* tenta de novo depois */ }); }, 4 * 60 * 1000);
    connect();
    return socket;
  };
})();
