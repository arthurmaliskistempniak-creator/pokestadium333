'use strict';
/*
 * Pokémon Stadium Web - servidor
 * Sem dependências: só usa módulos que já vêm no Node (http, fs, path).
 * Contém o motor de batalha (tipos, Mega, Z, Tera, habilidades, itens, IA), os dados dos Pokémon e as salas.
 * O servidor decide TODO o dano e o sorteio; o navegador só envia escolhas (não dá para roubar).
 * Arquivo gerado por tools/build-flat.js a partir do projeto completo.
 */
const __defs = {}; const __cache = {};
function __def(name, fn) { __defs[name] = fn; }
function __use(name) {
  if (__cache[name]) return __cache[name].exports;
  const fn = __defs[name]; if (!fn) throw new Error('módulo ausente: ' + name);
  const m = { exports: {} }; __cache[name] = m; fn(m, m.exports, __req(name)); return m.exports;
}
function __req(from) {
  return function (r) {
    if (r.charAt(0) !== '.') return require(r);
    const P = require('path').posix; return __use(P.normalize(P.join(P.dirname(from), r)));
  };
}
const $ = __use;

/* ================= motor, dados e salas (módulos embutidos) ================= */
__def('data', function (module, exports, require) {
'use strict';
// Dados embutidos (gerados por tools/build-flat.js a partir de server/data/*.json)
const DATA = {"moves":[{"id":"body-slam","name":"Body Slam","type":"normal","cat":"physical","power":85,"acc":100,"pp":15,"prio":0,"flags":["contact"],"status":{"s":"par","chance":30}},{"id":"double-edge","name":"Double-Edge","type":"normal","cat":"physical","power":120,"acc":100,"pp":15,"prio":0,"flags":["contact"],"recoil":33},{"id":"return","name":"Return","type":"normal","cat":"physical","power":102,"acc":100,"pp":20,"prio":0,"flags":["contact"]},{"id":"extreme-speed","name":"Extreme Speed","type":"normal","cat":"physical","power":80,"acc":100,"pp":5,"prio":2,"flags":["contact"]},{"id":"quick-attack","name":"Quick Attack","type":"normal","cat":"physical","power":40,"acc":100,"pp":30,"prio":1,"flags":["contact"]},{"id":"facade","name":"Facade","type":"normal","cat":"physical","power":70,"acc":100,"pp":20,"prio":0,"flags":["contact"],"special":"facade"},{"id":"hyper-voice","name":"Hyper Voice","type":"normal","cat":"special","power":90,"acc":100,"pp":10,"prio":0,"flags":["sound"]},{"id":"boomburst","name":"Boomburst","type":"normal","cat":"special","power":140,"acc":100,"pp":10,"prio":0,"flags":["sound"]},{"id":"hyper-beam","name":"Hyper Beam","type":"normal","cat":"special","power":150,"acc":90,"pp":5,"prio":0,"special":"recharge"},{"id":"giga-impact","name":"Giga Impact","type":"normal","cat":"physical","power":150,"acc":90,"pp":5,"prio":0,"flags":["contact"],"special":"recharge"},{"id":"tri-attack","name":"Tri Attack","type":"normal","cat":"special","power":80,"acc":100,"pp":10,"prio":0,"special":"tri"},{"id":"fake-out","name":"Fake Out","type":"normal","cat":"physical","power":40,"acc":100,"pp":10,"prio":3,"flags":["contact"],"flinch":100,"special":"fakeout"},{"id":"explosion","name":"Explosion","type":"normal","cat":"physical","power":250,"acc":100,"pp":5,"prio":0,"special":"boom"},{"id":"self-destruct","name":"Self-Destruct","type":"normal","cat":"physical","power":200,"acc":100,"pp":5,"prio":0,"special":"boom"},{"id":"super-fang","name":"Super Fang","type":"normal","cat":"physical","power":null,"acc":90,"pp":10,"prio":0,"flags":["contact"],"fixed":"half"},{"id":"rapid-spin","name":"Rapid Spin","type":"normal","cat":"physical","power":50,"acc":100,"pp":40,"prio":0,"flags":["contact"],"special":"spin"},{"id":"swords-dance","name":"Swords Dance","type":"normal","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"atk":2}}},{"id":"work-up","name":"Work Up","type":"normal","cat":"status","power":null,"acc":null,"pp":30,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"atk":1,"spa":1}}},{"id":"protect","name":"Protect","type":"normal","cat":"status","power":null,"acc":null,"pp":10,"prio":4,"special":"prot"},{"id":"recover","name":"Recover","type":"normal","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"heal":50},{"id":"soft-boiled","name":"Soft-Boiled","type":"normal","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"heal":50},{"id":"slack-off","name":"Slack Off","type":"normal","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"heal":50},{"id":"roar","name":"Roar","type":"normal","cat":"status","power":null,"acc":null,"pp":20,"prio":-6,"special":"force"},{"id":"whirlwind","name":"Whirlwind","type":"normal","cat":"status","power":null,"acc":null,"pp":20,"prio":-6,"special":"force"},{"id":"glare","name":"Glare","type":"normal","cat":"status","power":null,"acc":100,"pp":30,"prio":0,"status":{"s":"par","chance":100}},{"id":"screech","name":"Screech","type":"normal","cat":"status","power":null,"acc":85,"pp":40,"prio":0,"boosts":{"target":"foe","chance":100,"stats":{"def":-2}}},{"id":"belly-drum","name":"Belly Drum","type":"normal","cat":"status","power":null,"acc":null,"pp":10,"prio":0,"special":"belly"},{"id":"sing","name":"Sing","type":"normal","cat":"status","power":null,"acc":55,"pp":15,"prio":0,"status":{"s":"slp","chance":100}},{"id":"supersonic","name":"Supersonic","type":"normal","cat":"status","power":null,"acc":55,"pp":20,"prio":0,"status":{"s":"cnf","chance":100}},{"id":"agility","name":"Agility","type":"psychic","cat":"status","power":null,"acc":null,"pp":30,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spe":2}}},{"id":"calm-mind","name":"Calm Mind","type":"psychic","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spa":1,"spd":1}}},{"id":"nasty-plot","name":"Nasty Plot","type":"dark","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spa":2}}},{"id":"amnesia","name":"Amnesia","type":"psychic","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spd":2}}},{"id":"cosmic-power","name":"Cosmic Power","type":"psychic","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"def":1,"spd":1}}},{"id":"rest","name":"Rest","type":"psychic","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"special":"rest"},{"id":"hypnosis","name":"Hypnosis","type":"psychic","cat":"status","power":null,"acc":60,"pp":20,"prio":0,"status":{"s":"slp","chance":100}},{"id":"reflect","name":"Reflect","type":"psychic","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"special":"reflect"},{"id":"light-screen","name":"Light Screen","type":"psychic","cat":"status","power":null,"acc":null,"pp":30,"prio":0,"special":"lscreen"},{"id":"close-combat","name":"Close Combat","type":"fighting","cat":"physical","power":120,"acc":100,"pp":5,"prio":0,"flags":["contact"],"boosts":{"target":"self","chance":100,"stats":{"def":-1,"spd":-1}}},{"id":"drain-punch","name":"Drain Punch","type":"fighting","cat":"physical","power":75,"acc":100,"pp":10,"prio":0,"flags":["contact","punch"],"drain":50},{"id":"superpower","name":"Superpower","type":"fighting","cat":"physical","power":120,"acc":100,"pp":5,"prio":0,"flags":["contact"],"boosts":{"target":"self","chance":100,"stats":{"atk":-1,"def":-1}}},{"id":"brick-break","name":"Brick Break","type":"fighting","cat":"physical","power":75,"acc":100,"pp":15,"prio":0,"flags":["contact"]},{"id":"mach-punch","name":"Mach Punch","type":"fighting","cat":"physical","power":40,"acc":100,"pp":30,"prio":1,"flags":["contact","punch"]},{"id":"hammer-arm","name":"Hammer Arm","type":"fighting","cat":"physical","power":100,"acc":90,"pp":10,"prio":0,"flags":["contact","punch"],"boosts":{"target":"self","chance":100,"stats":{"spe":-1}}},{"id":"high-jump-kick","name":"High Jump Kick","type":"fighting","cat":"physical","power":130,"acc":90,"pp":10,"prio":0,"flags":["contact"],"special":"crash"},{"id":"sacred-sword","name":"Sacred Sword","type":"fighting","cat":"physical","power":90,"acc":100,"pp":15,"prio":0,"flags":["contact"]},{"id":"force-palm","name":"Force Palm","type":"fighting","cat":"physical","power":60,"acc":100,"pp":10,"prio":0,"flags":["contact"],"status":{"s":"par","chance":30}},{"id":"seismic-toss","name":"Seismic Toss","type":"fighting","cat":"physical","power":null,"acc":100,"pp":20,"prio":0,"flags":["contact"],"fixed":"level"},{"id":"aura-sphere","name":"Aura Sphere","type":"fighting","cat":"special","power":80,"acc":null,"pp":20,"prio":0,"flags":["pulse"]},{"id":"focus-blast","name":"Focus Blast","type":"fighting","cat":"special","power":120,"acc":70,"pp":5,"prio":0,"boosts":{"target":"foe","chance":10,"stats":{"spd":-1}}},{"id":"brave-bird","name":"Brave Bird","type":"flying","cat":"physical","power":120,"acc":100,"pp":15,"prio":0,"flags":["contact"],"recoil":33},{"id":"aerial-ace","name":"Aerial Ace","type":"flying","cat":"physical","power":60,"acc":null,"pp":20,"prio":0,"flags":["contact"]},{"id":"drill-peck","name":"Drill Peck","type":"flying","cat":"physical","power":80,"acc":100,"pp":20,"prio":0,"flags":["contact"]},{"id":"acrobatics","name":"Acrobatics","type":"flying","cat":"physical","power":55,"acc":100,"pp":15,"prio":0,"flags":["contact"],"special":"acro"},{"id":"air-slash","name":"Air Slash","type":"flying","cat":"special","power":75,"acc":95,"pp":15,"prio":0,"flinch":30},{"id":"hurricane","name":"Hurricane","type":"flying","cat":"special","power":110,"acc":70,"pp":10,"prio":0,"status":{"s":"cnf","chance":30}},{"id":"oblivion-wing","name":"Oblivion Wing","type":"flying","cat":"special","power":80,"acc":100,"pp":10,"prio":0,"drain":75},{"id":"poison-jab","name":"Poison Jab","type":"poison","cat":"physical","power":80,"acc":100,"pp":20,"prio":0,"flags":["contact"],"status":{"s":"psn","chance":30}},{"id":"gunk-shot","name":"Gunk Shot","type":"poison","cat":"physical","power":120,"acc":80,"pp":5,"prio":0,"status":{"s":"psn","chance":30}},{"id":"cross-poison","name":"Cross Poison","type":"poison","cat":"physical","power":70,"acc":100,"pp":20,"prio":0,"flags":["contact"],"crit":1,"status":{"s":"psn","chance":10}},{"id":"sludge-bomb","name":"Sludge Bomb","type":"poison","cat":"special","power":90,"acc":100,"pp":10,"prio":0,"status":{"s":"psn","chance":30}},{"id":"sludge-wave","name":"Sludge Wave","type":"poison","cat":"special","power":95,"acc":100,"pp":10,"prio":0,"status":{"s":"psn","chance":10}},{"id":"venoshock","name":"Venoshock","type":"poison","cat":"special","power":65,"acc":100,"pp":10,"prio":0,"special":"venoshock"},{"id":"acid-spray","name":"Acid Spray","type":"poison","cat":"special","power":40,"acc":100,"pp":20,"prio":0,"boosts":{"target":"foe","chance":100,"stats":{"spd":-2}}},{"id":"toxic","name":"Toxic","type":"poison","cat":"status","power":null,"acc":90,"pp":10,"prio":0,"status":{"s":"tox","chance":100}},{"id":"earthquake","name":"Earthquake","type":"ground","cat":"physical","power":100,"acc":100,"pp":10,"prio":0},{"id":"drill-run","name":"Drill Run","type":"ground","cat":"physical","power":80,"acc":95,"pp":10,"prio":0,"flags":["contact"],"crit":1},{"id":"bulldoze","name":"Bulldoze","type":"ground","cat":"physical","power":60,"acc":100,"pp":20,"prio":0,"boosts":{"target":"foe","chance":100,"stats":{"spe":-1}}},{"id":"high-horsepower","name":"High Horsepower","type":"ground","cat":"physical","power":95,"acc":95,"pp":10,"prio":0,"flags":["contact"]},{"id":"earth-power","name":"Earth Power","type":"ground","cat":"special","power":90,"acc":100,"pp":10,"prio":0,"boosts":{"target":"foe","chance":10,"stats":{"spd":-1}}},{"id":"spikes","name":"Spikes","type":"ground","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"special":"spikes"},{"id":"stone-edge","name":"Stone Edge","type":"rock","cat":"physical","power":100,"acc":80,"pp":5,"prio":0,"crit":1},{"id":"rock-slide","name":"Rock Slide","type":"rock","cat":"physical","power":75,"acc":90,"pp":10,"prio":0,"flinch":30},{"id":"head-smash","name":"Head Smash","type":"rock","cat":"physical","power":150,"acc":80,"pp":5,"prio":0,"flags":["contact"],"recoil":50},{"id":"rock-blast","name":"Rock Blast","type":"rock","cat":"physical","power":25,"acc":90,"pp":10,"prio":0,"hits":[2,5]},{"id":"rock-tomb","name":"Rock Tomb","type":"rock","cat":"physical","power":60,"acc":95,"pp":15,"prio":0,"boosts":{"target":"foe","chance":100,"stats":{"spe":-1}}},{"id":"accelerock","name":"Accelerock","type":"rock","cat":"physical","power":40,"acc":100,"pp":20,"prio":1,"flags":["contact"]},{"id":"power-gem","name":"Power Gem","type":"rock","cat":"special","power":80,"acc":100,"pp":20,"prio":0},{"id":"stealth-rock","name":"Stealth Rock","type":"rock","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"special":"rocks"},{"id":"x-scissor","name":"X-Scissor","type":"bug","cat":"physical","power":80,"acc":100,"pp":15,"prio":0,"flags":["contact"]},{"id":"megahorn","name":"Megahorn","type":"bug","cat":"physical","power":120,"acc":85,"pp":10,"prio":0,"flags":["contact"]},{"id":"leech-life","name":"Leech Life","type":"bug","cat":"physical","power":80,"acc":100,"pp":10,"prio":0,"flags":["contact"],"drain":50},{"id":"u-turn","name":"U-turn","type":"bug","cat":"physical","power":70,"acc":100,"pp":20,"prio":0,"flags":["contact"],"special":"pivot"},{"id":"lunge","name":"Lunge","type":"bug","cat":"physical","power":80,"acc":100,"pp":15,"prio":0,"flags":["contact"],"boosts":{"target":"foe","chance":100,"stats":{"atk":-1}}},{"id":"pin-missile","name":"Pin Missile","type":"bug","cat":"physical","power":25,"acc":95,"pp":20,"prio":0,"hits":[2,5]},{"id":"bug-buzz","name":"Bug Buzz","type":"bug","cat":"special","power":90,"acc":100,"pp":10,"prio":0,"flags":["sound"],"boosts":{"target":"foe","chance":10,"stats":{"spd":-1}}},{"id":"signal-beam","name":"Signal Beam","type":"bug","cat":"special","power":75,"acc":100,"pp":15,"prio":0,"status":{"s":"cnf","chance":10}},{"id":"shadow-claw","name":"Shadow Claw","type":"ghost","cat":"physical","power":70,"acc":100,"pp":15,"prio":0,"flags":["contact"],"crit":1},{"id":"shadow-sneak","name":"Shadow Sneak","type":"ghost","cat":"physical","power":40,"acc":100,"pp":30,"prio":1,"flags":["contact"]},{"id":"poltergeist","name":"Poltergeist","type":"ghost","cat":"physical","power":110,"acc":90,"pp":5,"prio":0,"special":"polter"},{"id":"shadow-ball","name":"Shadow Ball","type":"ghost","cat":"special","power":80,"acc":100,"pp":15,"prio":0,"boosts":{"target":"foe","chance":20,"stats":{"spd":-1}}},{"id":"hex","name":"Hex","type":"ghost","cat":"special","power":65,"acc":100,"pp":10,"prio":0,"special":"hex"},{"id":"night-shade","name":"Night Shade","type":"ghost","cat":"special","power":null,"acc":100,"pp":15,"prio":0,"fixed":"level"},{"id":"iron-head","name":"Iron Head","type":"steel","cat":"physical","power":80,"acc":100,"pp":15,"prio":0,"flags":["contact"],"flinch":30},{"id":"bullet-punch","name":"Bullet Punch","type":"steel","cat":"physical","power":40,"acc":100,"pp":30,"prio":1,"flags":["contact","punch"]},{"id":"meteor-mash","name":"Meteor Mash","type":"steel","cat":"physical","power":90,"acc":90,"pp":10,"prio":0,"flags":["contact","punch"],"boosts":{"target":"self","chance":20,"stats":{"atk":1}}},{"id":"iron-tail","name":"Iron Tail","type":"steel","cat":"physical","power":100,"acc":75,"pp":15,"prio":0,"flags":["contact"],"boosts":{"target":"foe","chance":30,"stats":{"def":-1}}},{"id":"gyro-ball","name":"Gyro Ball","type":"steel","cat":"physical","power":null,"acc":100,"pp":5,"prio":0,"flags":["contact"],"special":"gyro"},{"id":"steel-wing","name":"Steel Wing","type":"steel","cat":"physical","power":70,"acc":90,"pp":25,"prio":0,"flags":["contact"],"boosts":{"target":"self","chance":10,"stats":{"def":1}}},{"id":"flash-cannon","name":"Flash Cannon","type":"steel","cat":"special","power":80,"acc":100,"pp":10,"prio":0,"boosts":{"target":"foe","chance":10,"stats":{"spd":-1}}},{"id":"iron-defense","name":"Iron Defense","type":"steel","cat":"status","power":null,"acc":null,"pp":15,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"def":2}}},{"id":"flare-blitz","name":"Flare Blitz","type":"fire","cat":"physical","power":120,"acc":100,"pp":15,"prio":0,"flags":["contact"],"recoil":33,"status":{"s":"brn","chance":10}},{"id":"fire-punch","name":"Fire Punch","type":"fire","cat":"physical","power":75,"acc":100,"pp":15,"prio":0,"flags":["contact","punch"],"status":{"s":"brn","chance":10}},{"id":"fire-fang","name":"Fire Fang","type":"fire","cat":"physical","power":65,"acc":95,"pp":15,"prio":0,"flags":["contact","bite"],"status":{"s":"brn","chance":10},"flinch":10},{"id":"flame-charge","name":"Flame Charge","type":"fire","cat":"physical","power":50,"acc":100,"pp":20,"prio":0,"flags":["contact"],"boosts":{"target":"self","chance":100,"stats":{"spe":1}}},{"id":"sacred-fire","name":"Sacred Fire","type":"fire","cat":"physical","power":100,"acc":95,"pp":5,"prio":0,"status":{"s":"brn","chance":50}},{"id":"flamethrower","name":"Flamethrower","type":"fire","cat":"special","power":90,"acc":100,"pp":15,"prio":0,"status":{"s":"brn","chance":10}},{"id":"fire-blast","name":"Fire Blast","type":"fire","cat":"special","power":110,"acc":85,"pp":5,"prio":0,"status":{"s":"brn","chance":10}},{"id":"overheat","name":"Overheat","type":"fire","cat":"special","power":130,"acc":90,"pp":5,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spa":-2}}},{"id":"heat-wave","name":"Heat Wave","type":"fire","cat":"special","power":95,"acc":90,"pp":10,"prio":0,"status":{"s":"brn","chance":10}},{"id":"lava-plume","name":"Lava Plume","type":"fire","cat":"special","power":80,"acc":100,"pp":15,"prio":0,"status":{"s":"brn","chance":30}},{"id":"eruption","name":"Eruption","type":"fire","cat":"special","power":150,"acc":100,"pp":5,"prio":0,"special":"eruption"},{"id":"mystical-fire","name":"Mystical Fire","type":"fire","cat":"special","power":75,"acc":100,"pp":10,"prio":0,"boosts":{"target":"foe","chance":100,"stats":{"spa":-1}}},{"id":"will-o-wisp","name":"Will-O-Wisp","type":"fire","cat":"status","power":null,"acc":85,"pp":15,"prio":0,"status":{"s":"brn","chance":100}},{"id":"sunny-day","name":"Sunny Day","type":"fire","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"weather":"sun"},{"id":"waterfall","name":"Waterfall","type":"water","cat":"physical","power":80,"acc":100,"pp":15,"prio":0,"flags":["contact"],"flinch":20},{"id":"aqua-tail","name":"Aqua Tail","type":"water","cat":"physical","power":90,"acc":90,"pp":10,"prio":0,"flags":["contact"]},{"id":"aqua-jet","name":"Aqua Jet","type":"water","cat":"physical","power":40,"acc":100,"pp":20,"prio":1,"flags":["contact"]},{"id":"liquidation","name":"Liquidation","type":"water","cat":"physical","power":85,"acc":100,"pp":10,"prio":0,"flags":["contact"],"boosts":{"target":"foe","chance":20,"stats":{"def":-1}}},{"id":"crabhammer","name":"Crabhammer","type":"water","cat":"physical","power":100,"acc":90,"pp":10,"prio":0,"flags":["contact"],"crit":1},{"id":"razor-shell","name":"Razor Shell","type":"water","cat":"physical","power":75,"acc":95,"pp":10,"prio":0,"flags":["contact"],"boosts":{"target":"foe","chance":50,"stats":{"def":-1}}},{"id":"wave-crash","name":"Wave Crash","type":"water","cat":"physical","power":120,"acc":100,"pp":10,"prio":0,"flags":["contact"],"recoil":33},{"id":"surf","name":"Surf","type":"water","cat":"special","power":90,"acc":100,"pp":15,"prio":0},{"id":"hydro-pump","name":"Hydro Pump","type":"water","cat":"special","power":110,"acc":80,"pp":5,"prio":0},{"id":"scald","name":"Scald","type":"water","cat":"special","power":80,"acc":100,"pp":15,"prio":0,"status":{"s":"brn","chance":30}},{"id":"bubble-beam","name":"Bubble Beam","type":"water","cat":"special","power":65,"acc":100,"pp":20,"prio":0,"boosts":{"target":"foe","chance":10,"stats":{"spe":-1}}},{"id":"water-spout","name":"Water Spout","type":"water","cat":"special","power":150,"acc":100,"pp":5,"prio":0,"special":"eruption"},{"id":"rain-dance","name":"Rain Dance","type":"water","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"weather":"rain"},{"id":"energy-ball","name":"Energy Ball","type":"grass","cat":"special","power":90,"acc":100,"pp":10,"prio":0,"boosts":{"target":"foe","chance":10,"stats":{"spd":-1}}},{"id":"giga-drain","name":"Giga Drain","type":"grass","cat":"special","power":75,"acc":100,"pp":10,"prio":0,"drain":50},{"id":"leaf-storm","name":"Leaf Storm","type":"grass","cat":"special","power":130,"acc":90,"pp":5,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spa":-2}}},{"id":"leaf-blade","name":"Leaf Blade","type":"grass","cat":"physical","power":90,"acc":100,"pp":15,"prio":0,"flags":["contact"],"crit":1},{"id":"seed-bomb","name":"Seed Bomb","type":"grass","cat":"physical","power":80,"acc":100,"pp":15,"prio":0},{"id":"wood-hammer","name":"Wood Hammer","type":"grass","cat":"physical","power":120,"acc":100,"pp":15,"prio":0,"flags":["contact"],"recoil":33},{"id":"power-whip","name":"Power Whip","type":"grass","cat":"physical","power":120,"acc":85,"pp":10,"prio":0,"flags":["contact"]},{"id":"horn-leech","name":"Horn Leech","type":"grass","cat":"physical","power":75,"acc":100,"pp":10,"prio":0,"flags":["contact"],"drain":50},{"id":"trop-kick","name":"Trop Kick","type":"grass","cat":"physical","power":70,"acc":100,"pp":15,"prio":0,"flags":["contact"],"boosts":{"target":"foe","chance":100,"stats":{"atk":-1}}},{"id":"spore","name":"Spore","type":"grass","cat":"status","power":null,"acc":100,"pp":15,"prio":0,"status":{"s":"slp","chance":100}},{"id":"sleep-powder","name":"Sleep Powder","type":"grass","cat":"status","power":null,"acc":75,"pp":15,"prio":0,"status":{"s":"slp","chance":100}},{"id":"stun-spore","name":"Stun Spore","type":"grass","cat":"status","power":null,"acc":75,"pp":30,"prio":0,"status":{"s":"par","chance":100}},{"id":"synthesis","name":"Synthesis","type":"grass","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"heal":50},{"id":"thunderbolt","name":"Thunderbolt","type":"electric","cat":"special","power":90,"acc":100,"pp":15,"prio":0,"status":{"s":"par","chance":10}},{"id":"thunder","name":"Thunder","type":"electric","cat":"special","power":110,"acc":70,"pp":10,"prio":0,"status":{"s":"par","chance":30}},{"id":"discharge","name":"Discharge","type":"electric","cat":"special","power":80,"acc":100,"pp":15,"prio":0,"status":{"s":"par","chance":30}},{"id":"volt-switch","name":"Volt Switch","type":"electric","cat":"special","power":70,"acc":100,"pp":20,"prio":0,"special":"pivot"},{"id":"volt-tackle","name":"Volt Tackle","type":"electric","cat":"physical","power":120,"acc":100,"pp":15,"prio":0,"flags":["contact"],"recoil":33,"status":{"s":"par","chance":10}},{"id":"wild-charge","name":"Wild Charge","type":"electric","cat":"physical","power":90,"acc":100,"pp":15,"prio":0,"flags":["contact"],"recoil":25},{"id":"thunder-punch","name":"Thunder Punch","type":"electric","cat":"physical","power":75,"acc":100,"pp":15,"prio":0,"flags":["contact","punch"],"status":{"s":"par","chance":10}},{"id":"thunder-fang","name":"Thunder Fang","type":"electric","cat":"physical","power":65,"acc":95,"pp":15,"prio":0,"flags":["contact","bite"],"status":{"s":"par","chance":10},"flinch":10},{"id":"spark","name":"Spark","type":"electric","cat":"physical","power":65,"acc":100,"pp":20,"prio":0,"flags":["contact"],"status":{"s":"par","chance":30}},{"id":"thunder-wave","name":"Thunder Wave","type":"electric","cat":"status","power":null,"acc":90,"pp":20,"prio":0,"status":{"s":"par","chance":100}},{"id":"psychic","name":"Psychic","type":"psychic","cat":"special","power":90,"acc":100,"pp":10,"prio":0,"boosts":{"target":"foe","chance":10,"stats":{"spd":-1}}},{"id":"psyshock","name":"Psyshock","type":"psychic","cat":"special","power":80,"acc":100,"pp":10,"prio":0,"special":"psyshock"},{"id":"extrasensory","name":"Extrasensory","type":"psychic","cat":"special","power":80,"acc":100,"pp":20,"prio":0,"flinch":10},{"id":"zen-headbutt","name":"Zen Headbutt","type":"psychic","cat":"physical","power":80,"acc":90,"pp":15,"prio":0,"flags":["contact"],"flinch":20},{"id":"psycho-cut","name":"Psycho Cut","type":"psychic","cat":"physical","power":70,"acc":100,"pp":20,"prio":0,"crit":1},{"id":"stored-power","name":"Stored Power","type":"psychic","cat":"special","power":20,"acc":100,"pp":10,"prio":0,"special":"stored"},{"id":"ice-beam","name":"Ice Beam","type":"ice","cat":"special","power":90,"acc":100,"pp":10,"prio":0,"status":{"s":"frz","chance":10}},{"id":"blizzard","name":"Blizzard","type":"ice","cat":"special","power":110,"acc":70,"pp":5,"prio":0,"status":{"s":"frz","chance":10}},{"id":"freeze-dry","name":"Freeze-Dry","type":"ice","cat":"special","power":70,"acc":100,"pp":20,"prio":0,"status":{"s":"frz","chance":10},"special":"freezedry"},{"id":"icicle-spear","name":"Icicle Spear","type":"ice","cat":"physical","power":25,"acc":100,"pp":30,"prio":0,"hits":[2,5]},{"id":"ice-punch","name":"Ice Punch","type":"ice","cat":"physical","power":75,"acc":100,"pp":15,"prio":0,"flags":["contact","punch"],"status":{"s":"frz","chance":10}},{"id":"ice-shard","name":"Ice Shard","type":"ice","cat":"physical","power":40,"acc":100,"pp":30,"prio":1},{"id":"icicle-crash","name":"Icicle Crash","type":"ice","cat":"physical","power":85,"acc":90,"pp":10,"prio":0,"flinch":30},{"id":"ice-hammer","name":"Ice Hammer","type":"ice","cat":"physical","power":100,"acc":90,"pp":10,"prio":0,"flags":["contact","punch"],"boosts":{"target":"self","chance":100,"stats":{"spe":-1}}},{"id":"frost-breath","name":"Frost Breath","type":"ice","cat":"special","power":60,"acc":90,"pp":10,"prio":0,"crit":3},{"id":"hail","name":"Hail","type":"ice","cat":"status","power":null,"acc":null,"pp":10,"prio":0,"weather":"hail"},{"id":"aurora-veil","name":"Aurora Veil","type":"ice","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"special":"veil"},{"id":"dragon-claw","name":"Dragon Claw","type":"dragon","cat":"physical","power":80,"acc":100,"pp":15,"prio":0,"flags":["contact"]},{"id":"dragon-rush","name":"Dragon Rush","type":"dragon","cat":"physical","power":100,"acc":75,"pp":10,"prio":0,"flags":["contact"],"flinch":20},{"id":"dragon-tail","name":"Dragon Tail","type":"dragon","cat":"physical","power":60,"acc":90,"pp":10,"prio":-6,"flags":["contact"],"special":"force"},{"id":"dragon-hammer","name":"Dragon Hammer","type":"dragon","cat":"physical","power":90,"acc":100,"pp":15,"prio":0,"flags":["contact"]},{"id":"scale-shot","name":"Scale Shot","type":"dragon","cat":"physical","power":25,"acc":90,"pp":20,"prio":0,"hits":[2,5]},{"id":"dual-chop","name":"Dual Chop","type":"dragon","cat":"physical","power":40,"acc":90,"pp":15,"prio":0,"flags":["contact"],"hits":[2,2]},{"id":"dragon-pulse","name":"Dragon Pulse","type":"dragon","cat":"special","power":85,"acc":100,"pp":10,"prio":0,"flags":["pulse"]},{"id":"draco-meteor","name":"Draco Meteor","type":"dragon","cat":"special","power":130,"acc":90,"pp":5,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spa":-2}}},{"id":"spacial-rend","name":"Spacial Rend","type":"dragon","cat":"special","power":100,"acc":95,"pp":5,"prio":0,"crit":1},{"id":"clanging-scales","name":"Clanging Scales","type":"dragon","cat":"special","power":110,"acc":100,"pp":5,"prio":0,"flags":["sound"],"boosts":{"target":"self","chance":100,"stats":{"def":-1}}},{"id":"dragon-dance","name":"Dragon Dance","type":"dragon","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"atk":1,"spe":1}}},{"id":"crunch","name":"Crunch","type":"dark","cat":"physical","power":80,"acc":100,"pp":15,"prio":0,"flags":["contact","bite"],"boosts":{"target":"foe","chance":20,"stats":{"def":-1}}},{"id":"knock-off","name":"Knock Off","type":"dark","cat":"physical","power":65,"acc":100,"pp":20,"prio":0,"flags":["contact"],"special":"knock"},{"id":"sucker-punch","name":"Sucker Punch","type":"dark","cat":"physical","power":70,"acc":100,"pp":5,"prio":1,"flags":["contact"],"special":"sucker"},{"id":"night-slash","name":"Night Slash","type":"dark","cat":"physical","power":70,"acc":100,"pp":15,"prio":0,"flags":["contact"],"crit":1},{"id":"foul-play","name":"Foul Play","type":"dark","cat":"physical","power":95,"acc":100,"pp":15,"prio":0,"flags":["contact"],"special":"foul"},{"id":"throat-chop","name":"Throat Chop","type":"dark","cat":"physical","power":80,"acc":100,"pp":15,"prio":0,"flags":["contact"]},{"id":"darkest-lariat","name":"Darkest Lariat","type":"dark","cat":"physical","power":85,"acc":100,"pp":10,"prio":0,"flags":["contact"]},{"id":"dark-pulse","name":"Dark Pulse","type":"dark","cat":"special","power":80,"acc":100,"pp":15,"prio":0,"flags":["pulse"],"flinch":20},{"id":"snarl","name":"Snarl","type":"dark","cat":"special","power":55,"acc":95,"pp":15,"prio":0,"flags":["sound"],"boosts":{"target":"foe","chance":100,"stats":{"spa":-1}}},{"id":"play-rough","name":"Play Rough","type":"fairy","cat":"physical","power":90,"acc":90,"pp":10,"prio":0,"flags":["contact"],"boosts":{"target":"foe","chance":10,"stats":{"atk":-1}}},{"id":"spirit-break","name":"Spirit Break","type":"fairy","cat":"physical","power":75,"acc":100,"pp":15,"prio":0,"flags":["contact"],"boosts":{"target":"foe","chance":100,"stats":{"spa":-1}}},{"id":"moonblast","name":"Moonblast","type":"fairy","cat":"special","power":95,"acc":100,"pp":15,"prio":0,"boosts":{"target":"foe","chance":30,"stats":{"spa":-1}}},{"id":"dazzling-gleam","name":"Dazzling Gleam","type":"fairy","cat":"special","power":80,"acc":100,"pp":10,"prio":0},{"id":"draining-kiss","name":"Draining Kiss","type":"fairy","cat":"special","power":50,"acc":100,"pp":10,"prio":0,"flags":["contact"],"drain":75},{"id":"disarming-voice","name":"Disarming Voice","type":"fairy","cat":"special","power":40,"acc":null,"pp":15,"prio":0,"flags":["sound"]},{"id":"fleur-cannon","name":"Fleur Cannon","type":"fairy","cat":"special","power":130,"acc":90,"pp":5,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spa":-2}}},{"id":"quiver-dance","name":"Quiver Dance","type":"bug","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"spa":1,"spd":1,"spe":1}}},{"id":"shell-smash","name":"Shell Smash","type":"normal","cat":"status","power":null,"acc":null,"pp":15,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"atk":2,"spa":2,"spe":2,"def":-1,"spd":-1}}},{"id":"bulk-up","name":"Bulk Up","type":"fighting","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"atk":1,"def":1}}},{"id":"coil","name":"Coil","type":"poison","cat":"status","power":null,"acc":null,"pp":20,"prio":0,"boosts":{"target":"self","chance":100,"stats":{"atk":1,"def":1}}},{"id":"roost","name":"Roost","type":"flying","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"heal":50},{"id":"moonlight","name":"Moonlight","type":"fairy","cat":"status","power":null,"acc":null,"pp":5,"prio":0,"heal":50},{"id":"charm","name":"Charm","type":"fairy","cat":"status","power":null,"acc":100,"pp":20,"prio":0,"boosts":{"target":"foe","chance":100,"stats":{"atk":-2}}},{"id":"confuse-ray","name":"Confuse Ray","type":"ghost","cat":"status","power":null,"acc":100,"pp":10,"prio":0,"status":{"s":"cnf","chance":100}},{"id":"lovely-kiss","name":"Lovely Kiss","type":"normal","cat":"status","power":null,"acc":75,"pp":10,"prio":0,"status":{"s":"slp","chance":100}},{"id":"sandstorm","name":"Sandstorm","type":"rock","cat":"status","power":null,"acc":null,"pp":10,"prio":0,"weather":"sand"}],"gens":{"1":[{"id":"venusaur","dex":3,"name":"Venusaur","gen":1,"types":["grass","poison"],"stats":{"hp":80,"atk":82,"def":83,"spa":100,"spd":100,"spe":80},"abilities":["overgrow","chlorophyll"],"sd":"venusaur","source":"seed","pool":["energy-ball","sludge-bomb","focus-blast","earth-power","sleep-powder","synthesis","nasty-plot","calm-mind","protect","toxic","giga-drain","leaf-storm","sludge-wave","shadow-ball"],"moves":["energy-ball","sludge-bomb","focus-blast","synthesis"],"megas":[{"id":"venusaur-mega","name":"Mega Venusaur","types":["grass","poison"],"stats":{"hp":80,"atk":100,"def":123,"spa":122,"spd":120,"spe":80},"ability":"thick-fat","sd":"venusaur-mega"}]},{"id":"charizard","dex":6,"name":"Charizard","gen":1,"types":["fire","flying"],"stats":{"hp":78,"atk":84,"def":78,"spa":109,"spd":85,"spe":100},"abilities":["blaze","solar-power"],"sd":"charizard","source":"seed","pool":["flamethrower","air-slash","earth-power","ice-beam","dragon-dance","nasty-plot","calm-mind","thunder-wave","protect","toxic","fire-blast","overheat","hurricane","shadow-ball"],"moves":["flamethrower","air-slash","earth-power","dragon-dance"],"megas":[{"id":"charizard-mega-x","name":"Mega Charizard X","types":["fire","dragon"],"stats":{"hp":78,"atk":130,"def":111,"spa":130,"spd":85,"spe":100},"ability":"tough-claws","sd":"charizard-megax"},{"id":"charizard-mega-y","name":"Mega Charizard Y","types":["fire","flying"],"stats":{"hp":78,"atk":104,"def":78,"spa":159,"spd":115,"spe":100},"ability":"drought","sd":"charizard-megay"}]},{"id":"blastoise","dex":9,"name":"Blastoise","gen":1,"types":["water"],"stats":{"hp":79,"atk":83,"def":100,"spa":85,"spd":105,"spe":78},"abilities":["torrent","rain-dish"],"sd":"blastoise","source":"seed","pool":["surf","focus-blast","ice-beam","rapid-spin","recover","toxic","protect","hydro-pump","waterfall","aqua-tail","shadow-ball","earth-power"],"moves":["surf","focus-blast","recover","ice-beam"],"megas":[{"id":"blastoise-mega","name":"Mega Blastoise","types":["water","ground"],"stats":{"hp":79,"atk":103,"def":120,"spa":135,"spd":115,"spe":78},"ability":"mega-launcher","sd":"blastoise-mega"}]},{"id":"butterfree","dex":12,"name":"Butterfree","gen":1,"types":["bug","flying"],"stats":{"hp":60,"atk":45,"def":50,"spa":90,"spd":80,"spe":70},"abilities":["compound-eyes","tinted-lens"],"sd":"butterfree","source":"seed","pool":["bug-buzz","air-slash","earth-power","ice-beam","quiver-dance","sleep-powder","protect","toxic","signal-beam","hurricane","focus-blast","shadow-ball"],"moves":["bug-buzz","air-slash","earth-power","toxic"],"megas":[]},{"id":"beedrill","dex":15,"name":"Beedrill","gen":1,"types":["bug","poison"],"stats":{"hp":65,"atk":90,"def":40,"spa":45,"spd":80,"spe":75},"abilities":["swarm","sniper"],"sd":"beedrill","source":"seed","pool":["x-scissor","poison-jab","earthquake","stone-edge","swords-dance","protect","toxic","megahorn","leech-life","gunk-shot","cross-poison","ice-punch","close-combat"],"moves":["x-scissor","poison-jab","earthquake","swords-dance"],"megas":[{"id":"beedrill-mega","name":"Mega Beedrill","types":["bug","poison"],"stats":{"hp":65,"atk":150,"def":40,"spa":15,"spd":80,"spe":145},"ability":"adaptability","sd":"beedrill-mega"}]},{"id":"pidgeot","dex":18,"name":"Pidgeot","gen":1,"types":["normal","flying"],"stats":{"hp":83,"atk":80,"def":75,"spa":70,"spd":70,"spe":101},"abilities":["keen-eye","tangled-feet"],"sd":"pidgeot","source":"seed","pool":["return","brave-bird","earthquake","close-combat","roost","thunder-wave","protect","toxic","body-slam","hyper-voice","tri-attack","aerial-ace","air-slash","hurricane"],"moves":["return","brave-bird","earthquake","roost"],"megas":[{"id":"pidgeot-mega","name":"Mega Pidgeot","types":["normal","flying"],"stats":{"hp":83,"atk":80,"def":80,"spa":135,"spd":80,"spe":121},"ability":"no-guard","sd":"pidgeot-mega"}]},{"id":"raticate","dex":20,"name":"Raticate","gen":1,"types":["normal"],"stats":{"hp":55,"atk":81,"def":60,"spa":50,"spd":70,"spe":97},"abilities":["guts","hustle"],"sd":"raticate","source":"seed","pool":["return","earthquake","ice-punch","swords-dance","thunder-wave","protect","toxic","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"fearow","dex":22,"name":"Fearow","gen":1,"types":["normal","flying"],"stats":{"hp":65,"atk":90,"def":65,"spa":61,"spd":61,"spe":100},"abilities":["keen-eye","sniper"],"sd":"fearow","source":"seed","pool":["return","brave-bird","earthquake","close-combat","roost","thunder-wave","protect","toxic","body-slam","double-edge","aerial-ace","drill-peck","ice-punch","knock-off"],"moves":["return","brave-bird","earthquake","roost"],"megas":[]},{"id":"arbok","dex":24,"name":"Arbok","gen":1,"types":["poison"],"stats":{"hp":60,"atk":95,"def":69,"spa":65,"spd":79,"spe":80},"abilities":["intimidate","shed-skin"],"sd":"arbok","source":"seed","pool":["poison-jab","earthquake","stone-edge","glare","protect","toxic","gunk-shot","cross-poison","play-rough","knock-off"],"moves":["poison-jab","earthquake","toxic","stone-edge"],"megas":[]},{"id":"raichu","dex":26,"name":"Raichu","gen":1,"types":["electric"],"stats":{"hp":60,"atk":90,"def":55,"spa":90,"spd":80,"spe":110},"abilities":["static","lightning-rod"],"sd":"raichu","source":"seed","pool":["wild-charge","earthquake","close-combat","nasty-plot","thunder-wave","protect","toxic","volt-tackle","thunderbolt","thunder","ice-punch","knock-off"],"moves":["wild-charge","earthquake","nasty-plot","close-combat"],"megas":[]},{"id":"sandslash","dex":28,"name":"Sandslash","gen":1,"types":["ground"],"stats":{"hp":75,"atk":100,"def":110,"spa":45,"spd":55,"spe":65},"abilities":["sand-rush","sand-veil"],"sd":"sandslash","source":"seed","pool":["earthquake","ice-punch","close-combat","swords-dance","rapid-spin","protect","toxic","drill-run","bulldoze","knock-off","brave-bird"],"moves":["earthquake","ice-punch","swords-dance","close-combat"],"megas":[]},{"id":"nidoqueen","dex":31,"name":"Nidoqueen","gen":1,"types":["poison","ground"],"stats":{"hp":90,"atk":92,"def":87,"spa":75,"spd":85,"spe":76},"abilities":["sheer-force","poison-point"],"sd":"nidoqueen","source":"seed","pool":["poison-jab","earthquake","stone-edge","play-rough","stealth-rock","protect","toxic","gunk-shot","cross-poison","drill-run","bulldoze","knock-off","leaf-blade"],"moves":["poison-jab","earthquake","stone-edge","toxic"],"megas":[]},{"id":"nidoking","dex":34,"name":"Nidoking","gen":1,"types":["poison","ground"],"stats":{"hp":81,"atk":102,"def":77,"spa":85,"spd":75,"spe":85},"abilities":["sheer-force","poison-point"],"sd":"nidoking","source":"seed","pool":["poison-jab","earthquake","stone-edge","play-rough","stealth-rock","swords-dance","protect","toxic","gunk-shot","cross-poison","drill-run","bulldoze","knock-off","leaf-blade"],"moves":["poison-jab","earthquake","stone-edge","swords-dance"],"megas":[]},{"id":"clefable","dex":36,"name":"Clefable","gen":1,"types":["fairy"],"stats":{"hp":95,"atk":70,"def":73,"spa":95,"spd":90,"spe":60},"abilities":["magic-guard","unaware"],"sd":"clefable","source":"seed","pool":["moonblast","earth-power","ice-beam","calm-mind","soft-boiled","protect","toxic","dazzling-gleam","draining-kiss","shadow-ball","focus-blast"],"moves":["moonblast","earth-power","calm-mind","ice-beam"],"megas":[]},{"id":"ninetales","dex":38,"name":"Ninetales","gen":1,"types":["fire"],"stats":{"hp":73,"atk":76,"def":75,"spa":81,"spd":100,"spe":100},"abilities":["flash-fire","drought"],"sd":"ninetales","source":"seed","pool":["flamethrower","earth-power","ice-beam","will-o-wisp","nasty-plot","thunder-wave","protect","toxic","fire-blast","flare-blitz","fire-punch","shadow-ball","focus-blast"],"moves":["flamethrower","earth-power","nasty-plot","ice-beam"],"megas":[]},{"id":"wigglytuff","dex":40,"name":"Wigglytuff","gen":1,"types":["normal","fairy"],"stats":{"hp":140,"atk":70,"def":45,"spa":85,"spd":50,"spe":45},"abilities":["cute-charm","frisk"],"sd":"wigglytuff","source":"seed","pool":["hyper-voice","moonblast","earth-power","ice-beam","protect","toxic","tri-attack","boomburst","dazzling-gleam","draining-kiss","shadow-ball","focus-blast"],"moves":["hyper-voice","moonblast","earth-power","toxic"],"megas":[]},{"id":"vileplume","dex":45,"name":"Vileplume","gen":1,"types":["grass","poison"],"stats":{"hp":75,"atk":80,"def":85,"spa":110,"spd":90,"spe":50},"abilities":["chlorophyll","effect-spore"],"sd":"vileplume","source":"seed","pool":["energy-ball","sludge-bomb","focus-blast","earth-power","sleep-powder","nasty-plot","calm-mind","protect","toxic","giga-drain","leaf-storm","sludge-wave","shadow-ball","ice-beam"],"moves":["energy-ball","sludge-bomb","focus-blast","nasty-plot"],"megas":[]},{"id":"parasect","dex":47,"name":"Parasect","gen":1,"types":["bug","grass"],"stats":{"hp":60,"atk":95,"def":80,"spa":60,"spd":80,"spe":30},"abilities":["effect-spore","dry-skin"],"sd":"parasect","source":"seed","pool":["x-scissor","wood-hammer","earthquake","stone-edge","spore","protect","toxic","megahorn","leech-life","leaf-blade","seed-bomb","play-rough","close-combat"],"moves":["x-scissor","wood-hammer","earthquake","toxic"],"megas":[]},{"id":"venomoth","dex":49,"name":"Venomoth","gen":1,"types":["bug","poison"],"stats":{"hp":70,"atk":65,"def":60,"spa":90,"spd":75,"spe":90},"abilities":["tinted-lens","shield-dust"],"sd":"venomoth","source":"seed","pool":["bug-buzz","sludge-bomb","earth-power","ice-beam","quiver-dance","protect","toxic","signal-beam","sludge-wave","focus-blast","air-slash"],"moves":["bug-buzz","sludge-bomb","earth-power","toxic"],"megas":[]},{"id":"dugtrio","dex":51,"name":"Dugtrio","gen":1,"types":["ground"],"stats":{"hp":35,"atk":100,"def":50,"spa":50,"spd":70,"spe":120},"abilities":["sand-veil","arena-trap"],"sd":"dugtrio","source":"seed","pool":["earthquake","ice-punch","close-combat","swords-dance","thunder-wave","protect","toxic","drill-run","bulldoze","knock-off","brave-bird"],"moves":["earthquake","ice-punch","swords-dance","close-combat"],"megas":[]},{"id":"persian","dex":53,"name":"Persian","gen":1,"types":["normal"],"stats":{"hp":65,"atk":70,"def":60,"spa":65,"spd":65,"spe":115},"abilities":["technician","limber"],"sd":"persian","source":"seed","pool":["return","earthquake","ice-punch","fake-out","thunder-wave","protect","toxic","body-slam","hyper-voice","tri-attack","close-combat","knock-off"],"moves":["return","earthquake","toxic","ice-punch"],"megas":[]},{"id":"golduck","dex":55,"name":"Golduck","gen":1,"types":["water"],"stats":{"hp":80,"atk":82,"def":78,"spa":95,"spd":80,"spe":85},"abilities":["swift-swim","cloud-nine"],"sd":"golduck","source":"seed","pool":["surf","focus-blast","ice-beam","calm-mind","protect","toxic","hydro-pump","scald","shadow-ball","earth-power"],"moves":["surf","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"primeape","dex":57,"name":"Primeape","gen":1,"types":["fighting"],"stats":{"hp":65,"atk":105,"def":60,"spa":60,"spd":70,"spe":95},"abilities":["anger-point","defiant"],"sd":"primeape","source":"seed","pool":["close-combat","ice-punch","earthquake","bulk-up","swords-dance","thunder-wave","protect","toxic","drain-punch","brick-break","knock-off","brave-bird"],"moves":["close-combat","ice-punch","swords-dance","earthquake"],"megas":[]},{"id":"arcanine","dex":59,"name":"Arcanine","gen":1,"types":["fire"],"stats":{"hp":90,"atk":110,"def":80,"spa":100,"spd":80,"spe":95},"abilities":["intimidate","flash-fire"],"sd":"arcanine","source":"seed","pool":["flare-blitz","earthquake","ice-punch","extreme-speed","swords-dance","thunder-wave","protect","toxic","fire-punch","flamethrower","fire-blast","close-combat","knock-off"],"moves":["flare-blitz","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"poliwrath","dex":62,"name":"Poliwrath","gen":1,"types":["water","fighting"],"stats":{"hp":90,"atk":95,"def":95,"spa":70,"spd":90,"spe":70},"abilities":["water-absorb","swift-swim"],"sd":"poliwrath","source":"seed","pool":["waterfall","close-combat","ice-punch","earthquake","bulk-up","recover","toxic","protect","aqua-tail","aqua-jet","drain-punch","brick-break","knock-off","brave-bird"],"moves":["waterfall","close-combat","ice-punch","recover"],"megas":[]},{"id":"alakazam","dex":65,"name":"Alakazam","gen":1,"types":["psychic"],"stats":{"hp":55,"atk":50,"def":45,"spa":135,"spd":95,"spe":120},"abilities":["magic-guard","inner-focus"],"sd":"alakazam","source":"seed","pool":["psychic","focus-blast","ice-beam","calm-mind","nasty-plot","thunder-wave","protect","toxic","psyshock","extrasensory","shadow-ball","earth-power"],"moves":["psychic","focus-blast","calm-mind","ice-beam"],"megas":[{"id":"alakazam-mega","name":"Mega Alakazam","types":["psychic"],"stats":{"hp":55,"atk":50,"def":65,"spa":175,"spd":105,"spe":150},"ability":"trace","sd":"alakazam-mega"}]},{"id":"machamp","dex":68,"name":"Machamp","gen":1,"types":["fighting"],"stats":{"hp":90,"atk":130,"def":80,"spa":65,"spd":85,"spe":55},"abilities":["guts","no-guard"],"sd":"machamp","source":"seed","pool":["close-combat","ice-punch","earthquake","bullet-punch","swords-dance","protect","toxic","drain-punch","brick-break","knock-off","brave-bird"],"moves":["close-combat","ice-punch","swords-dance","earthquake"],"megas":[]},{"id":"victreebel","dex":71,"name":"Victreebel","gen":1,"types":["grass","poison"],"stats":{"hp":80,"atk":105,"def":65,"spa":100,"spd":70,"spe":70},"abilities":["chlorophyll","gluttony"],"sd":"victreebel","source":"seed","pool":["wood-hammer","poison-jab","earthquake","stone-edge","sleep-powder","swords-dance","protect","toxic","leaf-blade","energy-ball","giga-drain","gunk-shot","sludge-bomb","sludge-wave"],"moves":["wood-hammer","poison-jab","earthquake","swords-dance"],"megas":[]},{"id":"tentacruel","dex":73,"name":"Tentacruel","gen":1,"types":["water","poison"],"stats":{"hp":80,"atk":70,"def":65,"spa":80,"spd":120,"spe":100},"abilities":["liquid-ooze","rain-dish"],"sd":"tentacruel","source":"seed","pool":["surf","sludge-bomb","focus-blast","shadow-ball","toxic","rapid-spin","thunder-wave","protect","hydro-pump","waterfall","aqua-tail","sludge-wave","poison-jab","gunk-shot"],"moves":["surf","sludge-bomb","focus-blast","toxic"],"megas":[]},{"id":"golem","dex":76,"name":"Golem","gen":1,"types":["rock","ground"],"stats":{"hp":80,"atk":120,"def":130,"spa":55,"spd":65,"spe":45},"abilities":["sturdy","rock-head"],"sd":"golem","source":"seed","pool":["stone-edge","earthquake","ice-punch","close-combat","explosion","swords-dance","recover","toxic","protect","rock-slide","head-smash","drill-run","bulldoze","knock-off"],"moves":["stone-edge","earthquake","ice-punch","swords-dance"],"megas":[]},{"id":"rapidash","dex":78,"name":"Rapidash","gen":1,"types":["fire"],"stats":{"hp":65,"atk":100,"def":70,"spa":80,"spd":80,"spe":105},"abilities":["flash-fire","flame-body"],"sd":"rapidash","source":"seed","pool":["flare-blitz","earthquake","ice-punch","will-o-wisp","swords-dance","thunder-wave","protect","toxic","fire-punch","fire-fang","close-combat","knock-off"],"moves":["flare-blitz","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"slowbro","dex":80,"name":"Slowbro","gen":1,"types":["water","psychic"],"stats":{"hp":95,"atk":75,"def":110,"spa":100,"spd":80,"spe":30},"abilities":["regenerator","oblivious"],"sd":"slowbro","source":"seed","pool":["surf","psychic","focus-blast","ice-beam","slack-off","calm-mind","nasty-plot","recover","toxic","protect","hydro-pump","scald","psyshock","extrasensory"],"moves":["surf","psychic","focus-blast","calm-mind"],"megas":[{"id":"slowbro-mega","name":"Mega Slowbro","types":["water","psychic"],"stats":{"hp":95,"atk":75,"def":180,"spa":130,"spd":80,"spe":30},"ability":"shell-armor","sd":"slowbro-mega"}]},{"id":"magneton","dex":82,"name":"Magneton","gen":1,"types":["electric","steel"],"stats":{"hp":50,"atk":60,"def":95,"spa":120,"spd":70,"spe":70},"abilities":["sturdy","analytic"],"sd":"magneton","source":"seed","pool":["thunderbolt","flash-cannon","earth-power","ice-beam","thunder-wave","nasty-plot","calm-mind","protect","toxic","thunder","volt-switch","shadow-ball","focus-blast"],"moves":["thunderbolt","flash-cannon","earth-power","nasty-plot"],"megas":[]},{"id":"farfetchd","dex":83,"name":"Farfetch'd","gen":1,"types":["normal","flying"],"stats":{"hp":52,"atk":90,"def":55,"spa":58,"spd":62,"spe":60},"abilities":["inner-focus","defiant"],"sd":"farfetchd","source":"seed","pool":["return","brave-bird","earthquake","close-combat","swords-dance","protect","toxic","body-slam","double-edge","aerial-ace","drill-peck","ice-punch","knock-off"],"moves":["return","brave-bird","earthquake","swords-dance"],"megas":[]},{"id":"dodrio","dex":85,"name":"Dodrio","gen":1,"types":["normal","flying"],"stats":{"hp":60,"atk":110,"def":70,"spa":60,"spd":60,"spe":110},"abilities":["early-bird","tangled-feet"],"sd":"dodrio","source":"seed","pool":["return","brave-bird","earthquake","close-combat","swords-dance","thunder-wave","protect","toxic","body-slam","double-edge","aerial-ace","drill-peck","ice-punch","knock-off"],"moves":["return","brave-bird","earthquake","swords-dance"],"megas":[]},{"id":"dewgong","dex":87,"name":"Dewgong","gen":1,"types":["water","ice"],"stats":{"hp":90,"atk":70,"def":80,"spa":70,"spd":95,"spe":70},"abilities":["thick-fat","ice-body"],"sd":"dewgong","source":"seed","pool":["waterfall","icicle-crash","close-combat","earthquake","rest","protect","toxic","aqua-tail","surf","hydro-pump","ice-punch","ice-beam","blizzard","knock-off"],"moves":["waterfall","icicle-crash","close-combat","toxic"],"megas":[]},{"id":"muk","dex":89,"name":"Muk","gen":1,"types":["poison"],"stats":{"hp":105,"atk":105,"def":75,"spa":65,"spd":100,"spe":50},"abilities":["poison-touch","sticky-hold"],"sd":"muk","source":"seed","pool":["poison-jab","earthquake","stone-edge","drain-punch","swords-dance","recover","toxic","protect","gunk-shot","cross-poison","play-rough","knock-off"],"moves":["poison-jab","earthquake","swords-dance","stone-edge"],"megas":[]},{"id":"cloyster","dex":91,"name":"Cloyster","gen":1,"types":["water","ice"],"stats":{"hp":50,"atk":95,"def":180,"spa":85,"spd":45,"spe":70},"abilities":["skill-link","overcoat"],"sd":"cloyster","source":"seed","pool":["waterfall","icicle-crash","close-combat","earthquake","shell-smash","rock-blast","recover","toxic","protect","aqua-tail","surf","hydro-pump","ice-punch","ice-beam"],"moves":["waterfall","icicle-crash","close-combat","recover"],"megas":[]},{"id":"gengar","dex":94,"name":"Gengar","gen":1,"types":["ghost","poison"],"stats":{"hp":60,"atk":65,"def":60,"spa":130,"spd":75,"spe":110},"abilities":["cursed-body"],"sd":"gengar","source":"seed","pool":["shadow-ball","sludge-bomb","focus-blast","ice-beam","will-o-wisp","nasty-plot","calm-mind","thunder-wave","protect","toxic","hex","sludge-wave","earth-power","air-slash"],"moves":["shadow-ball","sludge-bomb","focus-blast","nasty-plot"],"megas":[{"id":"gengar-mega","name":"Mega Gengar","types":["ghost","poison"],"stats":{"hp":60,"atk":65,"def":80,"spa":170,"spd":95,"spe":130},"ability":"shadow-tag","sd":"gengar-mega"}]},{"id":"steelix","dex":95,"name":"Steelix","gen":1,"types":["steel","ground"],"stats":{"hp":75,"atk":85,"def":200,"spa":55,"spd":65,"spe":30},"abilities":["sturdy","rock-head"],"sd":"steelix","source":"seed","pool":["iron-head","earthquake","ice-punch","close-combat","stealth-rock","roar","recover","toxic","protect","bullet-punch","meteor-mash","drill-run","bulldoze","knock-off"],"moves":["iron-head","earthquake","ice-punch","recover"],"megas":[{"id":"steelix-mega","name":"Mega Steelix","types":["steel","ground"],"stats":{"hp":75,"atk":125,"def":230,"spa":55,"spd":95,"spe":30},"ability":"sand-force","sd":"steelix-mega"}]},{"id":"hypno","dex":97,"name":"Hypno","gen":1,"types":["psychic"],"stats":{"hp":85,"atk":73,"def":70,"spa":73,"spd":115,"spe":67},"abilities":["insomnia","inner-focus"],"sd":"hypno","source":"seed","pool":["zen-headbutt","close-combat","ice-punch","hypnosis","rest","recover","toxic","protect","psycho-cut","psychic","psyshock","earthquake","knock-off"],"moves":["zen-headbutt","close-combat","recover","ice-punch"],"megas":[]},{"id":"kingler","dex":99,"name":"Kingler","gen":1,"types":["water"],"stats":{"hp":55,"atk":130,"def":115,"spa":50,"spd":50,"spe":75},"abilities":["sheer-force","hyper-cutter"],"sd":"kingler","source":"seed","pool":["waterfall","close-combat","ice-punch","swords-dance","protect","toxic","aqua-tail","aqua-jet","earthquake","knock-off"],"moves":["waterfall","close-combat","swords-dance","ice-punch"],"megas":[]},{"id":"electrode","dex":101,"name":"Electrode","gen":1,"types":["electric"],"stats":{"hp":60,"atk":50,"def":70,"spa":80,"spd":80,"spe":150},"abilities":["static","soundproof"],"sd":"electrode","source":"seed","pool":["thunderbolt","focus-blast","ice-beam","thunder-wave","explosion","protect","toxic","thunder","volt-switch","earth-power","shadow-ball"],"moves":["thunderbolt","focus-blast","toxic","ice-beam"],"megas":[]},{"id":"exeggutor","dex":103,"name":"Exeggutor","gen":1,"types":["grass","psychic"],"stats":{"hp":95,"atk":95,"def":85,"spa":125,"spd":75,"spe":55},"abilities":["chlorophyll","harvest"],"sd":"exeggutor","source":"seed","pool":["energy-ball","psychic","focus-blast","ice-beam","sleep-powder","nasty-plot","calm-mind","protect","toxic","giga-drain","leaf-storm","psyshock","extrasensory","shadow-ball"],"moves":["energy-ball","psychic","focus-blast","nasty-plot"],"megas":[]},{"id":"marowak","dex":105,"name":"Marowak","gen":1,"types":["ground"],"stats":{"hp":60,"atk":80,"def":110,"spa":50,"spd":80,"spe":45},"abilities":["rock-head","lightning-rod"],"sd":"marowak","source":"seed","pool":["earthquake","ice-punch","close-combat","swords-dance","protect","toxic","drill-run","bulldoze","knock-off","brave-bird"],"moves":["earthquake","ice-punch","swords-dance","close-combat"],"megas":[]},{"id":"hitmonlee","dex":106,"name":"Hitmonlee","gen":1,"types":["fighting"],"stats":{"hp":50,"atk":120,"def":53,"spa":35,"spd":110,"spe":87},"abilities":["reckless","unburden"],"sd":"hitmonlee","source":"seed","pool":["close-combat","ice-punch","earthquake","bulk-up","swords-dance","protect","toxic","drain-punch","brick-break","knock-off","brave-bird"],"moves":["close-combat","ice-punch","swords-dance","earthquake"],"megas":[]},{"id":"hitmonchan","dex":107,"name":"Hitmonchan","gen":1,"types":["fighting"],"stats":{"hp":50,"atk":105,"def":79,"spa":35,"spd":110,"spe":76},"abilities":["iron-fist","inner-focus"],"sd":"hitmonchan","source":"seed","pool":["close-combat","ice-punch","earthquake","bulk-up","swords-dance","protect","toxic","drain-punch","brick-break","knock-off","brave-bird"],"moves":["close-combat","ice-punch","swords-dance","earthquake"],"megas":[]},{"id":"weezing","dex":110,"name":"Weezing","gen":1,"types":["poison"],"stats":{"hp":65,"atk":90,"def":120,"spa":85,"spd":70,"spe":60},"abilities":["levitate","stench"],"sd":"weezing","source":"seed","pool":["poison-jab","earthquake","stone-edge","will-o-wisp","toxic","protect","gunk-shot","sludge-bomb","sludge-wave","play-rough","knock-off"],"moves":["poison-jab","earthquake","toxic","stone-edge"],"megas":[]},{"id":"kangaskhan","dex":115,"name":"Kangaskhan","gen":1,"types":["normal"],"stats":{"hp":105,"atk":95,"def":80,"spa":40,"spd":80,"spe":90},"abilities":["scrappy","inner-focus"],"sd":"kangaskhan","source":"seed","pool":["return","earthquake","ice-punch","fake-out","protect","toxic","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","toxic","ice-punch"],"megas":[{"id":"kangaskhan-mega","name":"Mega Kangaskhan","types":["normal"],"stats":{"hp":105,"atk":125,"def":100,"spa":60,"spd":100,"spe":100},"ability":"parental-bond","sd":"kangaskhan-mega"}]},{"id":"seaking","dex":119,"name":"Seaking","gen":1,"types":["water"],"stats":{"hp":80,"atk":92,"def":65,"spa":65,"spd":80,"spe":68},"abilities":["swift-swim","lightning-rod"],"sd":"seaking","source":"seed","pool":["waterfall","close-combat","ice-punch","megahorn","protect","toxic","aqua-tail","aqua-jet","earthquake","knock-off"],"moves":["waterfall","close-combat","toxic","ice-punch"],"megas":[]},{"id":"starmie","dex":121,"name":"Starmie","gen":1,"types":["water","psychic"],"stats":{"hp":60,"atk":75,"def":85,"spa":100,"spd":85,"spe":115},"abilities":["analytic","natural-cure"],"sd":"starmie","source":"seed","pool":["surf","psychic","focus-blast","ice-beam","rapid-spin","thunder-wave","nasty-plot","calm-mind","protect","toxic","hydro-pump","scald","psyshock","extrasensory"],"moves":["surf","psychic","focus-blast","nasty-plot"],"megas":[]},{"id":"mr-mime","dex":122,"name":"Mr. Mime","gen":1,"types":["psychic","fairy"],"stats":{"hp":40,"atk":45,"def":65,"spa":100,"spd":120,"spe":90},"abilities":["filter","technician"],"sd":"mrmime","source":"seed","pool":["psychic","moonblast","focus-blast","ice-beam","calm-mind","nasty-plot","protect","toxic","psyshock","extrasensory","dazzling-gleam","draining-kiss","shadow-ball","earth-power"],"moves":["psychic","moonblast","focus-blast","calm-mind"],"megas":[]},{"id":"jynx","dex":124,"name":"Jynx","gen":1,"types":["ice","psychic"],"stats":{"hp":65,"atk":50,"def":35,"spa":115,"spd":95,"spe":95},"abilities":["dry-skin"],"sd":"jynx","source":"seed","pool":["ice-beam","psychic","focus-blast","shadow-ball","nasty-plot","calm-mind","thunder-wave","protect","toxic","blizzard","freeze-dry","psyshock","extrasensory","earth-power"],"moves":["ice-beam","psychic","focus-blast","nasty-plot"],"megas":[]},{"id":"pinsir","dex":127,"name":"Pinsir","gen":1,"types":["bug"],"stats":{"hp":65,"atk":125,"def":100,"spa":55,"spd":70,"spe":85},"abilities":["moxie","mold-breaker"],"sd":"pinsir","source":"seed","pool":["x-scissor","earthquake","stone-edge","swords-dance","protect","toxic","megahorn","leech-life","ice-punch","close-combat"],"moves":["x-scissor","earthquake","swords-dance","stone-edge"],"megas":[{"id":"pinsir-mega","name":"Mega Pinsir","types":["bug","flying"],"stats":{"hp":65,"atk":155,"def":120,"spa":65,"spd":90,"spe":105},"ability":"aerilate","sd":"pinsir-mega"}]},{"id":"tauros","dex":128,"name":"Tauros","gen":1,"types":["normal"],"stats":{"hp":75,"atk":100,"def":95,"spa":40,"spd":70,"spe":110},"abilities":["intimidate","sheer-force"],"sd":"tauros","source":"seed","pool":["return","earthquake","ice-punch","swords-dance","thunder-wave","protect","toxic","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"gyarados","dex":130,"name":"Gyarados","gen":1,"types":["water","flying"],"stats":{"hp":95,"atk":125,"def":79,"spa":60,"spd":100,"spe":81},"abilities":["intimidate","moxie"],"sd":"gyarados","source":"seed","pool":["waterfall","brave-bird","close-combat","earthquake","dragon-dance","swords-dance","roost","toxic","protect","aqua-tail","aqua-jet","aerial-ace","drill-peck","ice-punch"],"moves":["waterfall","brave-bird","close-combat","dragon-dance"],"megas":[{"id":"gyarados-mega","name":"Mega Gyarados","types":["water","dark"],"stats":{"hp":95,"atk":155,"def":109,"spa":70,"spd":130,"spe":81},"ability":"mold-breaker","sd":"gyarados-mega"}]},{"id":"lapras","dex":131,"name":"Lapras","gen":1,"types":["water","ice"],"stats":{"hp":130,"atk":85,"def":80,"spa":85,"spd":95,"spe":60},"abilities":["water-absorb","shell-armor"],"sd":"lapras","source":"seed","pool":["waterfall","icicle-crash","close-combat","earthquake","rest","recover","toxic","protect","aqua-tail","surf","hydro-pump","ice-punch","ice-beam","blizzard"],"moves":["waterfall","icicle-crash","close-combat","recover"],"megas":[]},{"id":"vaporeon","dex":134,"name":"Vaporeon","gen":1,"types":["water"],"stats":{"hp":130,"atk":65,"def":60,"spa":110,"spd":95,"spe":65},"abilities":["water-absorb"],"sd":"vaporeon","source":"seed","pool":["surf","focus-blast","ice-beam","nasty-plot","calm-mind","recover","toxic","protect","hydro-pump","scald","shadow-ball","earth-power"],"moves":["surf","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"jolteon","dex":135,"name":"Jolteon","gen":1,"types":["electric"],"stats":{"hp":65,"atk":65,"def":60,"spa":110,"spd":95,"spe":130},"abilities":["volt-absorb"],"sd":"jolteon","source":"seed","pool":["thunderbolt","focus-blast","ice-beam","thunder-wave","nasty-plot","calm-mind","protect","toxic","thunder","volt-switch","earth-power","shadow-ball"],"moves":["thunderbolt","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"flareon","dex":136,"name":"Flareon","gen":1,"types":["fire"],"stats":{"hp":65,"atk":130,"def":60,"spa":95,"spd":110,"spe":65},"abilities":["flash-fire","guts"],"sd":"flareon","source":"seed","pool":["flare-blitz","earthquake","ice-punch","will-o-wisp","swords-dance","protect","toxic","fire-punch","fire-fang","close-combat","knock-off"],"moves":["flare-blitz","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"omastar","dex":139,"name":"Omastar","gen":1,"types":["rock","water"],"stats":{"hp":70,"atk":60,"def":125,"spa":115,"spd":70,"spe":55},"abilities":["swift-swim","shell-armor"],"sd":"omastar","source":"seed","pool":["power-gem","surf","focus-blast","shadow-ball","shell-smash","nasty-plot","calm-mind","protect","toxic","hydro-pump","scald","ice-beam","earth-power"],"moves":["power-gem","surf","focus-blast","nasty-plot"],"megas":[]},{"id":"kabutops","dex":141,"name":"Kabutops","gen":1,"types":["rock","water"],"stats":{"hp":60,"atk":115,"def":105,"spa":65,"spd":70,"spe":80},"abilities":["swift-swim","weak-armor"],"sd":"kabutops","source":"seed","pool":["stone-edge","waterfall","earthquake","u-turn","swords-dance","protect","toxic","rock-slide","head-smash","aqua-tail","aqua-jet","play-rough","close-combat"],"moves":["stone-edge","waterfall","earthquake","swords-dance"],"megas":[]},{"id":"aerodactyl","dex":142,"name":"Aerodactyl","gen":1,"types":["rock","flying"],"stats":{"hp":80,"atk":105,"def":65,"spa":60,"spd":75,"spe":130},"abilities":["rock-head","pressure"],"sd":"aerodactyl","source":"seed","pool":["stone-edge","brave-bird","earthquake","close-combat","roost","swords-dance","thunder-wave","protect","toxic","rock-slide","head-smash","aerial-ace","drill-peck","ice-punch"],"moves":["stone-edge","brave-bird","earthquake","roost"],"megas":[{"id":"aerodactyl-mega","name":"Mega Aerodactyl","types":["rock","flying"],"stats":{"hp":80,"atk":135,"def":85,"spa":70,"spd":95,"spe":150},"ability":"tough-claws","sd":"aerodactyl-mega"}]},{"id":"snorlax","dex":143,"name":"Snorlax","gen":1,"types":["normal"],"stats":{"hp":160,"atk":110,"def":65,"spa":65,"spd":110,"spe":30},"abilities":["thick-fat","immunity"],"sd":"snorlax","source":"seed","pool":["return","earthquake","ice-punch","rest","belly-drum","swords-dance","recover","toxic","protect","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"articuno","dex":144,"name":"Articuno","gen":1,"types":["ice","flying"],"stats":{"hp":90,"atk":85,"def":100,"spa":95,"spd":125,"spe":85},"abilities":["pressure","snow-cloak"],"sd":"articuno","source":"seed","pool":["ice-beam","air-slash","focus-blast","earth-power","roost","toxic","protect","blizzard","icicle-crash","ice-punch","hurricane","brave-bird","aerial-ace","shadow-ball"],"moves":["ice-beam","air-slash","focus-blast","roost"],"megas":[]},{"id":"zapdos","dex":145,"name":"Zapdos","gen":1,"types":["electric","flying"],"stats":{"hp":90,"atk":90,"def":85,"spa":125,"spd":90,"spe":100},"abilities":["pressure","static"],"sd":"zapdos","source":"seed","pool":["thunderbolt","air-slash","focus-blast","earth-power","roost","nasty-plot","calm-mind","thunder-wave","protect","toxic","thunder","volt-switch","hurricane","shadow-ball"],"moves":["thunderbolt","air-slash","focus-blast","roost"],"megas":[]},{"id":"moltres","dex":146,"name":"Moltres","gen":1,"types":["fire","flying"],"stats":{"hp":90,"atk":100,"def":90,"spa":125,"spd":85,"spe":90},"abilities":["pressure","flame-body"],"sd":"moltres","source":"seed","pool":["flamethrower","air-slash","earth-power","ice-beam","roost","nasty-plot","calm-mind","protect","toxic","fire-blast","overheat","hurricane","shadow-ball","focus-blast"],"moves":["flamethrower","air-slash","earth-power","roost"],"megas":[]},{"id":"dragonite","dex":149,"name":"Dragonite","gen":1,"types":["dragon","flying"],"stats":{"hp":91,"atk":134,"def":95,"spa":100,"spd":100,"spe":80},"abilities":["multiscale","inner-focus"],"sd":"dragonite","source":"seed","pool":["dragon-claw","brave-bird","earthquake","close-combat","extreme-speed","roost","dragon-dance","toxic","protect","dragon-rush","dragon-hammer","aerial-ace","drill-peck","ice-punch"],"moves":["dragon-claw","brave-bird","earthquake","roost"],"megas":[]},{"id":"mewtwo","dex":150,"name":"Mewtwo","gen":1,"types":["psychic"],"stats":{"hp":106,"atk":110,"def":90,"spa":154,"spd":90,"spe":130},"abilities":["pressure","unnerve"],"sd":"mewtwo","source":"seed","pool":["psychic","focus-blast","ice-beam","recover","nasty-plot","calm-mind","toxic","protect","thunder-wave","psyshock","extrasensory","shadow-ball","earth-power"],"moves":["psychic","focus-blast","recover","ice-beam"],"megas":[{"id":"mewtwo-mega-x","name":"Mega Mewtwo X","types":["psychic","fighting"],"stats":{"hp":106,"atk":190,"def":100,"spa":154,"spd":100,"spe":130},"ability":"steadfast","sd":"mewtwo-megax"},{"id":"mewtwo-mega-y","name":"Mega Mewtwo Y","types":["psychic"],"stats":{"hp":106,"atk":150,"def":70,"spa":194,"spd":120,"spe":140},"ability":"insomnia","sd":"mewtwo-megay"}]},{"id":"mew","dex":151,"name":"Mew","gen":1,"types":["psychic"],"stats":{"hp":100,"atk":100,"def":100,"spa":100,"spd":100,"spe":100},"abilities":["synchronize"],"sd":"mew","source":"seed","pool":["zen-headbutt","close-combat","ice-punch","nasty-plot","calm-mind","recover","toxic","protect","thunder-wave","psycho-cut","psychic","psyshock","earthquake","knock-off"],"moves":["zen-headbutt","close-combat","nasty-plot","ice-punch"],"megas":[]}],"2":[{"id":"meganium","dex":154,"name":"Meganium","gen":2,"types":["grass"],"stats":{"hp":80,"atk":82,"def":100,"spa":83,"spd":100,"spe":80},"abilities":["overgrow","leaf-guard"],"sd":"meganium","source":"seed","pool":["energy-ball","focus-blast","ice-beam","synthesis","toxic","protect","giga-drain","wood-hammer","leaf-blade","earth-power","shadow-ball"],"moves":["energy-ball","focus-blast","synthesis","ice-beam"],"megas":[]},{"id":"typhlosion","dex":157,"name":"Typhlosion","gen":2,"types":["fire"],"stats":{"hp":78,"atk":84,"def":78,"spa":109,"spd":85,"spe":100},"abilities":["blaze","flash-fire"],"sd":"typhlosion","source":"seed","pool":["flamethrower","earth-power","ice-beam","eruption","nasty-plot","calm-mind","thunder-wave","protect","toxic","fire-blast","overheat","shadow-ball","focus-blast"],"moves":["flamethrower","earth-power","nasty-plot","ice-beam"],"megas":[]},{"id":"feraligatr","dex":160,"name":"Feraligatr","gen":2,"types":["water"],"stats":{"hp":85,"atk":105,"def":100,"spa":79,"spd":83,"spe":78},"abilities":["torrent","sheer-force"],"sd":"feraligatr","source":"seed","pool":["waterfall","close-combat","ice-punch","dragon-dance","swords-dance","protect","toxic","aqua-tail","aqua-jet","earthquake","knock-off"],"moves":["waterfall","close-combat","dragon-dance","ice-punch"],"megas":[]},{"id":"ampharos","dex":181,"name":"Ampharos","gen":2,"types":["electric"],"stats":{"hp":90,"atk":75,"def":85,"spa":115,"spd":90,"spe":55},"abilities":["static","plus"],"sd":"ampharos","source":"seed","pool":["thunderbolt","focus-blast","ice-beam","thunder-wave","nasty-plot","calm-mind","protect","toxic","thunder","volt-switch","earth-power","shadow-ball"],"moves":["thunderbolt","focus-blast","nasty-plot","ice-beam"],"megas":[{"id":"ampharos-mega","name":"Mega Ampharos","types":["electric","dragon"],"stats":{"hp":90,"atk":95,"def":105,"spa":165,"spd":110,"spe":45},"ability":"mold-breaker","sd":"ampharos-mega"}]},{"id":"azumarill","dex":184,"name":"Azumarill","gen":2,"types":["water","fairy"],"stats":{"hp":100,"atk":50,"def":80,"spa":60,"spd":80,"spe":50},"abilities":["huge-power","thick-fat"],"sd":"azumarill","source":"seed","pool":["surf","moonblast","flamethrower","shadow-ball","aqua-jet","protect","toxic","hydro-pump","scald","dazzling-gleam","draining-kiss","thunderbolt","earth-power"],"moves":["surf","moonblast","flamethrower","toxic"],"megas":[]},{"id":"sudowoodo","dex":185,"name":"Sudowoodo","gen":2,"types":["rock"],"stats":{"hp":70,"atk":100,"def":115,"spa":30,"spd":65,"spe":30},"abilities":["sturdy","rock-head"],"sd":"sudowoodo","source":"seed","pool":["stone-edge","earthquake","ice-punch","wood-hammer","swords-dance","protect","toxic","rock-slide","head-smash","close-combat","knock-off"],"moves":["stone-edge","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"politoed","dex":186,"name":"Politoed","gen":2,"types":["water"],"stats":{"hp":90,"atk":75,"def":75,"spa":90,"spd":100,"spe":70},"abilities":["drizzle","water-absorb"],"sd":"politoed","source":"seed","pool":["surf","focus-blast","ice-beam","toxic","protect","hydro-pump","scald","shadow-ball","earth-power"],"moves":["surf","focus-blast","toxic","ice-beam"],"megas":[]},{"id":"jumpluff","dex":189,"name":"Jumpluff","gen":2,"types":["grass","flying"],"stats":{"hp":75,"atk":55,"def":70,"spa":55,"spd":95,"spe":110},"abilities":["chlorophyll","infiltrator"],"sd":"jumpluff","source":"seed","pool":["wood-hammer","brave-bird","earthquake","close-combat","sleep-powder","acrobatics","thunder-wave","protect","toxic","leaf-blade","energy-ball","giga-drain","aerial-ace","air-slash"],"moves":["wood-hammer","brave-bird","earthquake","toxic"],"megas":[]},{"id":"quagsire","dex":195,"name":"Quagsire","gen":2,"types":["water","ground"],"stats":{"hp":95,"atk":85,"def":85,"spa":65,"spd":65,"spe":35},"abilities":["unaware","water-absorb"],"sd":"quagsire","source":"seed","pool":["waterfall","earthquake","stone-edge","u-turn","recover","toxic","protect","aqua-tail","aqua-jet","drill-run","bulldoze","play-rough","close-combat"],"moves":["waterfall","earthquake","stone-edge","recover"],"megas":[]},{"id":"espeon","dex":196,"name":"Espeon","gen":2,"types":["psychic"],"stats":{"hp":65,"atk":65,"def":60,"spa":130,"spd":95,"spe":110},"abilities":["synchronize"],"sd":"espeon","source":"seed","pool":["psychic","focus-blast","ice-beam","calm-mind","nasty-plot","thunder-wave","protect","toxic","psyshock","extrasensory","shadow-ball","earth-power"],"moves":["psychic","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"umbreon","dex":197,"name":"Umbreon","gen":2,"types":["dark"],"stats":{"hp":95,"atk":65,"def":110,"spa":60,"spd":130,"spe":65},"abilities":["synchronize","inner-focus"],"sd":"umbreon","source":"seed","pool":["crunch","earthquake","ice-punch","toxic","recover","protect","knock-off","dark-pulse","close-combat","brave-bird"],"moves":["crunch","earthquake","toxic","ice-punch"],"megas":[]},{"id":"slowking","dex":199,"name":"Slowking","gen":2,"types":["water","psychic"],"stats":{"hp":95,"atk":75,"def":80,"spa":100,"spd":110,"spe":30},"abilities":["regenerator","oblivious"],"sd":"slowking","source":"seed","pool":["surf","psychic","focus-blast","ice-beam","slack-off","calm-mind","nasty-plot","recover","toxic","protect","hydro-pump","scald","psyshock","extrasensory"],"moves":["surf","psychic","focus-blast","calm-mind"],"megas":[]},{"id":"forretress","dex":205,"name":"Forretress","gen":2,"types":["bug","steel"],"stats":{"hp":75,"atk":90,"def":140,"spa":60,"spd":60,"spe":40},"abilities":["sturdy","overcoat"],"sd":"forretress","source":"seed","pool":["x-scissor","iron-head","earthquake","ice-punch","rapid-spin","stealth-rock","recover","toxic","protect","megahorn","leech-life","bullet-punch","meteor-mash","brave-bird"],"moves":["x-scissor","iron-head","earthquake","recover"],"megas":[]},{"id":"scizor","dex":212,"name":"Scizor","gen":2,"types":["bug","steel"],"stats":{"hp":70,"atk":130,"def":100,"spa":55,"spd":80,"spe":65},"abilities":["technician","swarm"],"sd":"scizor","source":"seed","pool":["x-scissor","iron-head","earthquake","ice-punch","swords-dance","protect","toxic","megahorn","leech-life","bullet-punch","meteor-mash","brave-bird","close-combat"],"moves":["x-scissor","iron-head","earthquake","swords-dance"],"megas":[{"id":"scizor-mega","name":"Mega Scizor","types":["bug","steel"],"stats":{"hp":70,"atk":150,"def":140,"spa":65,"spd":100,"spe":75},"ability":"technician","sd":"scizor-mega"}]},{"id":"heracross","dex":214,"name":"Heracross","gen":2,"types":["bug","fighting"],"stats":{"hp":80,"atk":125,"def":75,"spa":40,"spd":95,"spe":85},"abilities":["moxie","guts"],"sd":"heracross","source":"seed","pool":["x-scissor","close-combat","earthquake","ice-punch","swords-dance","protect","toxic","megahorn","leech-life","drain-punch","brick-break","brave-bird","knock-off"],"moves":["x-scissor","close-combat","earthquake","swords-dance"],"megas":[{"id":"heracross-mega","name":"Mega Heracross","types":["bug","fighting"],"stats":{"hp":80,"atk":185,"def":115,"spa":40,"spd":105,"spe":75},"ability":"skill-link","sd":"heracross-mega"}]},{"id":"ursaring","dex":217,"name":"Ursaring","gen":2,"types":["normal"],"stats":{"hp":90,"atk":130,"def":75,"spa":75,"spd":75,"spe":55},"abilities":["guts","quick-feet"],"sd":"ursaring","source":"seed","pool":["return","earthquake","ice-punch","swords-dance","protect","toxic","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"skarmory","dex":227,"name":"Skarmory","gen":2,"types":["steel","flying"],"stats":{"hp":65,"atk":80,"def":140,"spa":40,"spd":70,"spe":70},"abilities":["sturdy","weak-armor"],"sd":"skarmory","source":"seed","pool":["iron-head","brave-bird","earthquake","ice-punch","roost","stealth-rock","toxic","protect","bullet-punch","meteor-mash","aerial-ace","drill-peck","close-combat","knock-off"],"moves":["iron-head","brave-bird","earthquake","roost"],"megas":[]},{"id":"houndoom","dex":229,"name":"Houndoom","gen":2,"types":["dark","fire"],"stats":{"hp":75,"atk":90,"def":50,"spa":110,"spd":80,"spe":95},"abilities":["flash-fire","early-bird"],"sd":"houndoom","source":"seed","pool":["dark-pulse","flamethrower","earth-power","ice-beam","nasty-plot","calm-mind","thunder-wave","protect","toxic","fire-blast","overheat","focus-blast","thunderbolt"],"moves":["dark-pulse","flamethrower","earth-power","nasty-plot"],"megas":[{"id":"houndoom-mega","name":"Mega Houndoom","types":["dark","fire"],"stats":{"hp":75,"atk":90,"def":90,"spa":140,"spd":90,"spe":115},"ability":"solar-power","sd":"houndoom-mega"}]},{"id":"kingdra","dex":230,"name":"Kingdra","gen":2,"types":["water","dragon"],"stats":{"hp":75,"atk":95,"def":95,"spa":95,"spd":95,"spe":85},"abilities":["swift-swim","sniper"],"sd":"kingdra","source":"seed","pool":["waterfall","dragon-claw","close-combat","brave-bird","dragon-dance","protect","toxic","aqua-tail","surf","hydro-pump","dragon-rush","dragon-pulse","draco-meteor","earthquake"],"moves":["waterfall","dragon-claw","close-combat","dragon-dance"],"megas":[]},{"id":"donphan","dex":232,"name":"Donphan","gen":2,"types":["ground"],"stats":{"hp":90,"atk":120,"def":120,"spa":60,"spd":60,"spe":50},"abilities":["sturdy","sand-veil"],"sd":"donphan","source":"seed","pool":["earthquake","ice-punch","close-combat","rapid-spin","swords-dance","recover","toxic","protect","drill-run","bulldoze","knock-off","brave-bird"],"moves":["earthquake","ice-punch","swords-dance","close-combat"],"megas":[]},{"id":"blissey","dex":242,"name":"Blissey","gen":2,"types":["normal"],"stats":{"hp":255,"atk":10,"def":10,"spa":75,"spd":135,"spe":55},"abilities":["natural-cure","serene-grace"],"sd":"blissey","source":"seed","pool":["hyper-voice","focus-blast","ice-beam","soft-boiled","toxic","recover","protect","tri-attack","boomburst","earth-power","shadow-ball"],"moves":["hyper-voice","focus-blast","toxic","ice-beam"],"megas":[]},{"id":"raikou","dex":243,"name":"Raikou","gen":2,"types":["electric"],"stats":{"hp":90,"atk":85,"def":75,"spa":115,"spd":100,"spe":115},"abilities":["pressure","inner-focus"],"sd":"raikou","source":"seed","pool":["thunderbolt","focus-blast","ice-beam","calm-mind","nasty-plot","thunder-wave","protect","toxic","thunder","volt-switch","earth-power","shadow-ball"],"moves":["thunderbolt","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"entei","dex":244,"name":"Entei","gen":2,"types":["fire"],"stats":{"hp":115,"atk":115,"def":85,"spa":90,"spd":75,"spe":100},"abilities":["pressure","inner-focus"],"sd":"entei","source":"seed","pool":["flare-blitz","earthquake","ice-punch","extreme-speed","swords-dance","recover","toxic","protect","thunder-wave","fire-punch","fire-fang","close-combat","knock-off"],"moves":["flare-blitz","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"suicune","dex":245,"name":"Suicune","gen":2,"types":["water"],"stats":{"hp":100,"atk":75,"def":115,"spa":90,"spd":115,"spe":85},"abilities":["pressure","inner-focus"],"sd":"suicune","source":"seed","pool":["surf","focus-blast","ice-beam","calm-mind","rest","recover","toxic","protect","hydro-pump","scald","shadow-ball","earth-power"],"moves":["surf","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"tyranitar","dex":248,"name":"Tyranitar","gen":2,"types":["rock","dark"],"stats":{"hp":100,"atk":134,"def":110,"spa":95,"spd":100,"spe":61},"abilities":["sand-stream","unnerve"],"sd":"tyranitar","source":"seed","pool":["stone-edge","crunch","earthquake","ice-punch","dragon-dance","swords-dance","recover","toxic","protect","rock-slide","head-smash","knock-off","sucker-punch","close-combat"],"moves":["stone-edge","crunch","earthquake","dragon-dance"],"megas":[{"id":"tyranitar-mega","name":"Mega Tyranitar","types":["rock","dark"],"stats":{"hp":100,"atk":164,"def":150,"spa":95,"spd":120,"spe":71},"ability":"sand-stream","sd":"tyranitar-mega"}]},{"id":"lugia","dex":249,"name":"Lugia","gen":2,"types":["psychic","flying"],"stats":{"hp":106,"atk":90,"def":130,"spa":90,"spd":154,"spe":110},"abilities":["pressure","multiscale"],"sd":"lugia","source":"seed","pool":["zen-headbutt","brave-bird","close-combat","ice-punch","roost","calm-mind","toxic","protect","thunder-wave","psycho-cut","psychic","psyshock","aerial-ace","air-slash"],"moves":["zen-headbutt","brave-bird","close-combat","roost"],"megas":[]},{"id":"ho-oh","dex":250,"name":"Ho-Oh","gen":2,"types":["fire","flying"],"stats":{"hp":106,"atk":130,"def":90,"spa":110,"spd":154,"spe":90},"abilities":["pressure","regenerator"],"sd":"hooh","source":"seed","pool":["flare-blitz","brave-bird","earthquake","ice-punch","recover","swords-dance","roost","toxic","protect","fire-punch","fire-fang","aerial-ace","drill-peck","close-combat"],"moves":["flare-blitz","brave-bird","earthquake","recover"],"megas":[]},{"id":"celebi","dex":251,"name":"Celebi","gen":2,"types":["psychic","grass"],"stats":{"hp":100,"atk":100,"def":100,"spa":100,"spd":100,"spe":100},"abilities":["natural-cure"],"sd":"celebi","source":"seed","pool":["zen-headbutt","wood-hammer","stone-edge","close-combat","nasty-plot","recover","calm-mind","synthesis","toxic","protect","thunder-wave","psycho-cut","psychic","psyshock"],"moves":["zen-headbutt","wood-hammer","stone-edge","nasty-plot"],"megas":[]}],"3":[{"id":"sceptile","dex":254,"name":"Sceptile","gen":3,"types":["grass","dragon"],"stats":{"hp":70,"atk":85,"def":65,"spa":105,"spd":85,"spe":120},"abilities":["overgrow","unburden"],"sd":"sceptile","source":"seed","pool":["energy-ball","dragon-pulse","focus-blast","earth-power","nasty-plot","calm-mind","thunder-wave","protect","toxic","giga-drain","leaf-storm","draco-meteor","air-slash","shadow-ball"],"moves":["energy-ball","dragon-pulse","focus-blast","nasty-plot"],"megas":[{"id":"sceptile-mega","name":"Mega Sceptile","types":["grass","dragon"],"stats":{"hp":70,"atk":110,"def":75,"spa":145,"spd":85,"spe":145},"ability":"lightning-rod","sd":"sceptile-mega"}]},{"id":"blaziken","dex":257,"name":"Blaziken","gen":3,"types":["fire","fighting"],"stats":{"hp":80,"atk":120,"def":70,"spa":110,"spd":70,"spe":80},"abilities":["blaze","speed-boost"],"sd":"blaziken","source":"seed","pool":["flare-blitz","close-combat","earthquake","ice-punch","swords-dance","protect","toxic","fire-punch","flamethrower","fire-blast","drain-punch","aura-sphere","focus-blast","knock-off"],"moves":["flare-blitz","close-combat","earthquake","swords-dance"],"megas":[{"id":"blaziken-mega","name":"Mega Blaziken","types":["fire","fighting"],"stats":{"hp":80,"atk":160,"def":80,"spa":130,"spd":80,"spe":100},"ability":"speed-boost","sd":"blaziken-mega"}]},{"id":"swampert","dex":260,"name":"Swampert","gen":3,"types":["water","ground"],"stats":{"hp":100,"atk":110,"def":90,"spa":85,"spd":90,"spe":60},"abilities":["torrent","damp"],"sd":"swampert","source":"seed","pool":["waterfall","earthquake","stone-edge","u-turn","stealth-rock","rest","swords-dance","recover","toxic","protect","aqua-tail","aqua-jet","drill-run","bulldoze"],"moves":["waterfall","earthquake","stone-edge","swords-dance"],"megas":[{"id":"swampert-mega","name":"Mega Swampert","types":["water","ground"],"stats":{"hp":100,"atk":150,"def":110,"spa":95,"spd":110,"spe":70},"ability":"swift-swim","sd":"swampert-mega"}]},{"id":"gardevoir","dex":282,"name":"Gardevoir","gen":3,"types":["psychic","fairy"],"stats":{"hp":68,"atk":65,"def":65,"spa":125,"spd":115,"spe":80},"abilities":["synchronize","trace"],"sd":"gardevoir","source":"seed","pool":["psychic","moonblast","focus-blast","ice-beam","calm-mind","nasty-plot","protect","toxic","psyshock","extrasensory","dazzling-gleam","draining-kiss","shadow-ball","earth-power"],"moves":["psychic","moonblast","focus-blast","calm-mind"],"megas":[{"id":"gardevoir-mega","name":"Mega Gardevoir","types":["psychic","fairy"],"stats":{"hp":68,"atk":85,"def":65,"spa":165,"spd":135,"spe":100},"ability":"pixilate","sd":"gardevoir-mega"}]},{"id":"breloom","dex":286,"name":"Breloom","gen":3,"types":["grass","fighting"],"stats":{"hp":60,"atk":130,"def":80,"spa":60,"spd":60,"spe":70},"abilities":["technician","poison-heal"],"sd":"breloom","source":"seed","pool":["wood-hammer","close-combat","earthquake","ice-punch","spore","swords-dance","protect","toxic","leaf-blade","seed-bomb","drain-punch","brick-break","knock-off","brave-bird"],"moves":["wood-hammer","close-combat","earthquake","swords-dance"],"megas":[]},{"id":"slaking","dex":289,"name":"Slaking","gen":3,"types":["normal"],"stats":{"hp":150,"atk":160,"def":100,"spa":95,"spd":65,"spe":100},"abilities":["truant"],"sd":"slaking","source":"seed","pool":["return","earthquake","ice-punch","sucker-punch","swords-dance","recover","toxic","protect","thunder-wave","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"exploud","dex":295,"name":"Exploud","gen":3,"types":["normal"],"stats":{"hp":104,"atk":91,"def":63,"spa":91,"spd":63,"spe":68},"abilities":["soundproof","scrappy"],"sd":"exploud","source":"seed","pool":["return","earthquake","ice-punch","boomburst","protect","toxic","body-slam","hyper-voice","tri-attack","close-combat","knock-off"],"moves":["return","earthquake","toxic","ice-punch"],"megas":[]},{"id":"hariyama","dex":297,"name":"Hariyama","gen":3,"types":["fighting"],"stats":{"hp":144,"atk":120,"def":60,"spa":40,"spd":60,"spe":50},"abilities":["thick-fat","guts"],"sd":"hariyama","source":"seed","pool":["close-combat","ice-punch","earthquake","bullet-punch","swords-dance","protect","toxic","drain-punch","brick-break","knock-off","brave-bird"],"moves":["close-combat","ice-punch","swords-dance","earthquake"],"megas":[]},{"id":"aggron","dex":306,"name":"Aggron","gen":3,"types":["steel","rock"],"stats":{"hp":70,"atk":110,"def":180,"spa":60,"spd":60,"spe":50},"abilities":["sturdy","rock-head"],"sd":"aggron","source":"seed","pool":["iron-head","stone-edge","earthquake","ice-punch","stealth-rock","swords-dance","recover","toxic","protect","bullet-punch","meteor-mash","rock-slide","head-smash","close-combat"],"moves":["iron-head","stone-edge","earthquake","swords-dance"],"megas":[{"id":"aggron-mega","name":"Mega Aggron","types":["steel"],"stats":{"hp":70,"atk":140,"def":230,"spa":60,"spd":80,"spe":50},"ability":"filter","sd":"aggron-mega"}]},{"id":"manectric","dex":310,"name":"Manectric","gen":3,"types":["electric"],"stats":{"hp":70,"atk":75,"def":60,"spa":105,"spd":60,"spe":105},"abilities":["static","lightning-rod"],"sd":"manectric","source":"seed","pool":["thunderbolt","focus-blast","ice-beam","thunder-wave","nasty-plot","calm-mind","protect","toxic","thunder","volt-switch","earth-power","shadow-ball"],"moves":["thunderbolt","focus-blast","nasty-plot","ice-beam"],"megas":[{"id":"manectric-mega","name":"Mega Manectric","types":["electric"],"stats":{"hp":70,"atk":75,"def":80,"spa":135,"spd":80,"spe":135},"ability":"intimidate","sd":"manectric-mega"}]},{"id":"sharpedo","dex":319,"name":"Sharpedo","gen":3,"types":["water","dark"],"stats":{"hp":70,"atk":120,"def":40,"spa":95,"spd":40,"spe":95},"abilities":["rough-skin","speed-boost"],"sd":"sharpedo","source":"seed","pool":["waterfall","crunch","close-combat","ice-punch","protect","swords-dance","thunder-wave","toxic","aqua-tail","aqua-jet","knock-off","sucker-punch","earthquake","brave-bird"],"moves":["waterfall","crunch","close-combat","swords-dance"],"megas":[{"id":"sharpedo-mega","name":"Mega Sharpedo","types":["water","dark"],"stats":{"hp":70,"atk":140,"def":70,"spa":110,"spd":65,"spe":105},"ability":"strong-jaw","sd":"sharpedo-mega"}]},{"id":"camerupt","dex":323,"name":"Camerupt","gen":3,"types":["fire","ground"],"stats":{"hp":70,"atk":100,"def":70,"spa":105,"spd":75,"spe":40},"abilities":["solid-rock","anger-point"],"sd":"camerupt","source":"seed","pool":["flamethrower","earth-power","ice-beam","shadow-ball","eruption","nasty-plot","calm-mind","protect","toxic","fire-blast","flare-blitz","fire-punch","earthquake","drill-run"],"moves":["flamethrower","earth-power","ice-beam","nasty-plot"],"megas":[{"id":"camerupt-mega","name":"Mega Camerupt","types":["fire","ground"],"stats":{"hp":70,"atk":120,"def":100,"spa":145,"spd":105,"spe":20},"ability":"sheer-force","sd":"camerupt-mega"}]},{"id":"torkoal","dex":324,"name":"Torkoal","gen":3,"types":["fire"],"stats":{"hp":70,"atk":85,"def":140,"spa":85,"spd":70,"spe":20},"abilities":["drought","shell-armor"],"sd":"torkoal","source":"seed","pool":["flare-blitz","earthquake","ice-punch","stealth-rock","rapid-spin","recover","toxic","protect","fire-punch","flamethrower","fire-blast","close-combat","knock-off"],"moves":["flare-blitz","earthquake","recover","ice-punch"],"megas":[]},{"id":"flygon","dex":330,"name":"Flygon","gen":3,"types":["ground","dragon"],"stats":{"hp":80,"atk":100,"def":80,"spa":80,"spd":80,"spe":100},"abilities":["levitate"],"sd":"flygon","source":"seed","pool":["earthquake","dragon-claw","stone-edge","u-turn","dragon-dance","thunder-wave","protect","toxic","drill-run","bulldoze","dragon-rush","dragon-hammer","leaf-blade","close-combat"],"moves":["earthquake","dragon-claw","stone-edge","dragon-dance"],"megas":[]},{"id":"altaria","dex":334,"name":"Altaria","gen":3,"types":["dragon","flying"],"stats":{"hp":75,"atk":70,"def":90,"spa":70,"spd":105,"spe":80},"abilities":["natural-cure","cloud-nine"],"sd":"altaria","source":"seed","pool":["dragon-claw","brave-bird","earthquake","close-combat","dragon-dance","roost","toxic","protect","dragon-rush","dragon-pulse","draco-meteor","aerial-ace","air-slash","hurricane"],"moves":["dragon-claw","brave-bird","earthquake","dragon-dance"],"megas":[{"id":"altaria-mega","name":"Mega Altaria","types":["dragon","fairy"],"stats":{"hp":75,"atk":110,"def":110,"spa":110,"spd":105,"spe":80},"ability":"pixilate","sd":"altaria-mega"}]},{"id":"milotic","dex":350,"name":"Milotic","gen":3,"types":["water"],"stats":{"hp":95,"atk":60,"def":79,"spa":100,"spd":125,"spe":81},"abilities":["marvel-scale","competitive"],"sd":"milotic","source":"seed","pool":["surf","focus-blast","ice-beam","recover","nasty-plot","calm-mind","toxic","protect","hydro-pump","scald","shadow-ball","earth-power"],"moves":["surf","focus-blast","recover","ice-beam"],"megas":[]},{"id":"absol","dex":359,"name":"Absol","gen":3,"types":["dark"],"stats":{"hp":65,"atk":130,"def":60,"spa":75,"spd":60,"spe":75},"abilities":["super-luck","justified"],"sd":"absol","source":"seed","pool":["crunch","earthquake","ice-punch","swords-dance","protect","toxic","knock-off","sucker-punch","close-combat","brave-bird"],"moves":["crunch","earthquake","swords-dance","ice-punch"],"megas":[{"id":"absol-mega","name":"Mega Absol","types":["dark"],"stats":{"hp":65,"atk":150,"def":60,"spa":115,"spd":60,"spe":115},"ability":"magic-bounce","sd":"absol-mega"}]},{"id":"glalie","dex":362,"name":"Glalie","gen":3,"types":["ice"],"stats":{"hp":80,"atk":80,"def":80,"spa":80,"spd":80,"spe":80},"abilities":["ice-body"],"sd":"glalie","source":"seed","pool":["icicle-crash","earthquake","close-combat","protect","toxic","ice-punch","ice-beam","blizzard","knock-off","brave-bird"],"moves":["icicle-crash","earthquake","toxic","close-combat"],"megas":[{"id":"glalie-mega","name":"Mega Glalie","types":["ice"],"stats":{"hp":80,"atk":120,"def":80,"spa":120,"spd":80,"spe":100},"ability":"refrigerate","sd":"glalie-mega"}]},{"id":"walrein","dex":365,"name":"Walrein","gen":3,"types":["ice","water"],"stats":{"hp":110,"atk":80,"def":90,"spa":95,"spd":90,"spe":65},"abilities":["thick-fat","ice-body"],"sd":"walrein","source":"seed","pool":["ice-beam","surf","focus-blast","shadow-ball","rest","recover","toxic","protect","blizzard","freeze-dry","hydro-pump","scald","earth-power","air-slash"],"moves":["ice-beam","surf","focus-blast","recover"],"megas":[]},{"id":"salamence","dex":373,"name":"Salamence","gen":3,"types":["dragon","flying"],"stats":{"hp":95,"atk":135,"def":80,"spa":110,"spd":80,"spe":100},"abilities":["intimidate","moxie"],"sd":"salamence","source":"seed","pool":["dragon-claw","brave-bird","earthquake","close-combat","dragon-dance","roost","thunder-wave","protect","toxic","dragon-rush","dragon-hammer","aerial-ace","drill-peck","ice-punch"],"moves":["dragon-claw","brave-bird","earthquake","dragon-dance"],"megas":[{"id":"salamence-mega","name":"Mega Salamence","types":["dragon","flying"],"stats":{"hp":95,"atk":145,"def":130,"spa":120,"spd":90,"spe":120},"ability":"aerilate","sd":"salamence-mega"}]},{"id":"metagross","dex":376,"name":"Metagross","gen":3,"types":["steel","psychic"],"stats":{"hp":80,"atk":135,"def":130,"spa":95,"spd":90,"spe":70},"abilities":["clear-body","light-metal"],"sd":"metagross","source":"seed","pool":["iron-head","zen-headbutt","ice-punch","earthquake","stealth-rock","swords-dance","recover","toxic","protect","bullet-punch","meteor-mash","psycho-cut","close-combat","knock-off"],"moves":["iron-head","zen-headbutt","ice-punch","swords-dance"],"megas":[{"id":"metagross-mega","name":"Mega Metagross","types":["steel","psychic"],"stats":{"hp":80,"atk":145,"def":150,"spa":105,"spd":110,"spe":110},"ability":"tough-claws","sd":"metagross-mega"}]},{"id":"latias","dex":380,"name":"Latias","gen":3,"types":["dragon","psychic"],"stats":{"hp":80,"atk":80,"def":90,"spa":110,"spd":130,"spe":110},"abilities":["levitate"],"sd":"latias","source":"seed","pool":["dragon-pulse","psychic","focus-blast","ice-beam","calm-mind","recover","nasty-plot","toxic","protect","thunder-wave","draco-meteor","psyshock","extrasensory","shadow-ball"],"moves":["dragon-pulse","psychic","focus-blast","calm-mind"],"megas":[{"id":"latias-mega","name":"Mega Latias","types":["dragon","psychic"],"stats":{"hp":80,"atk":100,"def":120,"spa":140,"spd":150,"spe":110},"ability":"levitate","sd":"latias-mega"}]},{"id":"latios","dex":381,"name":"Latios","gen":3,"types":["dragon","psychic"],"stats":{"hp":80,"atk":90,"def":80,"spa":130,"spd":110,"spe":110},"abilities":["levitate"],"sd":"latios","source":"seed","pool":["dragon-pulse","psychic","focus-blast","ice-beam","calm-mind","recover","nasty-plot","toxic","protect","thunder-wave","draco-meteor","psyshock","extrasensory","shadow-ball"],"moves":["dragon-pulse","psychic","focus-blast","calm-mind"],"megas":[{"id":"latios-mega","name":"Mega Latios","types":["dragon","psychic"],"stats":{"hp":80,"atk":130,"def":100,"spa":160,"spd":120,"spe":110},"ability":"levitate","sd":"latios-mega"}]},{"id":"kyogre","dex":382,"name":"Kyogre","gen":3,"types":["water"],"stats":{"hp":100,"atk":100,"def":90,"spa":150,"spd":140,"spe":90},"abilities":["drizzle"],"sd":"kyogre","source":"seed","pool":["surf","focus-blast","ice-beam","calm-mind","rest","nasty-plot","recover","toxic","protect","hydro-pump","scald","shadow-ball","earth-power"],"moves":["surf","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"groudon","dex":383,"name":"Groudon","gen":3,"types":["ground"],"stats":{"hp":100,"atk":150,"def":140,"spa":100,"spd":90,"spe":90},"abilities":["drought"],"sd":"groudon","source":"seed","pool":["earthquake","ice-punch","close-combat","swords-dance","rock-slide","recover","toxic","protect","drill-run","bulldoze","knock-off","brave-bird"],"moves":["earthquake","ice-punch","swords-dance","close-combat"],"megas":[]},{"id":"rayquaza","dex":384,"name":"Rayquaza","gen":3,"types":["dragon","flying"],"stats":{"hp":105,"atk":150,"def":90,"spa":150,"spd":90,"spe":95},"abilities":["air-lock"],"sd":"rayquaza","source":"seed","pool":["dragon-claw","brave-bird","earthquake","close-combat","dragon-dance","nasty-plot","calm-mind","roost","toxic","protect","thunder-wave","dragon-rush","dragon-pulse","draco-meteor"],"moves":["dragon-claw","brave-bird","earthquake","dragon-dance"],"megas":[]}],"4":[{"id":"torterra","dex":389,"name":"Torterra","gen":4,"types":["grass","ground"],"stats":{"hp":95,"atk":109,"def":105,"spa":75,"spd":85,"spe":56},"abilities":["overgrow","shell-armor"],"sd":"torterra","source":"seed","pool":["wood-hammer","earthquake","stone-edge","u-turn","stealth-rock","synthesis","swords-dance","toxic","protect","leaf-blade","seed-bomb","drill-run","bulldoze","play-rough"],"moves":["wood-hammer","earthquake","stone-edge","synthesis"],"megas":[]},{"id":"infernape","dex":392,"name":"Infernape","gen":4,"types":["fire","fighting"],"stats":{"hp":76,"atk":104,"def":71,"spa":104,"spd":71,"spe":108},"abilities":["blaze","iron-fist"],"sd":"infernape","source":"seed","pool":["flare-blitz","close-combat","earthquake","ice-punch","swords-dance","nasty-plot","calm-mind","thunder-wave","protect","toxic","fire-punch","flamethrower","fire-blast","drain-punch"],"moves":["flare-blitz","close-combat","earthquake","swords-dance"],"megas":[]},{"id":"empoleon","dex":395,"name":"Empoleon","gen":4,"types":["water","steel"],"stats":{"hp":84,"atk":86,"def":88,"spa":111,"spd":101,"spe":60},"abilities":["torrent","competitive"],"sd":"empoleon","source":"seed","pool":["surf","flash-cannon","ice-beam","focus-blast","stealth-rock","nasty-plot","calm-mind","recover","toxic","protect","hydro-pump","scald","shadow-ball","earth-power"],"moves":["surf","flash-cannon","ice-beam","nasty-plot"],"megas":[]},{"id":"staraptor","dex":398,"name":"Staraptor","gen":4,"types":["normal","flying"],"stats":{"hp":85,"atk":120,"def":70,"spa":50,"spd":60,"spe":100},"abilities":["intimidate","reckless"],"sd":"staraptor","source":"seed","pool":["return","brave-bird","earthquake","close-combat","roost","swords-dance","thunder-wave","protect","toxic","body-slam","double-edge","aerial-ace","drill-peck","ice-punch"],"moves":["return","brave-bird","earthquake","roost"],"megas":[]},{"id":"luxray","dex":405,"name":"Luxray","gen":4,"types":["electric"],"stats":{"hp":80,"atk":120,"def":79,"spa":95,"spd":79,"spe":70},"abilities":["intimidate","guts"],"sd":"luxray","source":"seed","pool":["wild-charge","earthquake","close-combat","crunch","swords-dance","protect","toxic","volt-tackle","thunder-punch","ice-punch","knock-off"],"moves":["wild-charge","earthquake","swords-dance","close-combat"],"megas":[]},{"id":"roserade","dex":407,"name":"Roserade","gen":4,"types":["grass","poison"],"stats":{"hp":60,"atk":70,"def":65,"spa":125,"spd":105,"spe":90},"abilities":["natural-cure","technician"],"sd":"roserade","source":"seed","pool":["energy-ball","sludge-bomb","focus-blast","earth-power","sleep-powder","toxic","nasty-plot","calm-mind","protect","giga-drain","leaf-storm","sludge-wave","shadow-ball","ice-beam"],"moves":["energy-ball","sludge-bomb","focus-blast","toxic"],"megas":[]},{"id":"gastrodon","dex":423,"name":"Gastrodon","gen":4,"types":["water","ground"],"stats":{"hp":111,"atk":83,"def":68,"spa":92,"spd":82,"spe":39},"abilities":["storm-drain","sticky-hold"],"sd":"gastrodon","source":"seed","pool":["surf","earth-power","ice-beam","focus-blast","recover","protect","toxic","hydro-pump","waterfall","aqua-tail","earthquake","drill-run","shadow-ball","air-slash"],"moves":["surf","earth-power","ice-beam","recover"],"megas":[]},{"id":"lopunny","dex":428,"name":"Lopunny","gen":4,"types":["normal"],"stats":{"hp":65,"atk":76,"def":84,"spa":54,"spd":96,"spe":105},"abilities":["limber","scrappy"],"sd":"lopunny","source":"seed","pool":["return","earthquake","ice-punch","fake-out","thunder-wave","protect","toxic","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","toxic","ice-punch"],"megas":[{"id":"lopunny-mega","name":"Mega Lopunny","types":["normal","fighting"],"stats":{"hp":65,"atk":136,"def":94,"spa":54,"spd":96,"spe":135},"ability":"scrappy","sd":"lopunny-mega"}]},{"id":"mismagius","dex":429,"name":"Mismagius","gen":4,"types":["ghost"],"stats":{"hp":60,"atk":60,"def":60,"spa":105,"spd":105,"spe":105},"abilities":["levitate"],"sd":"mismagius","source":"seed","pool":["shadow-ball","focus-blast","ice-beam","nasty-plot","will-o-wisp","calm-mind","thunder-wave","protect","toxic","hex","earth-power","air-slash"],"moves":["shadow-ball","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"honchkrow","dex":430,"name":"Honchkrow","gen":4,"types":["dark","flying"],"stats":{"hp":100,"atk":125,"def":52,"spa":105,"spd":52,"spe":71},"abilities":["super-luck","moxie"],"sd":"honchkrow","source":"seed","pool":["crunch","brave-bird","earthquake","close-combat","sucker-punch","swords-dance","protect","toxic","knock-off","aerial-ace","drill-peck","ice-punch","iron-head"],"moves":["crunch","brave-bird","earthquake","swords-dance"],"megas":[]},{"id":"spiritomb","dex":442,"name":"Spiritomb","gen":4,"types":["ghost","dark"],"stats":{"hp":50,"atk":92,"def":108,"spa":92,"spd":108,"spe":35},"abilities":["infiltrator","pressure"],"sd":"spiritomb","source":"seed","pool":["shadow-claw","crunch","earthquake","ice-punch","toxic","protect","shadow-sneak","shadow-ball","hex","knock-off","dark-pulse","close-combat","brave-bird"],"moves":["shadow-claw","crunch","earthquake","toxic"],"megas":[]},{"id":"garchomp","dex":445,"name":"Garchomp","gen":4,"types":["dragon","ground"],"stats":{"hp":108,"atk":130,"def":95,"spa":80,"spd":85,"spe":102},"abilities":["rough-skin","sand-veil"],"sd":"garchomp","source":"seed","pool":["dragon-claw","earthquake","stone-edge","u-turn","swords-dance","stealth-rock","dragon-dance","recover","toxic","protect","thunder-wave","dragon-rush","dragon-hammer","drill-run"],"moves":["dragon-claw","earthquake","stone-edge","swords-dance"],"megas":[{"id":"garchomp-mega","name":"Mega Garchomp","types":["dragon","ground"],"stats":{"hp":108,"atk":170,"def":115,"spa":120,"spd":95,"spe":92},"ability":"sand-force","sd":"garchomp-mega"}]},{"id":"lucario","dex":448,"name":"Lucario","gen":4,"types":["fighting","steel"],"stats":{"hp":70,"atk":110,"def":70,"spa":115,"spd":70,"spe":90},"abilities":["inner-focus","justified"],"sd":"lucario","source":"seed","pool":["aura-sphere","flash-cannon","ice-beam","earth-power","swords-dance","nasty-plot","calm-mind","protect","toxic","focus-blast","close-combat","drain-punch","iron-head","bullet-punch"],"moves":["aura-sphere","flash-cannon","ice-beam","swords-dance"],"megas":[{"id":"lucario-mega","name":"Mega Lucario","types":["fighting","steel"],"stats":{"hp":70,"atk":145,"def":88,"spa":140,"spd":70,"spe":112},"ability":"adaptability","sd":"lucario-mega"}]},{"id":"hippowdon","dex":450,"name":"Hippowdon","gen":4,"types":["ground"],"stats":{"hp":108,"atk":112,"def":118,"spa":68,"spd":72,"spe":47},"abilities":["sand-stream"],"sd":"hippowdon","source":"seed","pool":["earthquake","ice-punch","close-combat","slack-off","stealth-rock","swords-dance","recover","toxic","protect","drill-run","bulldoze","knock-off","brave-bird"],"moves":["earthquake","ice-punch","swords-dance","close-combat"],"megas":[]},{"id":"drapion","dex":452,"name":"Drapion","gen":4,"types":["poison","dark"],"stats":{"hp":70,"atk":90,"def":110,"spa":60,"spd":75,"spe":95},"abilities":["sniper","battle-armor"],"sd":"drapion","source":"seed","pool":["poison-jab","crunch","earthquake","stone-edge","swords-dance","thunder-wave","protect","toxic","gunk-shot","cross-poison","knock-off","sucker-punch","play-rough","leaf-blade"],"moves":["poison-jab","crunch","earthquake","swords-dance"],"megas":[]},{"id":"toxicroak","dex":454,"name":"Toxicroak","gen":4,"types":["poison","fighting"],"stats":{"hp":83,"atk":106,"def":65,"spa":86,"spd":65,"spe":85},"abilities":["dry-skin","poison-touch"],"sd":"toxicroak","source":"seed","pool":["poison-jab","close-combat","earthquake","ice-punch","swords-dance","protect","toxic","gunk-shot","cross-poison","drain-punch","brick-break","knock-off","brave-bird"],"moves":["poison-jab","close-combat","earthquake","swords-dance"],"megas":[]},{"id":"abomasnow","dex":460,"name":"Abomasnow","gen":4,"types":["grass","ice"],"stats":{"hp":90,"atk":92,"def":75,"spa":92,"spd":85,"spe":60},"abilities":["snow-warning"],"sd":"abomasnow","source":"seed","pool":["wood-hammer","icicle-crash","earthquake","close-combat","aurora-veil","protect","toxic","leaf-blade","energy-ball","giga-drain","ice-punch","ice-beam","blizzard","knock-off"],"moves":["wood-hammer","icicle-crash","earthquake","toxic"],"megas":[{"id":"abomasnow-mega","name":"Mega Abomasnow","types":["grass","ice"],"stats":{"hp":90,"atk":132,"def":105,"spa":132,"spd":105,"spe":30},"ability":"snow-warning","sd":"abomasnow-mega"}]},{"id":"weavile","dex":461,"name":"Weavile","gen":4,"types":["dark","ice"],"stats":{"hp":70,"atk":120,"def":65,"spa":45,"spd":85,"spe":125},"abilities":["pressure","pickpocket"],"sd":"weavile","source":"seed","pool":["crunch","icicle-crash","earthquake","close-combat","swords-dance","thunder-wave","protect","toxic","knock-off","sucker-punch","ice-punch","ice-shard","brave-bird","iron-head"],"moves":["crunch","icicle-crash","earthquake","swords-dance"],"megas":[]},{"id":"magnezone","dex":462,"name":"Magnezone","gen":4,"types":["electric","steel"],"stats":{"hp":70,"atk":70,"def":115,"spa":130,"spd":90,"spe":60},"abilities":["sturdy","analytic"],"sd":"magnezone","source":"seed","pool":["thunderbolt","flash-cannon","earth-power","ice-beam","thunder-wave","nasty-plot","calm-mind","recover","toxic","protect","thunder","volt-switch","shadow-ball","focus-blast"],"moves":["thunderbolt","flash-cannon","earth-power","nasty-plot"],"megas":[]},{"id":"rhyperior","dex":464,"name":"Rhyperior","gen":4,"types":["ground","rock"],"stats":{"hp":115,"atk":140,"def":130,"spa":55,"spd":55,"spe":40},"abilities":["solid-rock","reckless"],"sd":"rhyperior","source":"seed","pool":["earthquake","stone-edge","ice-punch","close-combat","megahorn","stealth-rock","swords-dance","recover","toxic","protect","drill-run","bulldoze","rock-slide","head-smash"],"moves":["earthquake","stone-edge","ice-punch","swords-dance"],"megas":[]},{"id":"tangrowth","dex":465,"name":"Tangrowth","gen":4,"types":["grass"],"stats":{"hp":100,"atk":100,"def":125,"spa":110,"spd":50,"spe":50},"abilities":["regenerator","chlorophyll"],"sd":"tangrowth","source":"seed","pool":["energy-ball","focus-blast","ice-beam","sleep-powder","nasty-plot","calm-mind","synthesis","toxic","protect","giga-drain","wood-hammer","leaf-blade","earth-power","shadow-ball"],"moves":["energy-ball","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"electivire","dex":466,"name":"Electivire","gen":4,"types":["electric"],"stats":{"hp":75,"atk":123,"def":67,"spa":95,"spd":85,"spe":95},"abilities":["motor-drive"],"sd":"electivire","source":"seed","pool":["wild-charge","earthquake","close-combat","ice-punch","swords-dance","thunder-wave","protect","toxic","volt-tackle","thunder-punch","knock-off"],"moves":["wild-charge","earthquake","swords-dance","close-combat"],"megas":[]},{"id":"magmortar","dex":467,"name":"Magmortar","gen":4,"types":["fire"],"stats":{"hp":75,"atk":95,"def":67,"spa":125,"spd":95,"spe":83},"abilities":["flame-body"],"sd":"magmortar","source":"seed","pool":["flamethrower","earth-power","ice-beam","nasty-plot","calm-mind","protect","toxic","fire-blast","overheat","shadow-ball","focus-blast"],"moves":["flamethrower","earth-power","nasty-plot","ice-beam"],"megas":[]},{"id":"togekiss","dex":468,"name":"Togekiss","gen":4,"types":["fairy","flying"],"stats":{"hp":85,"atk":50,"def":95,"spa":120,"spd":115,"spe":80},"abilities":["serene-grace","super-luck"],"sd":"togekiss","source":"seed","pool":["moonblast","air-slash","earth-power","shadow-ball","roost","nasty-plot","calm-mind","toxic","protect","dazzling-gleam","draining-kiss","hurricane","ice-beam","focus-blast"],"moves":["moonblast","air-slash","earth-power","roost"],"megas":[]},{"id":"yanmega","dex":469,"name":"Yanmega","gen":4,"types":["bug","flying"],"stats":{"hp":86,"atk":76,"def":86,"spa":116,"spd":56,"spe":95},"abilities":["speed-boost","tinted-lens"],"sd":"yanmega","source":"seed","pool":["bug-buzz","air-slash","earth-power","ice-beam","roost","nasty-plot","calm-mind","thunder-wave","protect","toxic","signal-beam","hurricane","focus-blast","shadow-ball"],"moves":["bug-buzz","air-slash","earth-power","roost"],"megas":[]},{"id":"gliscor","dex":472,"name":"Gliscor","gen":4,"types":["ground","flying"],"stats":{"hp":75,"atk":95,"def":125,"spa":45,"spd":75,"spe":95},"abilities":["poison-heal","hyper-cutter"],"sd":"gliscor","source":"seed","pool":["earthquake","brave-bird","close-combat","ice-punch","swords-dance","roost","protect","toxic","thunder-wave","drill-run","bulldoze","aerial-ace","drill-peck","knock-off"],"moves":["earthquake","brave-bird","close-combat","swords-dance"],"megas":[]},{"id":"mamoswine","dex":473,"name":"Mamoswine","gen":4,"types":["ice","ground"],"stats":{"hp":110,"atk":130,"def":80,"spa":70,"spd":60,"spe":80},"abilities":["thick-fat","snow-cloak"],"sd":"mamoswine","source":"seed","pool":["icicle-crash","earthquake","close-combat","knock-off","stealth-rock","swords-dance","protect","toxic","ice-punch","ice-shard","drill-run","bulldoze","brave-bird","iron-head"],"moves":["icicle-crash","earthquake","close-combat","swords-dance"],"megas":[]},{"id":"porygon-z","dex":474,"name":"Porygon-Z","gen":4,"types":["normal"],"stats":{"hp":85,"atk":80,"def":70,"spa":135,"spd":75,"spe":90},"abilities":["adaptability","analytic"],"sd":"porygonz","source":"seed","pool":["hyper-voice","focus-blast","ice-beam","nasty-plot","tri-attack","calm-mind","protect","toxic","boomburst","earth-power","shadow-ball"],"moves":["hyper-voice","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"gallade","dex":475,"name":"Gallade","gen":4,"types":["psychic","fighting"],"stats":{"hp":68,"atk":125,"def":65,"spa":65,"spd":115,"spe":80},"abilities":["inner-focus"],"sd":"gallade","source":"seed","pool":["zen-headbutt","close-combat","ice-punch","earthquake","swords-dance","protect","toxic","psycho-cut","drain-punch","brick-break","knock-off","stone-edge"],"moves":["zen-headbutt","close-combat","ice-punch","swords-dance"],"megas":[{"id":"gallade-mega","name":"Mega Gallade","types":["psychic","fighting"],"stats":{"hp":68,"atk":165,"def":95,"spa":65,"spd":115,"spe":110},"ability":"inner-focus","sd":"gallade-mega"}]},{"id":"dusknoir","dex":477,"name":"Dusknoir","gen":4,"types":["ghost"],"stats":{"hp":45,"atk":100,"def":135,"spa":65,"spd":135,"spe":45},"abilities":["pressure"],"sd":"dusknoir","source":"seed","pool":["shadow-claw","earthquake","ice-punch","will-o-wisp","swords-dance","recover","toxic","protect","shadow-sneak","poltergeist","close-combat","brave-bird"],"moves":["shadow-claw","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"froslass","dex":478,"name":"Froslass","gen":4,"types":["ice","ghost"],"stats":{"hp":70,"atk":80,"def":70,"spa":80,"spd":70,"spe":110},"abilities":["snow-cloak","cursed-body"],"sd":"froslass","source":"seed","pool":["icicle-crash","shadow-claw","earthquake","close-combat","will-o-wisp","spikes","thunder-wave","protect","toxic","ice-punch","ice-beam","blizzard","shadow-sneak","shadow-ball"],"moves":["icicle-crash","shadow-claw","earthquake","toxic"],"megas":[]},{"id":"dialga","dex":483,"name":"Dialga","gen":4,"types":["steel","dragon"],"stats":{"hp":100,"atk":120,"def":120,"spa":150,"spd":100,"spe":90},"abilities":["pressure"],"sd":"dialga","source":"seed","pool":["flash-cannon","dragon-pulse","earth-power","ice-beam","stealth-rock","nasty-plot","calm-mind","recover","toxic","protect","draco-meteor","shadow-ball","focus-blast"],"moves":["flash-cannon","dragon-pulse","earth-power","nasty-plot"],"megas":[]},{"id":"palkia","dex":484,"name":"Palkia","gen":4,"types":["water","dragon"],"stats":{"hp":90,"atk":120,"def":100,"spa":150,"spd":120,"spe":100},"abilities":["pressure"],"sd":"palkia","source":"seed","pool":["surf","dragon-pulse","focus-blast","air-slash","spacial-rend","nasty-plot","calm-mind","recover","toxic","protect","thunder-wave","hydro-pump","scald","draco-meteor"],"moves":["surf","dragon-pulse","focus-blast","nasty-plot"],"megas":[]},{"id":"heatran","dex":485,"name":"Heatran","gen":4,"types":["fire","steel"],"stats":{"hp":91,"atk":90,"def":106,"spa":130,"spd":106,"spe":77},"abilities":["flash-fire"],"sd":"heatran","source":"seed","pool":["flamethrower","flash-cannon","ice-beam","earth-power","stealth-rock","nasty-plot","calm-mind","recover","toxic","protect","fire-blast","overheat","shadow-ball","focus-blast"],"moves":["flamethrower","flash-cannon","ice-beam","nasty-plot"],"megas":[]},{"id":"giratina","dex":487,"name":"Giratina","gen":4,"types":["ghost","dragon"],"stats":{"hp":150,"atk":100,"def":120,"spa":100,"spd":120,"spe":90},"abilities":["pressure"],"sd":"giratina","source":"seed","pool":["shadow-claw","dragon-claw","earthquake","stone-edge","will-o-wisp","nasty-plot","calm-mind","recover","toxic","protect","shadow-sneak","shadow-ball","hex","dragon-rush"],"moves":["shadow-claw","dragon-claw","earthquake","nasty-plot"],"megas":[]},{"id":"cresselia","dex":488,"name":"Cresselia","gen":4,"types":["psychic"],"stats":{"hp":120,"atk":70,"def":120,"spa":75,"spd":130,"spe":85},"abilities":["levitate"],"sd":"cresselia","source":"seed","pool":["psychic","focus-blast","ice-beam","calm-mind","moonlight","recover","toxic","protect","psyshock","zen-headbutt","psycho-cut","shadow-ball","earth-power"],"moves":["psychic","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"darkrai","dex":491,"name":"Darkrai","gen":4,"types":["dark"],"stats":{"hp":70,"atk":90,"def":90,"spa":135,"spd":90,"spe":125},"abilities":["bad-dreams"],"sd":"darkrai","source":"seed","pool":["dark-pulse","focus-blast","ice-beam","nasty-plot","hypnosis","calm-mind","thunder-wave","protect","toxic","earth-power","air-slash"],"moves":["dark-pulse","focus-blast","nasty-plot","ice-beam"],"megas":[]}],"5":[{"id":"victini","dex":494,"name":"Victini","gen":5,"types":["psychic","fire"],"stats":{"hp":100,"atk":100,"def":100,"spa":100,"spd":100,"spe":100},"abilities":["victory-star"],"sd":"victini","source":"seed","pool":["zen-headbutt","flare-blitz","earthquake","ice-punch","nasty-plot","calm-mind","recover","toxic","protect","thunder-wave","psycho-cut","psychic","psyshock","fire-punch"],"moves":["zen-headbutt","flare-blitz","earthquake","nasty-plot"],"megas":[]},{"id":"serperior","dex":497,"name":"Serperior","gen":5,"types":["grass"],"stats":{"hp":75,"atk":75,"def":95,"spa":75,"spd":95,"spe":113},"abilities":["overgrow","contrary"],"sd":"serperior","source":"seed","pool":["wood-hammer","earthquake","stone-edge","leaf-storm","glare","thunder-wave","protect","toxic","leaf-blade","energy-ball","giga-drain","u-turn","play-rough"],"moves":["wood-hammer","earthquake","toxic","stone-edge"],"megas":[]},{"id":"emboar","dex":500,"name":"Emboar","gen":5,"types":["fire","fighting"],"stats":{"hp":110,"atk":123,"def":65,"spa":100,"spd":65,"spe":65},"abilities":["blaze","reckless"],"sd":"emboar","source":"seed","pool":["flare-blitz","close-combat","earthquake","ice-punch","swords-dance","protect","toxic","fire-punch","fire-fang","drain-punch","brick-break","knock-off","iron-head"],"moves":["flare-blitz","close-combat","earthquake","swords-dance"],"megas":[]},{"id":"samurott","dex":503,"name":"Samurott","gen":5,"types":["water"],"stats":{"hp":95,"atk":100,"def":85,"spa":108,"spd":70,"spe":70},"abilities":["torrent","shell-armor"],"sd":"samurott","source":"seed","pool":["surf","focus-blast","ice-beam","swords-dance","nasty-plot","calm-mind","protect","toxic","hydro-pump","waterfall","aqua-tail","shadow-ball","earth-power"],"moves":["surf","focus-blast","swords-dance","ice-beam"],"megas":[]},{"id":"excadrill","dex":530,"name":"Excadrill","gen":5,"types":["ground","steel"],"stats":{"hp":110,"atk":135,"def":60,"spa":50,"spd":65,"spe":88},"abilities":["sand-rush","mold-breaker"],"sd":"excadrill","source":"seed","pool":["earthquake","iron-head","ice-punch","close-combat","swords-dance","rapid-spin","protect","toxic","drill-run","bulldoze","bullet-punch","meteor-mash","knock-off","brave-bird"],"moves":["earthquake","iron-head","ice-punch","swords-dance"],"megas":[]},{"id":"conkeldurr","dex":534,"name":"Conkeldurr","gen":5,"types":["fighting"],"stats":{"hp":105,"atk":140,"def":95,"spa":55,"spd":65,"spe":45},"abilities":["guts","sheer-force"],"sd":"conkeldurr","source":"seed","pool":["close-combat","ice-punch","earthquake","mach-punch","swords-dance","protect","toxic","drain-punch","brick-break","knock-off","brave-bird"],"moves":["close-combat","ice-punch","swords-dance","earthquake"],"megas":[]},{"id":"seismitoad","dex":537,"name":"Seismitoad","gen":5,"types":["water","ground"],"stats":{"hp":105,"atk":95,"def":75,"spa":85,"spd":75,"spe":74},"abilities":["swift-swim","water-absorb"],"sd":"seismitoad","source":"seed","pool":["waterfall","earthquake","stone-edge","u-turn","toxic","protect","aqua-tail","surf","hydro-pump","drill-run","earth-power","play-rough","close-combat"],"moves":["waterfall","earthquake","stone-edge","toxic"],"megas":[]},{"id":"scolipede","dex":545,"name":"Scolipede","gen":5,"types":["bug","poison"],"stats":{"hp":60,"atk":100,"def":89,"spa":55,"spd":69,"spe":112},"abilities":["speed-boost","swarm"],"sd":"scolipede","source":"seed","pool":["x-scissor","poison-jab","earthquake","stone-edge","swords-dance","toxic","thunder-wave","protect","megahorn","leech-life","gunk-shot","cross-poison","ice-punch","close-combat"],"moves":["x-scissor","poison-jab","earthquake","swords-dance"],"megas":[]},{"id":"krookodile","dex":553,"name":"Krookodile","gen":5,"types":["ground","dark"],"stats":{"hp":95,"atk":117,"def":80,"spa":65,"spd":70,"spe":92},"abilities":["intimidate","moxie"],"sd":"krookodile","source":"seed","pool":["earthquake","crunch","ice-punch","close-combat","swords-dance","protect","toxic","drill-run","bulldoze","knock-off","sucker-punch","brave-bird","iron-head"],"moves":["earthquake","crunch","ice-punch","swords-dance"],"megas":[]},{"id":"cofagrigus","dex":563,"name":"Cofagrigus","gen":5,"types":["ghost"],"stats":{"hp":58,"atk":50,"def":145,"spa":95,"spd":105,"spe":30},"abilities":["mummy"],"sd":"cofagrigus","source":"seed","pool":["shadow-ball","focus-blast","ice-beam","will-o-wisp","toxic","recover","protect","hex","earth-power","air-slash"],"moves":["shadow-ball","focus-blast","toxic","ice-beam"],"megas":[]},{"id":"archeops","dex":567,"name":"Archeops","gen":5,"types":["rock","flying"],"stats":{"hp":75,"atk":140,"def":65,"spa":112,"spd":65,"spe":110},"abilities":["defeatist"],"sd":"archeops","source":"seed","pool":["stone-edge","brave-bird","earthquake","close-combat","acrobatics","swords-dance","thunder-wave","protect","toxic","rock-slide","head-smash","aerial-ace","drill-peck","ice-punch"],"moves":["stone-edge","brave-bird","earthquake","swords-dance"],"megas":[]},{"id":"zoroark","dex":571,"name":"Zoroark","gen":5,"types":["dark"],"stats":{"hp":60,"atk":105,"def":60,"spa":120,"spd":60,"spe":105},"abilities":["illusion"],"sd":"zoroark","source":"seed","pool":["dark-pulse","focus-blast","ice-beam","nasty-plot","calm-mind","thunder-wave","protect","toxic","crunch","knock-off","earth-power","air-slash"],"moves":["dark-pulse","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"cinccino","dex":573,"name":"Cinccino","gen":5,"types":["normal"],"stats":{"hp":75,"atk":95,"def":60,"spa":65,"spd":60,"spe":115},"abilities":["technician","skill-link"],"sd":"cinccino","source":"seed","pool":["return","earthquake","ice-punch","rock-blast","swords-dance","thunder-wave","protect","toxic","body-slam","double-edge","close-combat","knock-off"],"moves":["return","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"gothitelle","dex":576,"name":"Gothitelle","gen":5,"types":["psychic"],"stats":{"hp":70,"atk":55,"def":95,"spa":95,"spd":110,"spe":65},"abilities":["frisk","competitive"],"sd":"gothitelle","source":"seed","pool":["psychic","focus-blast","ice-beam","calm-mind","recover","toxic","protect","psyshock","extrasensory","shadow-ball","earth-power"],"moves":["psychic","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"reuniclus","dex":579,"name":"Reuniclus","gen":5,"types":["psychic"],"stats":{"hp":110,"atk":65,"def":75,"spa":125,"spd":85,"spe":30},"abilities":["magic-guard","regenerator"],"sd":"reuniclus","source":"seed","pool":["psychic","focus-blast","ice-beam","calm-mind","nasty-plot","recover","toxic","protect","psyshock","extrasensory","shadow-ball","earth-power"],"moves":["psychic","focus-blast","calm-mind","ice-beam"],"megas":[]},{"id":"escavalier","dex":589,"name":"Escavalier","gen":5,"types":["bug","steel"],"stats":{"hp":70,"atk":135,"def":105,"spa":60,"spd":105,"spe":20},"abilities":["swarm","overcoat"],"sd":"escavalier","source":"seed","pool":["x-scissor","iron-head","earthquake","ice-punch","swords-dance","recover","toxic","protect","megahorn","leech-life","bullet-punch","meteor-mash","brave-bird","close-combat"],"moves":["x-scissor","iron-head","earthquake","swords-dance"],"megas":[]},{"id":"jellicent","dex":593,"name":"Jellicent","gen":5,"types":["water","ghost"],"stats":{"hp":100,"atk":60,"def":70,"spa":85,"spd":105,"spe":60},"abilities":["water-absorb","cursed-body"],"sd":"jellicent","source":"seed","pool":["surf","shadow-ball","focus-blast","ice-beam","will-o-wisp","recover","toxic","protect","hydro-pump","scald","hex","earth-power","air-slash"],"moves":["surf","shadow-ball","focus-blast","recover"],"megas":[]},{"id":"galvantula","dex":596,"name":"Galvantula","gen":5,"types":["bug","electric"],"stats":{"hp":70,"atk":77,"def":60,"spa":97,"spd":60,"spe":108},"abilities":["compound-eyes"],"sd":"galvantula","source":"seed","pool":["bug-buzz","thunderbolt","earth-power","ice-beam","thunder-wave","protect","toxic","signal-beam","thunder","volt-switch","focus-blast","air-slash"],"moves":["bug-buzz","thunderbolt","earth-power","toxic"],"megas":[]},{"id":"ferrothorn","dex":598,"name":"Ferrothorn","gen":5,"types":["grass","steel"],"stats":{"hp":74,"atk":94,"def":131,"spa":54,"spd":116,"spe":20},"abilities":["iron-barbs"],"sd":"ferrothorn","source":"seed","pool":["wood-hammer","iron-head","earthquake","ice-punch","stealth-rock","leech-life","spikes","synthesis","toxic","protect","leaf-blade","seed-bomb","bullet-punch","meteor-mash"],"moves":["wood-hammer","iron-head","earthquake","synthesis"],"megas":[]},{"id":"eelektross","dex":604,"name":"Eelektross","gen":5,"types":["electric"],"stats":{"hp":85,"atk":115,"def":80,"spa":105,"spd":80,"spe":50},"abilities":["levitate"],"sd":"eelektross","source":"seed","pool":["wild-charge","earthquake","close-combat","swords-dance","protect","toxic","volt-tackle","thunderbolt","thunder","ice-punch","knock-off"],"moves":["wild-charge","earthquake","swords-dance","close-combat"],"megas":[]},{"id":"chandelure","dex":609,"name":"Chandelure","gen":5,"types":["ghost","fire"],"stats":{"hp":60,"atk":55,"def":90,"spa":145,"spd":90,"spe":80},"abilities":["flash-fire","flame-body"],"sd":"chandelure","source":"seed","pool":["shadow-ball","flamethrower","earth-power","ice-beam","calm-mind","nasty-plot","protect","toxic","hex","fire-blast","overheat","focus-blast","thunderbolt"],"moves":["shadow-ball","flamethrower","earth-power","calm-mind"],"megas":[]},{"id":"haxorus","dex":612,"name":"Haxorus","gen":5,"types":["dragon"],"stats":{"hp":76,"atk":147,"def":90,"spa":60,"spd":70,"spe":97},"abilities":["mold-breaker","unnerve"],"sd":"haxorus","source":"seed","pool":["dragon-claw","earthquake","stone-edge","dragon-dance","swords-dance","thunder-wave","protect","toxic","dragon-rush","dragon-hammer","u-turn","leaf-blade"],"moves":["dragon-claw","earthquake","dragon-dance","stone-edge"],"megas":[]},{"id":"accelgor","dex":617,"name":"Accelgor","gen":5,"types":["bug"],"stats":{"hp":80,"atk":70,"def":40,"spa":100,"spd":60,"spe":145},"abilities":["sticky-hold","hydration"],"sd":"accelgor","source":"seed","pool":["bug-buzz","earth-power","ice-beam","spikes","nasty-plot","calm-mind","thunder-wave","protect","toxic","signal-beam","focus-blast","air-slash"],"moves":["bug-buzz","earth-power","nasty-plot","ice-beam"],"megas":[]},{"id":"mienshao","dex":620,"name":"Mienshao","gen":5,"types":["fighting"],"stats":{"hp":65,"atk":125,"def":60,"spa":95,"spd":60,"spe":105},"abilities":["reckless","inner-focus"],"sd":"mienshao","source":"seed","pool":["close-combat","ice-punch","earthquake","u-turn","swords-dance","thunder-wave","protect","toxic","drain-punch","brick-break","knock-off","brave-bird"],"moves":["close-combat","ice-punch","swords-dance","earthquake"],"megas":[]},{"id":"bisharp","dex":625,"name":"Bisharp","gen":5,"types":["dark","steel"],"stats":{"hp":65,"atk":125,"def":100,"spa":60,"spd":70,"spe":70},"abilities":["defiant","pressure"],"sd":"bisharp","source":"seed","pool":["crunch","iron-head","earthquake","ice-punch","swords-dance","protect","toxic","knock-off","sucker-punch","bullet-punch","meteor-mash","close-combat","brave-bird"],"moves":["crunch","iron-head","earthquake","swords-dance"],"megas":[]},{"id":"braviary","dex":628,"name":"Braviary","gen":5,"types":["normal","flying"],"stats":{"hp":100,"atk":123,"def":75,"spa":57,"spd":75,"spe":80},"abilities":["sheer-force","defiant"],"sd":"braviary","source":"seed","pool":["return","brave-bird","earthquake","close-combat","roost","swords-dance","protect","toxic","body-slam","double-edge","aerial-ace","drill-peck","ice-punch","knock-off"],"moves":["return","brave-bird","earthquake","roost"],"megas":[]},{"id":"mandibuzz","dex":630,"name":"Mandibuzz","gen":5,"types":["dark","flying"],"stats":{"hp":110,"atk":65,"def":105,"spa":55,"spd":95,"spe":80},"abilities":["overcoat","weak-armor"],"sd":"mandibuzz","source":"seed","pool":["crunch","brave-bird","earthquake","close-combat","roost","toxic","protect","knock-off","sucker-punch","aerial-ace","drill-peck","ice-punch","iron-head"],"moves":["crunch","brave-bird","earthquake","roost"],"megas":[]},{"id":"hydreigon","dex":635,"name":"Hydreigon","gen":5,"types":["dark","dragon"],"stats":{"hp":92,"atk":105,"def":90,"spa":125,"spd":90,"spe":98},"abilities":["levitate"],"sd":"hydreigon","source":"seed","pool":["dark-pulse","dragon-pulse","focus-blast","ice-beam","nasty-plot","calm-mind","recover","toxic","protect","thunder-wave","draco-meteor","earth-power","air-slash"],"moves":["dark-pulse","dragon-pulse","focus-blast","nasty-plot"],"megas":[]},{"id":"volcarona","dex":637,"name":"Volcarona","gen":5,"types":["bug","fire"],"stats":{"hp":85,"atk":60,"def":65,"spa":135,"spd":105,"spe":100},"abilities":["flame-body","swarm"],"sd":"volcarona","source":"seed","pool":["bug-buzz","flamethrower","earth-power","ice-beam","quiver-dance","nasty-plot","calm-mind","thunder-wave","protect","toxic","signal-beam","fire-blast","overheat","shadow-ball"],"moves":["bug-buzz","flamethrower","earth-power","nasty-plot"],"megas":[]},{"id":"cobalion","dex":638,"name":"Cobalion","gen":5,"types":["steel","fighting"],"stats":{"hp":91,"atk":90,"def":129,"spa":90,"spd":72,"spe":108},"abilities":["justified"],"sd":"cobalion","source":"seed","pool":["iron-head","close-combat","ice-punch","earthquake","swords-dance","recover","toxic","protect","thunder-wave","bullet-punch","flash-cannon","drain-punch","aura-sphere","focus-blast"],"moves":["iron-head","close-combat","ice-punch","swords-dance"],"megas":[]},{"id":"terrakion","dex":639,"name":"Terrakion","gen":5,"types":["rock","fighting"],"stats":{"hp":91,"atk":129,"def":90,"spa":72,"spd":90,"spe":108},"abilities":["justified"],"sd":"terrakion","source":"seed","pool":["stone-edge","close-combat","ice-punch","earthquake","swords-dance","recover","toxic","protect","thunder-wave","rock-slide","head-smash","drain-punch","brick-break","knock-off"],"moves":["stone-edge","close-combat","ice-punch","swords-dance"],"megas":[]},{"id":"reshiram","dex":643,"name":"Reshiram","gen":5,"types":["dragon","fire"],"stats":{"hp":100,"atk":120,"def":100,"spa":150,"spd":120,"spe":90},"abilities":["turboblaze"],"sd":"reshiram","source":"seed","pool":["dragon-pulse","flamethrower","earth-power","shadow-ball","roost","nasty-plot","calm-mind","recover","toxic","protect","draco-meteor","fire-blast","overheat","ice-beam"],"moves":["dragon-pulse","flamethrower","earth-power","roost"],"megas":[]},{"id":"zekrom","dex":644,"name":"Zekrom","gen":5,"types":["dragon","electric"],"stats":{"hp":100,"atk":150,"def":120,"spa":120,"spd":100,"spe":90},"abilities":["teravolt"],"sd":"zekrom","source":"seed","pool":["dragon-claw","wild-charge","earthquake","close-combat","dragon-dance","recover","toxic","protect","dragon-rush","dragon-hammer","volt-tackle","thunder-punch","brave-bird","knock-off"],"moves":["dragon-claw","wild-charge","earthquake","dragon-dance"],"megas":[]},{"id":"landorus-therian","dex":645,"name":"Landorus-Therian","gen":5,"types":["ground","flying"],"stats":{"hp":89,"atk":145,"def":90,"spa":105,"spd":80,"spe":91},"abilities":["intimidate"],"sd":"landorus-therian","source":"seed","pool":["earthquake","brave-bird","close-combat","ice-punch","swords-dance","stealth-rock","protect","toxic","drill-run","bulldoze","aerial-ace","drill-peck","knock-off","iron-head"],"moves":["earthquake","brave-bird","close-combat","swords-dance"],"megas":[]},{"id":"kyurem","dex":646,"name":"Kyurem","gen":5,"types":["dragon","ice"],"stats":{"hp":125,"atk":130,"def":90,"spa":130,"spd":90,"spe":95},"abilities":["pressure"],"sd":"kyurem","source":"seed","pool":["dragon-claw","icicle-crash","earthquake","close-combat","roost","nasty-plot","calm-mind","recover","toxic","protect","thunder-wave","dragon-rush","dragon-pulse","draco-meteor"],"moves":["dragon-claw","icicle-crash","earthquake","roost"],"megas":[]},{"id":"keldeo","dex":647,"name":"Keldeo","gen":5,"types":["water","fighting"],"stats":{"hp":91,"atk":72,"def":90,"spa":129,"spd":90,"spe":108},"abilities":["justified"],"sd":"keldeo","source":"seed","pool":["surf","aura-sphere","ice-beam","shadow-ball","calm-mind","nasty-plot","recover","toxic","protect","thunder-wave","hydro-pump","scald","focus-blast","earth-power"],"moves":["surf","aura-sphere","ice-beam","calm-mind"],"megas":[]},{"id":"genesect","dex":649,"name":"Genesect","gen":5,"types":["bug","steel"],"stats":{"hp":71,"atk":120,"def":95,"spa":120,"spd":95,"spe":99},"abilities":["download"],"sd":"genesect","source":"seed","pool":["x-scissor","iron-head","earthquake","ice-punch","swords-dance","nasty-plot","calm-mind","thunder-wave","protect","toxic","megahorn","bug-buzz","signal-beam","bullet-punch"],"moves":["x-scissor","iron-head","earthquake","swords-dance"],"megas":[]}],"6":[{"id":"chesnaught","dex":652,"name":"Chesnaught","gen":6,"types":["grass","fighting"],"stats":{"hp":88,"atk":107,"def":122,"spa":74,"spd":75,"spe":64},"abilities":["overgrow","bulletproof"],"sd":"chesnaught","source":"seed","pool":["wood-hammer","close-combat","earthquake","ice-punch","spikes","synthesis","swords-dance","toxic","protect","leaf-blade","seed-bomb","drain-punch","brick-break","knock-off"],"moves":["wood-hammer","close-combat","earthquake","synthesis"],"megas":[]},{"id":"delphox","dex":655,"name":"Delphox","gen":6,"types":["fire","psychic"],"stats":{"hp":75,"atk":69,"def":72,"spa":114,"spd":100,"spe":104},"abilities":["blaze","magician"],"sd":"delphox","source":"seed","pool":["flamethrower","psychic","ice-beam","focus-blast","calm-mind","nasty-plot","thunder-wave","protect","toxic","fire-blast","overheat","psyshock","extrasensory","shadow-ball"],"moves":["flamethrower","psychic","ice-beam","calm-mind"],"megas":[]},{"id":"greninja","dex":658,"name":"Greninja","gen":6,"types":["water","dark"],"stats":{"hp":72,"atk":95,"def":67,"spa":103,"spd":71,"spe":122},"abilities":["protean","torrent"],"sd":"greninja","source":"seed","pool":["surf","dark-pulse","focus-blast","ice-beam","spikes","u-turn","nasty-plot","calm-mind","thunder-wave","protect","toxic","hydro-pump","waterfall","aqua-tail"],"moves":["surf","dark-pulse","focus-blast","nasty-plot"],"megas":[]},{"id":"talonflame","dex":663,"name":"Talonflame","gen":6,"types":["fire","flying"],"stats":{"hp":78,"atk":81,"def":71,"spa":74,"spd":69,"spe":126},"abilities":["gale-wings","flame-body"],"sd":"talonflame","source":"seed","pool":["flare-blitz","brave-bird","earthquake","ice-punch","roost","will-o-wisp","thunder-wave","protect","toxic","fire-punch","flamethrower","fire-blast","aerial-ace","air-slash"],"moves":["flare-blitz","brave-bird","earthquake","roost"],"megas":[]},{"id":"aegislash","dex":681,"name":"Aegislash","gen":6,"types":["steel","ghost"],"stats":{"hp":60,"atk":50,"def":140,"spa":50,"spd":140,"spe":60},"abilities":["pressure"],"sd":"aegislash","source":"seed","pool":["iron-head","shadow-claw","earthquake","ice-punch","swords-dance","recover","toxic","protect","bullet-punch","flash-cannon","shadow-sneak","shadow-ball","hex","close-combat"],"moves":["iron-head","shadow-claw","earthquake","swords-dance"],"megas":[]},{"id":"hawlucha","dex":701,"name":"Hawlucha","gen":6,"types":["fighting","flying"],"stats":{"hp":78,"atk":92,"def":75,"spa":74,"spd":63,"spe":118},"abilities":["unburden","mold-breaker"],"sd":"hawlucha","source":"seed","pool":["close-combat","brave-bird","earthquake","ice-punch","swords-dance","thunder-wave","protect","toxic","drain-punch","brick-break","aerial-ace","drill-peck","knock-off","iron-head"],"moves":["close-combat","brave-bird","earthquake","swords-dance"],"megas":[]},{"id":"goodra","dex":706,"name":"Goodra","gen":6,"types":["dragon"],"stats":{"hp":90,"atk":100,"def":70,"spa":110,"spd":150,"spe":80},"abilities":["sap-sipper","hydration"],"sd":"goodra","source":"seed","pool":["dragon-pulse","focus-blast","ice-beam","rest","nasty-plot","calm-mind","recover","toxic","protect","draco-meteor","dragon-claw","dragon-rush","earth-power","shadow-ball"],"moves":["dragon-pulse","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"noivern","dex":715,"name":"Noivern","gen":6,"types":["flying","dragon"],"stats":{"hp":85,"atk":70,"def":80,"spa":97,"spd":80,"spe":123},"abilities":["infiltrator","frisk"],"sd":"noivern","source":"seed","pool":["air-slash","dragon-pulse","focus-blast","earth-power","roost","thunder-wave","protect","toxic","hurricane","draco-meteor","shadow-ball","ice-beam"],"moves":["air-slash","dragon-pulse","focus-blast","roost"],"megas":[]},{"id":"xerneas","dex":716,"name":"Xerneas","gen":6,"types":["fairy"],"stats":{"hp":126,"atk":131,"def":95,"spa":131,"spd":98,"spe":99},"abilities":["fairy-aura"],"sd":"xerneas","source":"seed","pool":["play-rough","earthquake","stone-edge","calm-mind","nasty-plot","recover","toxic","protect","thunder-wave","spirit-break","moonblast","dazzling-gleam","ice-punch","knock-off"],"moves":["play-rough","earthquake","calm-mind","stone-edge"],"megas":[]},{"id":"yveltal","dex":717,"name":"Yveltal","gen":6,"types":["dark","flying"],"stats":{"hp":126,"atk":131,"def":95,"spa":131,"spd":98,"spe":99},"abilities":["dark-aura"],"sd":"yveltal","source":"seed","pool":["crunch","brave-bird","earthquake","close-combat","roost","nasty-plot","calm-mind","toxic","protect","thunder-wave","knock-off","dark-pulse","aerial-ace","air-slash"],"moves":["crunch","brave-bird","earthquake","roost"],"megas":[]}],"7":[{"id":"decidueye","dex":724,"name":"Decidueye","gen":7,"types":["grass","ghost"],"stats":{"hp":78,"atk":107,"def":75,"spa":100,"spd":100,"spe":70},"abilities":["overgrow","long-reach"],"sd":"decidueye","source":"seed","pool":["wood-hammer","shadow-claw","earthquake","stone-edge","swords-dance","protect","toxic","leaf-blade","energy-ball","giga-drain","shadow-sneak","shadow-ball","hex","play-rough"],"moves":["wood-hammer","shadow-claw","earthquake","swords-dance"],"megas":[]},{"id":"incineroar","dex":727,"name":"Incineroar","gen":7,"types":["fire","dark"],"stats":{"hp":95,"atk":115,"def":90,"spa":80,"spd":90,"spe":60},"abilities":["blaze","intimidate"],"sd":"incineroar","source":"seed","pool":["flare-blitz","crunch","earthquake","ice-punch","fake-out","u-turn","swords-dance","recover","toxic","protect","fire-punch","fire-fang","knock-off","sucker-punch"],"moves":["flare-blitz","crunch","earthquake","swords-dance"],"megas":[]},{"id":"primarina","dex":730,"name":"Primarina","gen":7,"types":["water","fairy"],"stats":{"hp":80,"atk":74,"def":74,"spa":126,"spd":116,"spe":60},"abilities":["torrent","liquid-voice"],"sd":"primarina","source":"seed","pool":["surf","moonblast","flamethrower","shadow-ball","calm-mind","nasty-plot","recover","toxic","protect","hydro-pump","scald","dazzling-gleam","draining-kiss","thunderbolt"],"moves":["surf","moonblast","flamethrower","calm-mind"],"megas":[]},{"id":"vikavolt","dex":738,"name":"Vikavolt","gen":7,"types":["bug","electric"],"stats":{"hp":77,"atk":70,"def":90,"spa":145,"spd":75,"spe":43},"abilities":["levitate"],"sd":"vikavolt","source":"seed","pool":["bug-buzz","thunderbolt","earth-power","ice-beam","volt-switch","nasty-plot","calm-mind","protect","toxic","signal-beam","thunder","focus-blast","air-slash"],"moves":["bug-buzz","thunderbolt","earth-power","nasty-plot"],"megas":[]},{"id":"lycanroc","dex":745,"name":"Lycanroc","gen":7,"types":["rock"],"stats":{"hp":75,"atk":115,"def":65,"spa":55,"spd":65,"spe":112},"abilities":["sand-rush","keen-eye"],"sd":"lycanroc","source":"seed","pool":["stone-edge","earthquake","ice-punch","swords-dance","thunder-wave","protect","toxic","rock-slide","head-smash","close-combat","knock-off"],"moves":["stone-edge","earthquake","swords-dance","ice-punch"],"megas":[]},{"id":"toxapex","dex":748,"name":"Toxapex","gen":7,"types":["poison","water"],"stats":{"hp":50,"atk":63,"def":152,"spa":53,"spd":142,"spe":35},"abilities":["regenerator","merciless"],"sd":"toxapex","source":"seed","pool":["poison-jab","waterfall","close-combat","earthquake","toxic","recover","protect","gunk-shot","cross-poison","aqua-tail","aqua-jet","stone-edge","knock-off"],"moves":["poison-jab","waterfall","close-combat","toxic"],"megas":[]},{"id":"araquanid","dex":752,"name":"Araquanid","gen":7,"types":["water","bug"],"stats":{"hp":68,"atk":70,"def":92,"spa":50,"spd":132,"spe":42},"abilities":["water-bubble"],"sd":"araquanid","source":"seed","pool":["waterfall","x-scissor","earthquake","stone-edge","liquidation","leech-life","recover","toxic","protect","aqua-tail","aqua-jet","megahorn","play-rough","close-combat"],"moves":["waterfall","x-scissor","earthquake","recover"],"megas":[]},{"id":"salazzle","dex":758,"name":"Salazzle","gen":7,"types":["poison","fire"],"stats":{"hp":68,"atk":64,"def":60,"spa":111,"spd":60,"spe":117},"abilities":["corrosion","oblivious"],"sd":"salazzle","source":"seed","pool":["sludge-bomb","flamethrower","earth-power","ice-beam","nasty-plot","calm-mind","thunder-wave","protect","toxic","sludge-wave","fire-blast","overheat","shadow-ball","focus-blast"],"moves":["sludge-bomb","flamethrower","earth-power","nasty-plot"],"megas":[]},{"id":"tsareena","dex":763,"name":"Tsareena","gen":7,"types":["grass"],"stats":{"hp":72,"atk":120,"def":98,"spa":50,"spd":98,"spe":72},"abilities":["leaf-guard","queenly-majesty"],"sd":"tsareena","source":"seed","pool":["wood-hammer","earthquake","stone-edge","swords-dance","protect","toxic","leaf-blade","seed-bomb","u-turn","play-rough"],"moves":["wood-hammer","earthquake","swords-dance","stone-edge"],"megas":[]},{"id":"golisopod","dex":768,"name":"Golisopod","gen":7,"types":["bug","water"],"stats":{"hp":75,"atk":125,"def":140,"spa":60,"spd":90,"spe":40},"abilities":["emergency-exit","anticipation"],"sd":"golisopod","source":"seed","pool":["x-scissor","waterfall","earthquake","stone-edge","swords-dance","recover","toxic","protect","megahorn","leech-life","aqua-tail","aqua-jet","play-rough","close-combat"],"moves":["x-scissor","waterfall","earthquake","swords-dance"],"megas":[]},{"id":"turtonator","dex":776,"name":"Turtonator","gen":7,"types":["fire","dragon"],"stats":{"hp":60,"atk":78,"def":135,"spa":91,"spd":85,"spe":36},"abilities":["shell-armor"],"sd":"turtonator","source":"seed","pool":["flamethrower","dragon-pulse","earth-power","shadow-ball","will-o-wisp","recover","toxic","protect","fire-blast","overheat","draco-meteor","ice-beam","focus-blast"],"moves":["flamethrower","dragon-pulse","earth-power","recover"],"megas":[]},{"id":"mimikyu","dex":778,"name":"Mimikyu","gen":7,"types":["ghost","fairy"],"stats":{"hp":55,"atk":90,"def":80,"spa":50,"spd":105,"spe":96},"abilities":["disguise"],"sd":"mimikyu","source":"seed","pool":["shadow-claw","play-rough","earthquake","stone-edge","swords-dance","thunder-wave","protect","toxic","shadow-sneak","poltergeist","spirit-break","ice-punch","close-combat"],"moves":["shadow-claw","play-rough","earthquake","swords-dance"],"megas":[]},{"id":"drampa","dex":780,"name":"Drampa","gen":7,"types":["normal","dragon"],"stats":{"hp":78,"atk":60,"def":85,"spa":135,"spd":91,"spe":36},"abilities":["sap-sipper","berserk"],"sd":"drampa","source":"seed","pool":["hyper-voice","dragon-pulse","focus-blast","ice-beam","calm-mind","nasty-plot","protect","toxic","tri-attack","boomburst","draco-meteor","earth-power","shadow-ball"],"moves":["hyper-voice","dragon-pulse","focus-blast","calm-mind"],"megas":[]},{"id":"kommo-o","dex":784,"name":"Kommo-o","gen":7,"types":["dragon","fighting"],"stats":{"hp":75,"atk":110,"def":125,"spa":100,"spd":105,"spe":85},"abilities":["bulletproof","soundproof"],"sd":"kommoo","source":"seed","pool":["dragon-claw","close-combat","earthquake","ice-punch","clanging-scales","dragon-dance","recover","toxic","protect","dragon-rush","dragon-pulse","draco-meteor","drain-punch","aura-sphere"],"moves":["dragon-claw","close-combat","earthquake","dragon-dance"],"megas":[]},{"id":"tapu-koko","dex":785,"name":"Tapu Koko","gen":7,"types":["electric","fairy"],"stats":{"hp":70,"atk":115,"def":85,"spa":95,"spd":75,"spe":130},"abilities":["electric-surge"],"sd":"tapukoko","source":"seed","pool":["wild-charge","play-rough","earthquake","fire-punch","u-turn","swords-dance","thunder-wave","protect","toxic","volt-tackle","thunder-punch","spirit-break","knock-off","close-combat"],"moves":["wild-charge","play-rough","earthquake","swords-dance"],"megas":[]},{"id":"tapu-lele","dex":786,"name":"Tapu Lele","gen":7,"types":["psychic","fairy"],"stats":{"hp":70,"atk":85,"def":75,"spa":130,"spd":115,"spe":95},"abilities":["psychic-surge"],"sd":"tapulele","source":"seed","pool":["psychic","moonblast","focus-blast","ice-beam","calm-mind","nasty-plot","thunder-wave","protect","toxic","psyshock","extrasensory","dazzling-gleam","draining-kiss","shadow-ball"],"moves":["psychic","moonblast","focus-blast","calm-mind"],"megas":[]},{"id":"tapu-bulu","dex":787,"name":"Tapu Bulu","gen":7,"types":["grass","fairy"],"stats":{"hp":70,"atk":130,"def":115,"spa":85,"spd":95,"spe":75},"abilities":["grassy-surge"],"sd":"tapubulu","source":"seed","pool":["wood-hammer","play-rough","earthquake","stone-edge","swords-dance","synthesis","toxic","protect","leaf-blade","seed-bomb","spirit-break","knock-off","poison-jab"],"moves":["wood-hammer","play-rough","earthquake","swords-dance"],"megas":[]},{"id":"tapu-fini","dex":788,"name":"Tapu Fini","gen":7,"types":["water","fairy"],"stats":{"hp":70,"atk":75,"def":115,"spa":95,"spd":130,"spe":85},"abilities":["misty-surge"],"sd":"tapufini","source":"seed","pool":["surf","moonblast","flamethrower","shadow-ball","calm-mind","toxic","recover","protect","hydro-pump","scald","dazzling-gleam","draining-kiss","thunderbolt","earth-power"],"moves":["surf","moonblast","flamethrower","calm-mind"],"megas":[]},{"id":"solgaleo","dex":791,"name":"Solgaleo","gen":7,"types":["psychic","steel"],"stats":{"hp":137,"atk":137,"def":107,"spa":113,"spd":89,"spe":97},"abilities":["full-metal-body"],"sd":"solgaleo","source":"seed","pool":["zen-headbutt","iron-head","ice-punch","earthquake","swords-dance","recover","toxic","protect","thunder-wave","psycho-cut","bullet-punch","meteor-mash","close-combat","knock-off"],"moves":["zen-headbutt","iron-head","ice-punch","swords-dance"],"megas":[]},{"id":"lunala","dex":792,"name":"Lunala","gen":7,"types":["psychic","ghost"],"stats":{"hp":137,"atk":113,"def":89,"spa":137,"spd":107,"spe":97},"abilities":["shadow-shield"],"sd":"lunala","source":"seed","pool":["psychic","shadow-ball","focus-blast","ice-beam","calm-mind","moonlight","nasty-plot","recover","toxic","protect","thunder-wave","psyshock","extrasensory","hex"],"moves":["psychic","shadow-ball","focus-blast","calm-mind"],"megas":[]},{"id":"nihilego","dex":793,"name":"Nihilego","gen":7,"types":["rock","poison"],"stats":{"hp":109,"atk":53,"def":47,"spa":127,"spd":131,"spe":103},"abilities":["beast-boost"],"sd":"nihilego","source":"seed","pool":["power-gem","sludge-bomb","focus-blast","shadow-ball","stealth-rock","nasty-plot","calm-mind","recover","toxic","protect","thunder-wave","sludge-wave","ice-beam","earth-power"],"moves":["power-gem","sludge-bomb","focus-blast","nasty-plot"],"megas":[]},{"id":"buzzwole","dex":794,"name":"Buzzwole","gen":7,"types":["bug","fighting"],"stats":{"hp":107,"atk":139,"def":139,"spa":53,"spd":53,"spe":79},"abilities":["beast-boost"],"sd":"buzzwole","source":"seed","pool":["x-scissor","close-combat","earthquake","ice-punch","bulk-up","swords-dance","recover","toxic","protect","megahorn","leech-life","drain-punch","brick-break","brave-bird"],"moves":["x-scissor","close-combat","earthquake","swords-dance"],"megas":[]},{"id":"pheromosa","dex":795,"name":"Pheromosa","gen":7,"types":["bug","fighting"],"stats":{"hp":71,"atk":137,"def":37,"spa":137,"spd":37,"spe":151},"abilities":["beast-boost"],"sd":"pheromosa","source":"seed","pool":["x-scissor","close-combat","earthquake","ice-punch","u-turn","nasty-plot","calm-mind","thunder-wave","protect","toxic","megahorn","bug-buzz","signal-beam","drain-punch"],"moves":["x-scissor","close-combat","earthquake","nasty-plot"],"megas":[]},{"id":"xurkitree","dex":796,"name":"Xurkitree","gen":7,"types":["electric"],"stats":{"hp":83,"atk":89,"def":71,"spa":173,"spd":71,"spe":83},"abilities":["beast-boost"],"sd":"xurkitree","source":"seed","pool":["thunderbolt","focus-blast","ice-beam","nasty-plot","calm-mind","protect","toxic","thunder","volt-switch","earth-power","shadow-ball"],"moves":["thunderbolt","focus-blast","nasty-plot","ice-beam"],"megas":[]},{"id":"celesteela","dex":797,"name":"Celesteela","gen":7,"types":["steel","flying"],"stats":{"hp":97,"atk":101,"def":103,"spa":107,"spd":101,"spe":61},"abilities":["beast-boost"],"sd":"celesteela","source":"seed","pool":["flash-cannon","air-slash","earth-power","ice-beam","protect","nasty-plot","calm-mind","roost","toxic","iron-head","bullet-punch","hurricane","brave-bird","aerial-ace"],"moves":["flash-cannon","air-slash","earth-power","nasty-plot"],"megas":[]},{"id":"kartana","dex":798,"name":"Kartana","gen":7,"types":["grass","steel"],"stats":{"hp":59,"atk":181,"def":131,"spa":59,"spd":31,"spe":109},"abilities":["beast-boost"],"sd":"kartana","source":"seed","pool":["wood-hammer","iron-head","earthquake","ice-punch","swords-dance","thunder-wave","protect","toxic","leaf-blade","seed-bomb","bullet-punch","meteor-mash","close-combat","knock-off"],"moves":["wood-hammer","iron-head","earthquake","swords-dance"],"megas":[]},{"id":"guzzlord","dex":799,"name":"Guzzlord","gen":7,"types":["dark","dragon"],"stats":{"hp":223,"atk":101,"def":53,"spa":97,"spd":53,"spe":43},"abilities":["beast-boost"],"sd":"guzzlord","source":"seed","pool":["crunch","dragon-claw","earthquake","stone-edge","rest","dragon-dance","recover","toxic","protect","knock-off","dark-pulse","dragon-rush","dragon-pulse","draco-meteor"],"moves":["crunch","dragon-claw","earthquake","dragon-dance"],"megas":[]},{"id":"necrozma","dex":800,"name":"Necrozma","gen":7,"types":["psychic"],"stats":{"hp":97,"atk":107,"def":101,"spa":127,"spd":89,"spe":79},"abilities":["prism-armor"],"sd":"necrozma","source":"seed","pool":["psychic","focus-blast","ice-beam","swords-dance","nasty-plot","calm-mind","recover","toxic","protect","psyshock","extrasensory","shadow-ball","earth-power"],"moves":["psychic","focus-blast","swords-dance","ice-beam"],"megas":[]},{"id":"magearna","dex":801,"name":"Magearna","gen":7,"types":["steel","fairy"],"stats":{"hp":80,"atk":95,"def":115,"spa":130,"spd":115,"spe":65},"abilities":["soul-heart"],"sd":"magearna","source":"seed","pool":["flash-cannon","moonblast","earth-power","ice-beam","calm-mind","nasty-plot","recover","toxic","protect","dazzling-gleam","draining-kiss","shadow-ball","thunderbolt"],"moves":["flash-cannon","moonblast","earth-power","calm-mind"],"megas":[]},{"id":"marshadow","dex":802,"name":"Marshadow","gen":7,"types":["fighting","ghost"],"stats":{"hp":90,"atk":125,"def":80,"spa":90,"spd":90,"spe":125},"abilities":["technician"],"sd":"marshadow","source":"seed","pool":["close-combat","shadow-claw","ice-punch","earthquake","bulk-up","swords-dance","thunder-wave","protect","toxic","drain-punch","brick-break","shadow-sneak","poltergeist","brave-bird"],"moves":["close-combat","shadow-claw","ice-punch","swords-dance"],"megas":[]},{"id":"stakataka","dex":805,"name":"Stakataka","gen":7,"types":["rock","steel"],"stats":{"hp":61,"atk":131,"def":211,"spa":53,"spd":101,"spe":13},"abilities":["beast-boost"],"sd":"stakataka","source":"seed","pool":["stone-edge","iron-head","earthquake","ice-punch","stealth-rock","swords-dance","recover","toxic","protect","rock-slide","head-smash","bullet-punch","meteor-mash","close-combat"],"moves":["stone-edge","iron-head","earthquake","swords-dance"],"megas":[]},{"id":"blacephalon","dex":806,"name":"Blacephalon","gen":7,"types":["fire","ghost"],"stats":{"hp":53,"atk":127,"def":53,"spa":151,"spd":79,"spe":107},"abilities":["beast-boost"],"sd":"blacephalon","source":"seed","pool":["flamethrower","shadow-ball","earth-power","ice-beam","nasty-plot","calm-mind","thunder-wave","protect","toxic","fire-blast","overheat","hex","focus-blast","thunderbolt"],"moves":["flamethrower","shadow-ball","earth-power","nasty-plot"],"megas":[]}]}};
const store = { moves: {}, species: {}, gens: {}, loaded: false };
function load() {
  store.moves = {}; store.species = {}; store.gens = {};
  for (const m of DATA.moves) store.moves[m.id] = m;
  for (const g of Object.keys(DATA.gens).map(Number).sort((a, b) => a - b)) {
    store.gens[g] = DATA.gens[g].map((p) => p.id);
    for (const p of DATA.gens[g]) store.species[p.id] = p;
  }
  store.loaded = true; return store;
}
function ensure() { if (!store.loaded) load(); }
module.exports = {
  load,
  move(id) { ensure(); return store.moves[id] || null; },
  species(id) { ensure(); return store.species[id] || null; },
  allMoves() { ensure(); return store.moves; },
  allSpecies() { ensure(); return Object.values(store.species); },
  generations() { ensure(); return Object.keys(store.gens).map(Number); },
  byGen(gen) { ensure(); return (store.gens[gen] || []).map((id) => store.species[id]); },
  count() { ensure(); return { species: Object.keys(store.species).length, moves: Object.keys(store.moves).length }; },
};
});

__def('engine/types', function (module, exports, require) {
/**
 * Tabela de tipos (Gen 6+ — inclui Fada, sem tipo ??? ).
 */
const TYPES = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];

const TYPE_PT = {
  normal: 'Normal', fire: 'Fogo', water: 'Água', electric: 'Elétrico', grass: 'Planta', ice: 'Gelo',
  fighting: 'Lutador', poison: 'Veneno', ground: 'Terra', flying: 'Voador', psychic: 'Psíquico', bug: 'Inseto',
  rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragão', dark: 'Sombrio', steel: 'Aço', fairy: 'Fada',
};

// atacante -> { se: [...], nve: [...], imm: [...] }
const RAW = {
  normal:   { se: [], nve: ['rock', 'steel'], imm: ['ghost'] },
  fire:     { se: ['grass', 'ice', 'bug', 'steel'], nve: ['fire', 'water', 'rock', 'dragon'], imm: [] },
  water:    { se: ['fire', 'ground', 'rock'], nve: ['water', 'grass', 'dragon'], imm: [] },
  electric: { se: ['water', 'flying'], nve: ['electric', 'grass', 'dragon'], imm: ['ground'] },
  grass:    { se: ['water', 'ground', 'rock'], nve: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'], imm: [] },
  ice:      { se: ['grass', 'ground', 'flying', 'dragon'], nve: ['fire', 'water', 'ice', 'steel'], imm: [] },
  fighting: { se: ['normal', 'ice', 'rock', 'dark', 'steel'], nve: ['poison', 'flying', 'psychic', 'bug', 'fairy'], imm: ['ghost'] },
  poison:   { se: ['grass', 'fairy'], nve: ['poison', 'ground', 'rock', 'ghost'], imm: ['steel'] },
  ground:   { se: ['fire', 'electric', 'poison', 'rock', 'steel'], nve: ['grass', 'bug'], imm: ['flying'] },
  flying:   { se: ['grass', 'fighting', 'bug'], nve: ['electric', 'rock', 'steel'], imm: [] },
  psychic:  { se: ['fighting', 'poison'], nve: ['psychic', 'steel'], imm: ['dark'] },
  bug:      { se: ['grass', 'psychic', 'dark'], nve: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'], imm: [] },
  rock:     { se: ['fire', 'ice', 'flying', 'bug'], nve: ['fighting', 'ground', 'steel'], imm: [] },
  ghost:    { se: ['psychic', 'ghost'], nve: ['dark'], imm: ['normal'] },
  dragon:   { se: ['dragon'], nve: ['steel'], imm: ['fairy'] },
  dark:     { se: ['psychic', 'ghost'], nve: ['fighting', 'dark', 'fairy'], imm: [] },
  steel:    { se: ['ice', 'rock', 'fairy'], nve: ['fire', 'water', 'electric', 'steel'], imm: [] },
  fairy:    { se: ['fighting', 'dragon', 'dark'], nve: ['fire', 'poison', 'steel'], imm: [] },
};

const CHART = {};
for (const atk of TYPES) {
  CHART[atk] = {};
  for (const def of TYPES) {
    const r = RAW[atk];
    CHART[atk][def] = r.imm.includes(def) ? 0 : r.se.includes(def) ? 2 : r.nve.includes(def) ? 0.5 : 1;
  }
}

/** Multiplicador total de um tipo de ataque contra uma lista de tipos defensivos. */
function effectiveness(atkType, defTypes) {
  let m = 1;
  const row = CHART[atkType];
  if (!row) return 1; // 'typeless' (Struggle etc.)
  for (const d of defTypes) m *= row[d] ?? 1;
  return m;
}

module.exports = { TYPES, TYPE_PT, CHART, effectiveness };
});

__def('engine/stats', function (module, exports, require) {
/**
 * Cálculo de atributos. Padrão Stadium: Nv. 50, IV 31, EV 85 em tudo (252 EVs ≈ 63 pts a Nv. 100 → 21 a Nv. 50), natureza neutra.
 */
const LEVEL = 50;
const IV = 31;
const EV = 85;

function calcStats(base, level = LEVEL) {
  const core = (b) => Math.floor(((2 * b + IV + Math.floor(EV / 4)) * level) / 100);
  return {
    hp: core(base.hp) + level + 10,
    atk: core(base.atk) + 5,
    def: core(base.def) + 5,
    spa: core(base.spa) + 5,
    spd: core(base.spd) + 5,
    spe: core(base.spe) + 5,
  };
}

module.exports = { LEVEL, IV, EV, calcStats };
});

__def('engine/items', function (module, exports, require) {
/**
 * Catálogo de itens segurados, habilidades e tabela de Movimentos Z.
 * A lógica de cada item/habilidade vive em battle.js; aqui ficam os metadados (nome/descrição) para a UI.
 */
const { TYPES, TYPE_PT } = require('./types');

const titleCase = (id) => id.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

/* ------------------------------ ITENS ------------------------------ */
const ITEMS = {};
const addItem = (id, name, desc, extra = {}) => { ITEMS[id] = { id, name, desc, ...extra }; };

addItem('leftovers', 'Leftovers', 'Recupera 1/16 do HP máximo no fim de cada turno.');
addItem('black-sludge', 'Black Sludge', 'Cura 1/16 do HP se for Veneno; senão perde 1/8.');
addItem('life-orb', 'Life Orb', 'Golpes causam 30% a mais de dano, mas custam 10% do HP.');
addItem('choice-band', 'Choice Band', 'Ataque x1.5, mas só pode usar o primeiro golpe escolhido.');
addItem('choice-specs', 'Choice Specs', 'Ataque Esp. x1.5, mas só pode usar o primeiro golpe escolhido.');
addItem('choice-scarf', 'Choice Scarf', 'Velocidade x1.5, mas só pode usar o primeiro golpe escolhido.');
addItem('focus-sash', 'Focus Sash', 'Sobrevive com 1 HP a um golpe que o nocautearia estando com HP cheio (uso único).');
addItem('sitrus-berry', 'Sitrus Berry', 'Recupera 1/4 do HP quando cai a 50% ou menos (uso único).');
addItem('lum-berry', 'Lum Berry', 'Cura qualquer status (uso único).');
addItem('expert-belt', 'Expert Belt', 'Golpes super efetivos causam 20% a mais de dano.');
addItem('assault-vest', 'Assault Vest', 'Defesa Esp. x1.5, mas não pode usar golpes de status.');
addItem('rocky-helmet', 'Rocky Helmet', 'Quem atacar com contato perde 1/6 do HP.');
addItem('heavy-duty-boots', 'Heavy-Duty Boots', 'Imune a armadilhas de entrada (Stealth Rock, Spikes).');
addItem('weakness-policy', 'Weakness Policy', 'Ao receber golpe super efetivo: Atq e Atq Esp +2 (uso único).');
addItem('scope-lens', 'Scope Lens', 'Aumenta a taxa de acerto crítico.');
addItem('razor-claw', 'Razor Claw', 'Aumenta a taxa de acerto crítico.');
addItem('light-clay', 'Light Clay', 'Reflect/Light Screen/Aurora Veil duram 8 turnos.');
addItem('damp-rock', 'Damp Rock', 'Chuva dura 8 turnos.');
addItem('heat-rock', 'Heat Rock', 'Sol forte dura 8 turnos.');
addItem('smooth-rock', 'Smooth Rock', 'Tempestade de areia dura 8 turnos.');
addItem('icy-rock', 'Icy Rock', 'Granizo dura 8 turnos.');
addItem('flame-orb', 'Flame Orb', 'Queima o portador no fim do turno.');
addItem('toxic-orb', 'Toxic Orb', 'Envenena gravemente o portador no fim do turno.');
addItem('muscle-band', 'Muscle Band', 'Golpes físicos +10%.');
addItem('wise-glasses', 'Wise Glasses', 'Golpes especiais +10%.');
addItem('shell-bell', 'Shell Bell', 'Recupera 1/8 do dano causado.');
addItem('big-root', 'Big Root', 'Golpes de drenagem curam 30% a mais.');
addItem('kings-rock', "King's Rock", '10% de chance de causar recuo ao atacar.');

const TYPE_BOOST = {
  normal: 'silk-scarf', fire: 'charcoal', water: 'mystic-water', electric: 'magnet', grass: 'miracle-seed', ice: 'never-melt-ice',
  fighting: 'black-belt', poison: 'poison-barb', ground: 'soft-sand', flying: 'sharp-beak', psychic: 'twisted-spoon', bug: 'silver-powder',
  rock: 'hard-stone', ghost: 'spell-tag', dragon: 'dragon-fang', dark: 'black-glasses', steel: 'metal-coat', fairy: 'fairy-feather',
};
const BOOST_ITEM_TYPE = {}; // itemId -> type
for (const t of TYPES) {
  const id = TYPE_BOOST[t];
  BOOST_ITEM_TYPE[id] = t;
  addItem(id, titleCase(id), `Golpes do tipo ${TYPE_PT[t]} +20%.`, { boost: t });
}

const Z_CRYSTAL = {
  normal: 'normalium-z', fire: 'firium-z', water: 'waterium-z', electric: 'electrium-z', grass: 'grassium-z', ice: 'icium-z',
  fighting: 'fightinium-z', poison: 'poisonium-z', ground: 'groundium-z', flying: 'flyinium-z', psychic: 'psychium-z', bug: 'buginium-z',
  rock: 'rockium-z', ghost: 'ghostium-z', dragon: 'dragonium-z', dark: 'darkinium-z', steel: 'steelium-z', fairy: 'fairium-z',
};
const Z_ITEM_TYPE = {};
for (const t of TYPES) {
  const id = Z_CRYSTAL[t];
  Z_ITEM_TYPE[id] = t;
  addItem(id, titleCase(id).replace(/ Z$/, ' Z'), `Permite usar o Movimento Z de ${TYPE_PT[t]} (1x por batalha).`, { z: t });
}

const RESIST_BERRY = {
  normal: 'chilan-berry', fire: 'occa-berry', water: 'passho-berry', electric: 'wacan-berry', grass: 'rindo-berry', ice: 'yache-berry',
  fighting: 'chople-berry', poison: 'kebia-berry', ground: 'shuca-berry', flying: 'coba-berry', psychic: 'payapa-berry', bug: 'tanga-berry',
  rock: 'charti-berry', ghost: 'kasib-berry', dragon: 'haban-berry', dark: 'colbur-berry', steel: 'babiri-berry', fairy: 'roseli-berry',
};
const RESIST_BERRY_TYPE = {};
for (const t of TYPES) {
  const id = RESIST_BERRY[t];
  RESIST_BERRY_TYPE[id] = t;
  addItem(id, titleCase(id), t === 'normal' ? 'Reduz à metade o dano de um golpe Normal (uso único).' : `Reduz à metade o dano de um golpe super efetivo do tipo ${TYPE_PT[t]} (uso único).`, { resist: t });
}

/* ------------------------------ MOVIMENTOS Z ------------------------------ */
const Z_NAME = {
  normal: 'Breakneck Blitz', fire: 'Inferno Overdrive', water: 'Hydro Vortex', electric: 'Gigavolt Havoc', grass: 'Bloom Doom',
  ice: 'Subzero Slammer', fighting: 'All-Out Pummeling', poison: 'Acid Downpour', ground: 'Tectonic Rage', flying: 'Supersonic Skystrike',
  psychic: 'Shattered Psyche', bug: 'Savage Spin-Out', rock: 'Continental Crush', ghost: 'Never-Ending Nightmare', dragon: 'Devastating Drake',
  dark: 'Black Hole Eclipse', steel: 'Corkscrew Crash', fairy: 'Twinkle Tackle',
};
function zPower(bp) {
  if (bp == null) return 100;
  if (bp <= 55) return 100;
  if (bp <= 65) return 120;
  if (bp <= 75) return 140;
  if (bp <= 85) return 160;
  if (bp <= 95) return 175;
  if (bp <= 100) return 180;
  if (bp <= 110) return 185;
  if (bp <= 125) return 190;
  if (bp <= 130) return 195;
  return 200;
}

/* ------------------------------ HABILIDADES ------------------------------ */
// Somente habilidades com efeito implementado têm descrição. As demais aparecem como "sem efeito".
const ABILITY_DESC = {
  'huge-power': 'Dobra o Ataque.', 'pure-power': 'Dobra o Ataque.', guts: 'Ataque x1.5 com status; ignora a queda da queimadura.',
  hustle: 'Ataque físico x1.5 (precisão menor ignorada nesta versão).', technician: 'Golpes de até 60 de poder ficam x1.5.',
  adaptability: 'STAB passa de x1.5 para x2.', 'sheer-force': 'Golpes com efeito secundário +30%, sem o efeito.',
  'iron-fist': 'Golpes de soco +20%.', 'strong-jaw': 'Golpes de mordida +50%.', 'mega-launcher': 'Golpes de pulso/aura +50%.',
  'tough-claws': 'Golpes de contato +30%.', reckless: 'Golpes com recuo +20%.',
  overgrow: 'Planta +50% com HP baixo.', blaze: 'Fogo +50% com HP baixo.', torrent: 'Água +50% com HP baixo.', swarm: 'Inseto +50% com HP baixo.',
  analytic: 'Golpes +30% se agir por último.', 'tinted-lens': 'Golpes pouco efetivos causam o dobro.',
  'solid-rock': 'Reduz dano super efetivo em 25%.', filter: 'Reduz dano super efetivo em 25%.', 'prism-armor': 'Reduz dano super efetivo em 25%.',
  multiscale: 'Metade do dano com HP cheio.', 'shadow-shield': 'Metade do dano com HP cheio.',
  'thick-fat': 'Dano de Fogo/Gelo pela metade.', levitate: 'Imune a Terra.', 'flash-fire': 'Imune a Fogo; ganha poder de Fogo.',
  'water-absorb': 'Absorve Água (cura 1/4).', 'volt-absorb': 'Absorve Elétrico (cura 1/4).', 'dry-skin': 'Absorve Água; Fogo +25%; cura na chuva.',
  'sap-sipper': 'Absorve Planta (+1 Atq).', 'lightning-rod': 'Absorve Elétrico (+1 Atq Esp).', 'storm-drain': 'Absorve Água (+1 Atq Esp).',
  'motor-drive': 'Absorve Elétrico (+1 Vel).', soundproof: 'Imune a golpes de som.', sturdy: 'Sobrevive com 1 HP a um nocaute com HP cheio.',
  'magic-guard': 'Imune a dano indireto.', 'poison-heal': 'Cura 1/8 por turno se envenenado.', 'speed-boost': '+1 Vel a cada turno.',
  moxie: '+1 Atq ao nocautear.', 'beast-boost': '+1 no melhor atributo ao nocautear.', intimidate: 'Reduz o Atq do oponente ao entrar.',
  drizzle: 'Chuva ao entrar.', drought: 'Sol forte ao entrar.', 'sand-stream': 'Tempestade de areia ao entrar.', 'snow-warning': 'Granizo ao entrar.',
  regenerator: 'Cura 1/3 do HP ao sair.', 'natural-cure': 'Cura status ao sair.', static: '30% de paralisar quem tocar.',
  'flame-body': '30% de queimar quem tocar.', 'poison-point': '30% de envenenar quem tocar.', 'effect-spore': '30% de status em quem tocar.',
  'rough-skin': 'Quem tocar perde 1/8 do HP.', 'iron-barbs': 'Quem tocar perde 1/8 do HP.',
  pixilate: 'Golpes Normal viram Fada (+20%).', aerilate: 'Golpes Normal viram Voador (+20%).', refrigerate: 'Golpes Normal viram Gelo (+20%).',
  galvanize: 'Golpes Normal viram Elétrico (+20%).', protean: 'Muda de tipo para o do golpe usado.', libero: 'Muda de tipo para o do golpe usado.',
  unaware: 'Ignora alterações de atributos do alvo.', 'mold-breaker': 'Ignora habilidades defensivas do alvo.',
  'marvel-scale': 'Defesa x1.5 com status.', defiant: '+2 Atq se tiver atributo reduzido por rival.', competitive: '+2 Atq Esp se tiver atributo reduzido por rival.',
  contrary: 'Inverte as mudanças de atributos.', disguise: 'Anula o primeiro golpe recebido.', 'swift-swim': 'Vel x2 na chuva.',
  chlorophyll: 'Vel x2 no sol.', 'sand-rush': 'Vel x2 na areia.', 'slush-rush': 'Vel x2 no granizo.', 'gale-wings': 'Voador ganha prioridade com HP cheio.',
  'serene-grace': 'Dobra a chance de efeitos secundários.', 'compound-eyes': 'Precisão x1.3.', 'no-guard': 'Golpes sempre acertam (os seus e os do rival).',
  sniper: 'Críticos causam ainda mais dano.', 'super-luck': '+1 estágio crítico.', 'weak-armor': 'Golpe físico: -1 Def, +2 Vel.',
  justified: '+1 Atq ao receber golpe Sombrio.', 'water-bubble': 'Golpes de Água x2; imune a queimadura.', 'parental-bond': 'Golpes acertam duas vezes (2º com 25%).',
  truant: 'Só age a cada dois turnos.', 'clear-body': 'Atributos não são reduzidos por rivais.', 'white-smoke': 'Atributos não são reduzidos por rivais.',
  'full-metal-body': 'Atributos não são reduzidos por rivais.', 'hyper-cutter': 'Atq não pode ser reduzido.', 'inner-focus': 'Imune a recuo.',
  limber: 'Imune a paralisia.', insomnia: 'Imune a sono.', 'vital-spirit': 'Imune a sono.', immunity: 'Imune a veneno.', 'water-veil': 'Imune a queimadura.',
  'magma-armor': 'Imune a congelamento.', 'own-tempo': 'Imune a confusão.', synchronize: 'Repassa status recebido ao causador.',
  'battle-armor': 'Imune a críticos.', 'shell-armor': 'Imune a críticos.', 'cloud-nine': 'Anula efeitos de clima.', 'air-lock': 'Anula efeitos de clima.',
  overcoat: 'Imune a dano de clima.', 'sand-force': 'Rocha/Terra/Aço +30% na areia.', 'sand-veil': 'Imune a dano de areia.', 'snow-cloak': 'Imune a dano de granizo.',
  'ice-body': 'Cura 1/16 no granizo.', 'rain-dish': 'Cura 1/16 na chuva.', 'solar-power': 'Atq Esp x1.5 no sol (perde HP).',
  'poison-touch': 'Sem efeito nesta versão.', scrappy: 'Normal/Lutador acertam Fantasma.',
};
const ABILITIES = {};
const allAbilityIds = new Set(Object.keys(ABILITY_DESC));
for (const id of allAbilityIds) ABILITIES[id] = { id, name: titleCase(id), desc: ABILITY_DESC[id] };
function abilityInfo(id) { return ABILITIES[id] || { id, name: titleCase(id), desc: 'Sem efeito implementado nesta versão.' }; }

function itemInfo(id) {
  if (ITEMS[id]) return ITEMS[id];
  if (id && id.startsWith('megastone-')) return { id, name: 'Mega Stone', desc: 'Permite a Mega Evolução (1x por batalha).', mega: id.slice(10) };
  return null;
}

module.exports = { ITEMS, ABILITIES, abilityInfo, itemInfo, titleCase, TYPE_BOOST, BOOST_ITEM_TYPE, Z_CRYSTAL, Z_ITEM_TYPE, RESIST_BERRY, RESIST_BERRY_TYPE, Z_NAME, zPower };
});

__def('engine/battle', function (module, exports, require) {
'use strict';
/**
 * Motor de batalha 1v1 por turnos (autoritativo no servidor).
 * Mecânicas: tipos (Gen 6+), Mega Evolução, Movimento Z, Terastalização, habilidades, itens,
 * status, clima, hazards, telas, prioridade, críticos, multi-hit, drenagem, recuo, pivot, etc.
 */
const { TYPES, effectiveness } = require('./types');
const { calcStats, LEVEL } = require('./stats');
const items = require('./items');
const D = require('../data');

const BSTATS = ['atk', 'def', 'spa', 'spd', 'spe'];
const STAT_PT = { atk: 'Ataque', def: 'Defesa', spa: 'Ataque Esp.', spd: 'Defesa Esp.', spe: 'Velocidade' };
const POWDER = new Set(['sleep-powder', 'spore', 'stun-spore']);
const NORMALIZE = { pixilate: 'fairy', aerilate: 'flying', refrigerate: 'ice', galvanize: 'electric' };
const IGNORE_ABILITY = new Set(['mold-breaker', 'turboblaze', 'teravolt']);
const NO_TRACE = new Set(['trace', 'multiscale', 'disguise', 'shadow-shield']);
const PUNISH_CONTACT = new Set(['static', 'flame-body', 'poison-point', 'effect-spore', 'rough-skin', 'iron-barbs']);
const STRUGGLE = { id: 'struggle', name: 'Struggle', type: 'typeless', cat: 'physical', power: 50, acc: null, pp: 1, prio: 0, flags: ['contact'], special: 'struggle' };
const zero = () => ({ atk: 0, def: 0, spa: 0, spd: 0, spe: 0 });
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------------ */
function makeMon(set, side, idx) {
  const sp = D.species(set.species);
  const stats = calcStats(sp.stats);
  const it = set.item ? items.itemInfo(set.item) : null;
  const mon = {
    side, idx, species: sp.id, name: sp.name, sd: sp.sd, dex: sp.dex, sp,
    types: [...sp.types], baseTypes: [...sp.types], stats, maxHp: stats.hp, hp: stats.hp,
    ability: set.ability, item: set.item || null, origItem: set.item || null,
    moves: set.moves.map((id) => { const m = D.move(id); const pp = Math.floor(m.pp * 1.6); return { id, pp, maxPp: pp }; }),
    tera: set.tera || sp.types[0], teraActive: false,
    mega: false, megaData: it && it.mega ? sp.megas.find((m) => m.id === it.mega) || null : null,
    status: null, sleepTurns: 0, toxCount: 0, boosts: zero(), vol: {}, fainted: false, revealed: false, disguiseBroken: false, nickname: set.nickname || null,
  };
  return mon;
}

class Battle {
  /**
   * @param {Array<{name:string, team:Array}>} players  times já validados
   * @param {{seed?:number, ai?:Object}} opts  ai: { 1: 0..3 } -> nível de IA por lado
   */
  constructor(players, opts = {}) {
    this.rng = opts.seed != null ? mulberry32(opts.seed) : Math.random;
    this.ai = opts.ai || {};
    this.sides = players.map((p, i) => ({
      name: p.name, team: p.team.map((s, k) => makeMon(s, i, k)), active: 0,
      megaUsed: false, zUsed: false, teraUsed: false, conds: { rocks: false, spikes: 0, reflect: 0, lscreen: 0, veil: 0 },
      lastSwitchTurn: -9,
    }));
    this.weather = null; this.weatherTurns = 0;
    this.turn = 0; this.phase = 'init'; this.events = []; this.queue = []; this.pending = new Set(); this.choices = [null, null];
    this.midTurn = false; this.pivotSide = null; this.winner = null; this.over = false; this.suicider = null;
    this.history = [];
  }

  /* ----------------------------- util ----------------------------- */
  rand() { return this.rng(); }
  randInt(a, b) { return a + Math.floor(this.rand() * (b - a + 1)); }
  chance(p) { return this.rand() * 100 < p; }
  emit(ev) { this.events.push(ev); }
  say(text) { this.emit({ t: 'msg', text }); }
  flush() { const e = this.events; this.events = []; return e; }
  act(side) { return this.sides[side].team[this.sides[side].active]; }
  foe(side) { return this.act(1 - side); }
  alive(side) { return this.sides[side].team.filter((m) => !m.fainted); }
  bench(side) { return this.sides[side].team.filter((m) => !m.fainted && m.idx !== this.sides[side].active); }
  nm(mon) { return mon.name; }

  weatherType() {
    for (const s of [0, 1]) { const a = this.act(s); if (a && !a.fainted && (a.ability === 'cloud-nine' || a.ability === 'air-lock')) return null; }
    return this.weather;
  }

  /* ----------------------------- views ----------------------------- */
  view(mon, full) {
    const v = {
      side: mon.side, idx: mon.idx, name: mon.name, species: mon.species, sd: mon.sd, dex: mon.dex, types: [...mon.types],
      hp: mon.hp, maxHp: mon.maxHp, status: mon.status, boosts: { ...mon.boosts }, fainted: mon.fainted,
      mega: mon.mega, teraActive: mon.teraActive, tera: mon.teraActive ? mon.tera : null, confusion: !!mon.vol.confusion,
    };
    if (full) { v.ability = mon.ability; v.item = mon.item; v.teraType = mon.tera; }
    return v;
  }

  snapshot(forSide) {
    return {
      turn: this.turn, phase: this.phase, weather: this.weatherType(), weatherTurns: this.weatherTurns, over: this.over, winner: this.winner,
      sides: this.sides.map((s, i) => ({
        name: s.name, active: s.active, megaUsed: s.megaUsed, zUsed: s.zUsed, teraUsed: s.teraUsed, conds: { ...s.conds },
        team: s.team.map((m) => (i === forSide || m.revealed ? this.view(m, i === forSide) : { idx: m.idx, hidden: true, fainted: m.fainted })),
      })),
    };
  }

  /** Pedido de ação para um jogador. */
  request(side) {
    const s = this.sides[side]; const mon = this.act(side); const foeMon = this.foe(side);
    const req = { side, phase: this.phase, turn: this.turn, wait: !this.pending.has(side), over: this.over };
    req.team = s.team.map((m) => ({ ...this.view(m, true), active: m.idx === s.active, canSwitchTo: !m.fainted && m.idx !== s.active }));
    req.mustSwitch = this.phase === 'switch' && this.pending.has(side);
    if (this.phase === 'turn' && this.pending.has(side) && !mon.fainted) {
      const lock = mon.vol.lock;
      const struggle = !this.usableMoves(mon).length;
      req.struggle = struggle;
      const zItem = mon.item && items.itemInfo(mon.item) && items.itemInfo(mon.item).z;
      req.moves = mon.moves.map((mv, i) => {
        const m = D.move(mv.id);
        const z = !!(zItem && !s.zUsed && m.cat !== 'status' && m.type === zItem);
        return { slot: i, id: m.id, name: m.name, type: m.type, cat: m.cat, power: m.power, acc: m.acc, pp: mv.pp, maxPp: mv.maxPp,
          disabled: !struggle && !this.moveUsable(mon, i), z: z ? { name: items.Z_NAME[m.type], power: items.zPower(m.power) } : null };
      });
      req.canMega = !!(!s.megaUsed && mon.megaData && !mon.mega) ? { name: mon.megaData.name, types: mon.megaData.types } : null;
      req.canTera = !s.teraUsed && !mon.teraActive ? mon.tera : null;
      req.canSwitch = !this.isTrapped(mon) && this.bench(side).length > 0;
      req.lock = lock || null;
      req.foe = this.view(foeMon, false);
    }
    return req;
  }

  /* ----------------------------- escolhas ----------------------------- */
  isGrounded(mon) {
    return !mon.types.includes('flying') && mon.ability !== 'levitate';
  }
  isTrapped(mon) {
    const f = this.foe(mon.side);
    if (!f || f.fainted) return false;
    if (f.ability === 'arena-trap' && this.isGrounded(mon)) return true;
    if (f.ability === 'shadow-tag' && mon.ability !== 'shadow-tag') return true;
    return false;
  }
  moveUsable(mon, slot) {
    const mv = mon.moves[slot]; if (!mv || mv.pp <= 0) return false;
    if (mon.vol.lock && mon.vol.lock !== mv.id) {
      const lm = mon.moves.find((x) => x.id === mon.vol.lock);
      if (lm && lm.pp > 0) return false;
    }
    if (mon.item === 'assault-vest' && D.move(mv.id).cat === 'status') return false;
    return true;
  }
  usableMoves(mon) { return mon.moves.map((_, i) => i).filter((i) => this.moveUsable(mon, i)); }

  validate(side, c) {
    if (!c || typeof c !== 'object') return 'Escolha inválida';
    const mon = this.act(side); const s = this.sides[side];
    if (c.type === 'switch') {
      const to = s.team[c.to];
      if (!to || to.fainted || to.idx === s.active) return 'Pokémon inválido para troca';
      if (this.phase === 'turn' && this.isTrapped(mon)) return `${mon.name} está preso!`;
      return null;
    }
    if (c.type === 'move') {
      if (this.phase !== 'turn') return 'Você precisa trocar de Pokémon';
      if (mon.fainted) return 'Pokémon desmaiado';
      const us = this.usableMoves(mon);
      if (!us.length) return null; // Struggle
      if (!us.includes(c.slot)) return 'Golpe indisponível';
      if (c.mega && (s.megaUsed || !mon.megaData || mon.mega)) return 'Mega Evolução indisponível';
      if (c.tera && (s.teraUsed || mon.teraActive)) return 'Terastalização indisponível';
      if (c.z) {
        const it = mon.item && items.itemInfo(mon.item); const m = D.move(mon.moves[c.slot].id);
        if (s.zUsed || !it || !it.z || m.cat === 'status' || m.type !== it.z) return 'Movimento Z indisponível';
      }
      return null;
    }
    return 'Tipo de escolha desconhecido';
  }

  choose(side, choice) {
    if (this.over) return { ok: false, error: 'Batalha encerrada' };
    if (!this.pending.has(side)) return { ok: false, error: 'Aguardando o outro jogador' };
    const err = this.validate(side, choice);
    if (err) return { ok: false, error: err };
    this.choices[side] = choice; this.pending.delete(side);
    if (this.pending.size === 0) this.advance();
    return { ok: true };
  }

  requestChoices(sides, phase) {
    this.phase = phase; this.pending = new Set(sides); this.choices = [null, null];
    const AI = require('./ai');
    for (const s of sides) {
      if (this.ai[s] != null) {
        const ch = AI.decide(this, s, this.ai[s]);
        this.choices[s] = ch; this.pending.delete(s);
      }
    }
    if (this.pending.size === 0) this.advance();
  }

  /* ----------------------------- fluxo ----------------------------- */
  start() {
    this.phase = 'start';
    for (const s of [0, 1]) this.sides[s].team[0].revealed = true;
    for (const s of [0, 1]) this.emit({ t: 'switch', side: s, mon: this.view(this.act(s), false), first: true });
    const order = [0, 1].sort((a, b) => this.getSpeed(this.act(b)) - this.getSpeed(this.act(a)) || this.rand() - 0.5);
    for (const s of order) this.onEnter(this.act(s), true);
    this.beginTurn();
  }

  beginTurn() {
    if (this.over) return;
    this.turn++;
    this.emit({ t: 'turn', n: this.turn });
    this.requestChoices([0, 1], 'turn');
  }

  advance() {
    if (this.over) return;
    if (this.phase === 'turn') this.processTurn();
    else if (this.phase === 'switch') this.processSwitch();
  }

  processTurn() {
    const acts = [];
    for (const s of [0, 1]) {
      const c = this.choices[s]; const mon = this.act(s);
      if (c.type === 'switch') acts.push({ side: s, kind: 'switch', prio: 7, speed: 0, c });
      else {
        if (c.mega) this.megaEvolve(mon, s);
        const us = this.usableMoves(mon);
        const mv = us.length ? D.move(mon.moves[c.slot].id) : STRUGGLE;
        let prio = mv.prio || 0;
        if (mon.ability === 'gale-wings' && mv.type === 'flying' && mon.hp === mon.maxHp) prio += 1;
        acts.push({ side: s, kind: 'move', prio, speed: this.getSpeed(mon), c, struggle: !us.length });
      }
    }
    acts.sort((a, b) => b.prio - a.prio || b.speed - a.speed || this.rand() - 0.5);
    this.queue = acts;
    for (const s of [0, 1]) { this.act(s).vol.moved = false; this.act(s).vol.hitThisTurn = false; }
    this.runQueue();
  }

  runQueue() {
    while (this.queue.length && !this.over) {
      const a = this.queue.shift(); const mon = this.act(a.side);
      if (a.kind === 'switch') this.doSwitch(a.side, a.c.to, true);
      else {
        if (mon.fainted) continue;
        this.doMove(a);
      }
      if (this.checkOver()) return;
      if (this.pivotSide != null) {
        const ps = this.pivotSide; this.pivotSide = null;
        if (!this.act(ps).fainted && this.bench(ps).length) {
          this.midTurn = true; this.requestChoices([ps], 'switch'); return;
        }
      }
    }
    if (this.over) return;
    this.endOfTurn();
    if (this.checkOver()) return;
    this.afterTurn();
  }

  afterTurn() {
    const need = [0, 1].filter((s) => this.act(s).fainted && this.bench(s).length);
    if (need.length) { this.midTurn = false; this.requestChoices(need, 'switch'); return; }
    this.beginTurn();
  }

  processSwitch() {
    const sides = [0, 1].filter((s) => this.choices[s] && this.choices[s].type === 'switch');
    sides.sort((a, b) => a - b);
    for (const s of sides) this.doSwitch(s, this.choices[s].to, false);
    this.choices = [null, null];
    if (this.checkOver()) return;
    if (this.midTurn) { this.midTurn = false; this.runQueue(); } else this.afterTurn();
  }

  checkOver() {
    if (this.over) return true;
    const dead = [0, 1].map((s) => this.alive(s).length === 0);
    if (dead[0] || dead[1]) {
      let w = null;
      if (dead[0] && dead[1]) w = this.suicider != null ? 1 - this.suicider : null;
      else w = dead[0] ? 1 : 0;
      this.finish(w);
      return true;
    }
    return false;
  }
  finish(w) {
    this.over = true; this.winner = w; this.phase = 'over'; this.pending = new Set();
    this.emit({ t: 'win', side: w });
  }
  forfeit(side) {
    if (this.over) return;
    this.say(`${this.sides[side].name} desistiu da batalha!`);
    this.finish(1 - side);
  }

  /* ----------------------------- stats ----------------------------- */
  stat(mon, k, o = {}) {
    let st = mon.boosts[k] || 0;
    if (o.ignoreNeg && st < 0) st = 0;
    if (o.ignorePos && st > 0) st = 0;
    if (o.ignoreAll) st = 0;
    let v = Math.floor(mon.stats[k] * (st >= 0 ? (2 + st) / 2 : 2 / (2 - st)));
    const w = this.weatherType(); const ab = mon.ability; const it = mon.item;
    if (k === 'atk') {
      if (it === 'choice-band') v = Math.floor(v * 1.5);
      if (ab === 'huge-power' || ab === 'pure-power') v *= 2;
      if (ab === 'guts' && mon.status) v = Math.floor(v * 1.5);
      if (ab === 'hustle') v = Math.floor(v * 1.5);
    } else if (k === 'spa') {
      if (it === 'choice-specs') v = Math.floor(v * 1.5);
      if (ab === 'solar-power' && w === 'sun') v = Math.floor(v * 1.5);
    } else if (k === 'def') {
      if (ab === 'marvel-scale' && mon.status) v = Math.floor(v * 1.5);
    } else if (k === 'spd') {
      if (it === 'assault-vest') v = Math.floor(v * 1.5);
      if (w === 'sand' && mon.types.includes('rock')) v = Math.floor(v * 1.5);
    } else if (k === 'spe') {
      if (it === 'choice-scarf') v = Math.floor(v * 1.5);
      if (mon.status === 'par') v = Math.floor(v * 0.5);
      if ((ab === 'swift-swim' && w === 'rain') || (ab === 'chlorophyll' && w === 'sun') || (ab === 'sand-rush' && w === 'sand') || (ab === 'slush-rush' && w === 'hail')) v *= 2;
    }
    return Math.max(1, v);
  }
  getSpeed(mon) { return this.stat(mon, 'spe'); }

  /* ----------------------------- boosts / status ----------------------------- */
  applyBoost(mon, stat, n, o = {}) {
    if (mon.fainted) return false;
    if (mon.ability === 'contrary') n = -n;
    if (n < 0 && !o.self) {
      if (['clear-body', 'white-smoke', 'full-metal-body'].includes(mon.ability) && !o.ignoreAbility) { this.say(`${mon.name} não teve ${STAT_PT[stat]} reduzido!`); return false; }
      if (mon.ability === 'hyper-cutter' && stat === 'atk' && !o.ignoreAbility) { this.say(`${mon.name} não teve ${STAT_PT[stat]} reduzido!`); return false; }
      if (mon.ability === 'inner-focus' && o.intimidate) { this.say(`${mon.name} não é afetado por Intimidate!`); return false; }
    }
    const cur = mon.boosts[stat]; const next = clamp(cur + n, -6, 6);
    if (next === cur) { this.say(`${STAT_PT[stat]} de ${mon.name} não pode ${n > 0 ? 'subir' : 'cair'} mais!`); return false; }
    mon.boosts[stat] = next;
    this.emit({ t: 'boost', side: mon.side, stat, amount: next - cur, stages: next });
    const mag = Math.abs(next - cur);
    this.say(`${STAT_PT[stat]} de ${mon.name} ${n > 0 ? (mag >= 2 ? 'subiu bastante' : 'subiu') : (mag >= 2 ? 'caiu bastante' : 'caiu')}!`);
    if (n < 0 && !o.self) {
      if (mon.ability === 'defiant') this.applyBoost(mon, 'atk', 2, { self: true });
      if (mon.ability === 'competitive') this.applyBoost(mon, 'spa', 2, { self: true });
    }
    return true;
  }

  inflict(mon, status, src, o = {}) {
    if (mon.fainted || mon.status) { if (o.verbose) this.say(`Mas falhou!`); return false; }
    const t = mon.types;
    if (status === 'par' && t.includes('electric')) return this.immuneMsg(mon, o);
    if (status === 'brn' && t.includes('fire')) return this.immuneMsg(mon, o);
    if ((status === 'psn' || status === 'tox') && (t.includes('poison') || t.includes('steel')) && !(src && src.ability === 'corrosion')) return this.immuneMsg(mon, o);
    if (status === 'frz' && (t.includes('ice') || this.weatherType() === 'sun')) return this.immuneMsg(mon, o);
    const ab = mon.ability;
    if ((status === 'par' && ab === 'limber') || (status === 'slp' && (ab === 'insomnia' || ab === 'vital-spirit')) ||
      ((status === 'psn' || status === 'tox') && ab === 'immunity') || (status === 'brn' && (ab === 'water-veil' || ab === 'water-bubble')) || (status === 'frz' && ab === 'magma-armor')) return this.immuneMsg(mon, o);
    mon.status = status; mon.sleepTurns = status === 'slp' ? this.randInt(1, 3) : 0; mon.toxCount = status === 'tox' ? 1 : 0;
    this.emit({ t: 'status', side: mon.side, status });
    const txt = { brn: 'foi queimado', par: 'foi paralisado (pode não conseguir atacar)', psn: 'foi envenenado', tox: 'foi gravemente envenenado', slp: 'dormiu', frz: 'foi congelado' }[status];
    this.say(`${mon.name} ${txt}!`);
    if (mon.ability === 'synchronize' && src && src !== mon && ['brn', 'par', 'psn', 'tox'].includes(status)) this.inflict(src, status === 'tox' ? 'psn' : status, mon);
    this.checkItems(mon);
    return true;
  }
  immuneMsg(mon, o) { if (o.verbose) this.say(`Não afeta ${mon.name}...`); return false; }
  cure(mon) { if (!mon.status) return; mon.status = null; mon.toxCount = 0; mon.sleepTurns = 0; this.emit({ t: 'status', side: mon.side, status: null }); }
  confuse(mon) {
    if (mon.fainted || mon.vol.confusion || mon.ability === 'own-tempo') return false;
    mon.vol.confusion = this.randInt(2, 5); this.emit({ t: 'confuse', side: mon.side }); this.say(`${mon.name} ficou confuso!`); return true;
  }

  /* ----------------------------- hp ----------------------------- */
  setHp(mon, hp, meta = {}) {
    hp = clamp(hp, 0, mon.maxHp); const d = hp - mon.hp; mon.hp = hp;
    this.emit({ t: d < 0 ? 'damage' : 'heal', side: mon.side, hp, maxHp: mon.maxHp, amount: Math.abs(d), ...meta });
  }
  heal(mon, amt, msg) {
    if (mon.fainted || mon.hp >= mon.maxHp || amt <= 0) return 0;
    const before = mon.hp; this.setHp(mon, mon.hp + amt);
    if (msg) this.say(msg);
    return mon.hp - before;
  }
  indirect(mon, amt, msg) {
    if (mon.fainted || mon.ability === 'magic-guard') return;
    amt = Math.max(1, Math.floor(amt));
    this.setHp(mon, mon.hp - amt, { indirect: true });
    if (msg) this.say(msg);
    if (mon.hp <= 0) this.faint(mon);
    else this.checkItems(mon);
  }
  faint(mon) {
    if (mon.fainted) return;
    mon.fainted = true; mon.hp = 0; mon.vol = {};
    this.emit({ t: 'faint', side: mon.side });
    this.say(`${mon.name} desmaiou!`);
  }

  checkItems(mon) {
    if (mon.fainted || !mon.item) return;
    if (mon.item === 'sitrus-berry' && mon.hp <= mon.maxHp / 2) { this.consume(mon); this.heal(mon, Math.floor(mon.maxHp / 4), `${mon.name} comeu a Sitrus Berry e recuperou HP!`); }
    else if (mon.item === 'lum-berry' && (mon.status || mon.vol.confusion)) { this.consume(mon); this.cure(mon); mon.vol.confusion = 0; this.say(`${mon.name} comeu a Lum Berry e se curou!`); }
  }
  consume(mon) { const it = mon.item; mon.item = null; this.emit({ t: 'itemlost', side: mon.side, item: it }); }

  /* ----------------------------- troca / entrada ----------------------------- */
  doSwitch(side, to, voluntary) {
    const s = this.sides[side]; const old = this.act(side);
    if (!old.fainted) {
      this.say(`${s.name} recolheu ${old.name}!`);
      if (old.ability === 'regenerator') this.heal(old, Math.floor(old.maxHp / 3));
      if (old.ability === 'natural-cure') this.cure(old);
      if (old.mega || old.teraActive) { /* forma permanece */ }
    }
    old.boosts = zero(); old.vol = {}; old.toxCount = old.status === 'tox' ? 1 : 0;
    s.active = to; s.lastSwitchTurn = this.turn;
    const mon = this.act(side); mon.revealed = true; mon.vol = {};
    this.emit({ t: 'switch', side, mon: this.view(mon, false) });
    this.say(`${s.name} enviou ${mon.name}!`);
    this.onEnter(mon, false);
  }

  onEnter(mon, initial) {
    const s = this.sides[mon.side]; const c = s.conds;
    mon.vol.fresh = true;
    if (!initial || true) {
      if (mon.item !== 'heavy-duty-boots') {
        if (c.rocks) {
          const eff = effectiveness('rock', mon.types);
          this.indirect(mon, mon.maxHp * eff / 8, `Pedras pontiagudas feriram ${mon.name}!`);
        }
        if (c.spikes && this.isGrounded(mon) && !mon.fainted) {
          this.indirect(mon, mon.maxHp / [0, 8, 6, 4][c.spikes], `${mon.name} foi ferido pelos espinhos!`);
        }
      }
    }
    if (mon.fainted) return;
    this.entryAbility(mon);
  }

  entryAbility(mon) {
    const ab = mon.ability; const foe = this.foe(mon.side);
    const wx = { drizzle: ['rain', 'damp-rock'], drought: ['sun', 'heat-rock'], 'sand-stream': ['sand', 'smooth-rock'], 'snow-warning': ['hail', 'icy-rock'] };
    if (wx[ab]) this.setWeather(wx[ab][0], mon.item === wx[ab][1] ? 8 : 5, mon);
    if (ab === 'intimidate' && foe && !foe.fainted) { this.say(`Intimidate de ${mon.name} assustou ${foe.name}!`); this.applyBoost(foe, 'atk', -1, { intimidate: true }); }
    if (ab === 'trace' && foe && !foe.fainted && !NO_TRACE.has(foe.ability)) { mon.ability = foe.ability; this.say(`${mon.name} copiou ${items.abilityInfo(foe.ability).name}!`); this.entryAbility(mon); }
  }

  setWeather(w, turns, src) {
    if (this.weather === w) return;
    this.weather = w; this.weatherTurns = turns;
    this.emit({ t: 'weather', weather: w });
    this.say({ rain: 'Começou a chover!', sun: 'O sol ficou forte!', sand: 'Uma tempestade de areia começou!', hail: 'Começou a chover granizo!' }[w]);
  }

  /* ----------------------------- Mega / Tera / Z ----------------------------- */
  megaEvolve(mon, side) {
    const s = this.sides[side]; const m = mon.megaData;
    if (!m || s.megaUsed || mon.mega) return;
    s.megaUsed = true; mon.mega = true;
    this.say(`${mon.name} reage à Mega Stone!`);
    const ratio = mon.hp / mon.maxHp;
    const ns = calcStats(m.stats);
    mon.stats = ns; mon.maxHp = ns.hp; mon.hp = Math.max(1, Math.round(ratio * ns.hp));
    mon.types = [...m.types]; mon.baseTypes = [...m.types]; mon.ability = m.ability; mon.name = m.name; mon.sd = m.sd; mon.megaForm = m.id;
    this.emit({ t: 'mega', side, name: m.name, sd: m.sd, types: mon.types, hp: mon.hp, maxHp: mon.maxHp, ability: items.abilityInfo(m.ability).name });
    this.say(`${m.name} fez a Mega Evolução!`);
    this.entryAbility(mon);
  }

  terastallize(mon, side) {
    const s = this.sides[side];
    if (s.teraUsed || mon.teraActive) return;
    s.teraUsed = true; mon.teraActive = true; mon.types = [mon.tera];
    this.emit({ t: 'tera', side, type: mon.tera });
    this.say(`${mon.name} Terastalizou no tipo ${mon.tera.toUpperCase()}!`);
  }

  /* ----------------------------- dano ----------------------------- */
  moveType(att, mv) {
    if (mv.type === 'normal' && NORMALIZE[att.ability] && mv.special !== 'struggle') return NORMALIZE[att.ability];
    return mv.type;
  }
  typeEff(att, def, mv, type) {
    let types = def.types;
    if (mv.special === 'freezedry') {
      let m = 1; for (const d of types) m *= d === 'water' ? 2 : effectiveness('ice', [d]); return m;
    }
    if (att.ability === 'scrappy' && (type === 'normal' || type === 'fighting')) types = types.filter((t) => t !== 'ghost');
    return effectiveness(type, types);
  }
  isImmuneByAbility(att, def, mv, type) {
    if (att && IGNORE_ABILITY.has(att.ability)) return null;
    const ab = def.ability;
    if (ab === 'levitate' && type === 'ground') return 'levitate';
    if (ab === 'flash-fire' && type === 'fire') return 'flashfire';
    if ((ab === 'water-absorb' || ab === 'storm-drain' || ab === 'dry-skin') && type === 'water') return 'absorb-water';
    if ((ab === 'volt-absorb' || ab === 'lightning-rod' || ab === 'motor-drive') && type === 'electric') return 'absorb-elec';
    if (ab === 'sap-sipper' && type === 'grass') return 'sapsipper';
    if (ab === 'soundproof' && mv.flags && mv.flags.includes('sound')) return 'sound';
    return null;
  }
  basePower(att, def, mv) {
    let p = mv.power || 0;
    switch (mv.special) {
      case 'eruption': p = Math.max(1, Math.floor(150 * att.hp / att.maxHp)); break;
      case 'gyro': p = Math.min(150, Math.floor(25 * this.getSpeed(def) / this.getSpeed(att)) + 1); break;
      case 'stored': p = 20 + 20 * BSTATS.reduce((a, k) => a + Math.max(0, att.boosts[k]), 0); break;
      case 'hex': if (def.status) p *= 2; break;
      case 'venoshock': if (def.status === 'psn' || def.status === 'tox') p *= 2; break;
      case 'facade': if (att.status && att.status !== 'slp' && att.status !== 'frz') p *= 2; break;
      case 'knock': if (def.item) p = Math.floor(p * 1.5); break;
      case 'acro': if (!att.item) p *= 2; break;
      default: break;
    }
    if (att.teraActive && mv.type === att.tera && p > 0 && p < 60 && !mv.hits && !mv.z && mv.prio <= 0) p = 60;
    return p;
  }

  /**
   * Cálculo puro de dano. o: { crit, roll (0.85..1), z, ignoreAbility, hitMod }
   */
  calcDamage(att, def, mv, o = {}) {
    const type = o.type || this.moveType(att, mv);
    const eff = this.typeEff(att, def, mv, type);
    if (eff === 0) return { dmg: 0, eff: 0, type };
    if (mv.fixed != null) {
      let d = mv.fixed === 'level' ? LEVEL : mv.fixed === 'half' ? Math.max(1, Math.floor(def.hp / 2)) : mv.fixed;
      return { dmg: d, eff, type, fixed: true };
    }
    let power = o.power != null ? o.power : this.basePower(att, def, mv);
    const ab = att.ability; const it = att.item; const flags = mv.flags || [];
    const hasSecondary = !!((mv.status && mv.status.chance < 100) || mv.flinch || (mv.boosts && mv.boosts.chance < 100));
    if (!o.z) {
      if (ab === 'technician' && power <= 60) power *= 1.5;
      if (ab === 'iron-fist' && flags.includes('punch')) power *= 1.2;
      if (ab === 'strong-jaw' && flags.includes('bite')) power *= 1.5;
      if (ab === 'mega-launcher' && flags.includes('pulse')) power *= 1.5;
      if (ab === 'tough-claws' && flags.includes('contact')) power *= 1.3;
      if (ab === 'reckless' && mv.recoil) power *= 1.2;
      if (ab === 'sheer-force' && hasSecondary) power *= 1.3;
      if (ab === 'analytic' && def.vol.moved) power *= 1.3;
      if (ab === 'water-bubble' && type === 'water') power *= 2;
      if (NORMALIZE[ab] && mv.type === 'normal') power *= 1.2;
      if (ab === 'sand-force' && this.weatherType() === 'sand' && ['rock', 'ground', 'steel'].includes(type)) power *= 1.3;
    }
    const pinch = att.hp <= att.maxHp / 3;
    if (pinch && ((ab === 'overgrow' && type === 'grass') || (ab === 'blaze' && type === 'fire') || (ab === 'torrent' && type === 'water') || (ab === 'swarm' && type === 'bug'))) power *= 1.5;
    if (ab === 'flash-fire' && att.vol.flashFire && type === 'fire') power *= 1.5;
    if (def.ability === 'dry-skin' && type === 'fire') power *= 1.25;
    for (const s of [0, 1]) { const a = this.act(s); if (a && !a.fainted) { if (a.ability === 'fairy-aura' && type === 'fairy') power *= 4 / 3; if (a.ability === 'dark-aura' && type === 'dark') power *= 4 / 3; } }
    if (it && items.BOOST_ITEM_TYPE[it] === type) power *= 1.2;
    if (it === 'muscle-band' && mv.cat === 'physical') power *= 1.1;
    if (it === 'wise-glasses' && mv.cat === 'special') power *= 1.1;
    power = Math.max(1, Math.floor(power));

    const phys = mv.cat === 'physical';
    const ignoreAb = IGNORE_ABILITY.has(att.ability);
    const aMon = mv.special === 'foul' ? def : att;
    const aKey = phys ? 'atk' : 'spa';
    const dKey = (phys || mv.special === 'psyshock') ? 'def' : 'spd';
    const A = this.stat(aMon, aKey, { ignoreNeg: o.crit, ignoreAll: def.ability === 'unaware' && !ignoreAb });
    const Dd = this.stat(def, dKey, { ignorePos: o.crit, ignoreAll: att.ability === 'unaware' });
    let dmg = Math.floor(Math.floor(Math.floor((2 * LEVEL) / 5 + 2) * power * A / Dd) / 50) + 2;

    const w = this.weatherType();
    if (w === 'rain') { if (type === 'water') dmg = Math.floor(dmg * 1.5); else if (type === 'fire') dmg = Math.floor(dmg * 0.5); }
    else if (w === 'sun') { if (type === 'fire') dmg = Math.floor(dmg * 1.5); else if (type === 'water') dmg = Math.floor(dmg * 0.5); }
    if (o.hitMod) dmg = Math.floor(dmg * o.hitMod);
    if (o.crit) dmg = Math.floor(dmg * (att.ability === 'sniper' ? 2.25 : 1.5));
    dmg = Math.floor(dmg * (o.roll != null ? o.roll : 1));

    // STAB
    let stab = 1;
    if (att.teraActive) {
      if (type === att.tera) stab = att.baseTypes.includes(type) ? 2 : 1.5;
      else if (att.baseTypes.includes(type)) stab = 1.5;
    } else if (att.types.includes(type)) stab = 1.5;
    if (ab === 'adaptability' && stab >= 1.5) stab = stab === 2 ? 2.25 : 2;
    dmg = Math.floor(dmg * stab);
    dmg = Math.floor(dmg * eff);
    if (phys && att.status === 'brn' && ab !== 'guts' && mv.special !== 'facade') dmg = Math.floor(dmg * 0.5);

    if (!o.crit && !(att.ability === 'infiltrator')) {
      const c = this.sides[def.side].conds;
      if (c.veil > 0 || (phys && c.reflect > 0) || (!phys && c.lscreen > 0)) dmg = Math.floor(dmg * 0.5);
    }
    if (!ignoreAb) {
      const dab = def.ability;
      if ((dab === 'multiscale' || dab === 'shadow-shield') && def.hp === def.maxHp) dmg = Math.floor(dmg * 0.5);
      if (['solid-rock', 'filter', 'prism-armor'].includes(dab) && eff > 1) dmg = Math.floor(dmg * 0.75);
      if (dab === 'thick-fat' && (type === 'fire' || type === 'ice')) dmg = Math.floor(dmg * 0.5);
    }
    if (ab === 'tinted-lens' && eff < 1) dmg *= 2;
    if (it === 'expert-belt' && eff > 1) dmg = Math.floor(dmg * 1.2);
    if (it === 'life-orb') dmg = Math.floor(dmg * 1.3);
    if (o.z && o.protectedHit) dmg = Math.floor(dmg * 0.25);
    return { dmg: Math.max(1, dmg), eff, type };
  }

  /** Estimativa determinística para a IA (dano médio, sem crítico). */
  estimate(att, def, mvId, o = {}) {
    const mv = mvId === 'struggle' ? STRUGGLE : D.move(mvId);
    if (!mv || mv.cat === 'status') return 0;
    const type = this.moveType(att, mv);
    if (this.isImmuneByAbility(att, def, mv, type)) return 0;
    let m = mv;
    if (o.z) m = { ...mv, power: items.zPower(mv.power), z: true, hits: null, special: null, fixed: null };
    const r = this.calcDamage(att, def, m, { roll: 0.925, z: o.z });
    let d = r.dmg;
    if (mv.hits) d *= mv.hits[0] === mv.hits[1] ? mv.hits[0] : (att.ability === 'skill-link' ? 5 : 3.1);
    if (mv.acc && !o.z) d *= Math.min(1, mv.acc / 100);
    if (mv.special === 'recharge') d *= 0.6;
    return Math.min(d, def.hp * 1.5);
  }

  accuracyOk(att, def, mv) {
    if (mv.acc == null) return true;
    if (att.ability === 'no-guard' || def.ability === 'no-guard') return true;
    const w = this.weatherType();
    if (w === 'rain' && (mv.id === 'thunder' || mv.id === 'hurricane')) return true;
    if (w === 'hail' && mv.id === 'blizzard') return true;
    let acc = mv.acc;
    if (w === 'sun' && (mv.id === 'thunder' || mv.id === 'hurricane')) acc = 50;
    if (att.ability === 'compound-eyes') acc *= 1.3;
    if (att.ability === 'hustle' && mv.cat === 'physical') acc *= 0.8;
    if (!IGNORE_ABILITY.has(att.ability)) {
      if (def.ability === 'sand-veil' && w === 'sand') acc *= 0.8;
      if (def.ability === 'snow-cloak' && w === 'hail') acc *= 0.8;
    }
    return this.rand() * 100 < acc;
  }

  critStage(att, mv) {
    let st = (mv.crit || 0) + (att.ability === 'super-luck' ? 1 : 0) + (att.item === 'scope-lens' || att.item === 'razor-claw' ? 1 : 0);
    return st;
  }

  /* ----------------------------- execução de golpe ----------------------------- */
  canAct(mon, side) {
    const v = mon.vol;
    if (v.recharge) { v.recharge = false; this.say(`${mon.name} precisa recuperar o fôlego!`); this.emit({ t: 'cant', side }); return false; }
    if (mon.ability === 'truant') { if (v.loafing) { v.loafing = false; this.say(`${mon.name} está preguiçoso!`); return false; } }
    if (mon.status === 'slp') {
      if (mon.sleepTurns > 0) { mon.sleepTurns--; this.say(`${mon.name} está dormindo profundamente.`); this.emit({ t: 'cant', side, why: 'slp' }); return false; }
      this.cure(mon); this.say(`${mon.name} acordou!`);
    }
    if (mon.status === 'frz') {
      if (this.chance(20)) { this.cure(mon); this.say(`${mon.name} descongelou!`); }
      else { this.say(`${mon.name} está congelado!`); this.emit({ t: 'cant', side, why: 'frz' }); return false; }
    }
    if (v.flinch) { v.flinch = false; this.say(`${mon.name} recuou e não conseguiu se mover!`); this.emit({ t: 'cant', side }); return false; }
    if (v.confusion) {
      v.confusion--;
      if (v.confusion <= 0) { v.confusion = 0; this.say(`${mon.name} não está mais confuso!`); }
      else {
        this.say(`${mon.name} está confuso!`);
        if (this.chance(33)) {
          this.say('Ele se machucou na confusão!');
          const r = this.calcDamage(mon, mon, { type: 'typeless', cat: 'physical', power: 40, special: null, flags: [] }, { roll: this.randInt(85, 100) / 100, type: 'typeless' });
          this.setHp(mon, mon.hp - r.dmg, { confusion: true });
          if (mon.hp <= 0) this.faint(mon);
          return false;
        }
      }
    }
    if (mon.status === 'par' && this.chance(25)) { this.say(`${mon.name} está paralisado! Não consegue se mover!`); this.emit({ t: 'cant', side, why: 'par' }); return false; }
    return true;
  }

  doMove(a) {
    const side = a.side; const att = this.act(side); const s = this.sides[side];
    const c = a.c;
    if (!this.canAct(att, side)) { att.vol.moved = true; return; }
    if (att.ability === 'truant') att.vol.loafing = true;
    let mv; let slotObj = null;
    if (a.struggle) mv = STRUGGLE;
    else { slotObj = att.moves[c.slot]; mv = D.move(slotObj.id); }
    if (c.tera && !att.teraActive) this.terastallize(att, side);
    let m = mv;
    if (c.z && !s.zUsed && !a.struggle) {
      const it = att.item && items.itemInfo(att.item);
      if (it && it.z && mv.cat !== 'status' && mv.type === it.z) {
        s.zUsed = true; const zt = mv.type;
        m = { ...mv, name: items.Z_NAME[zt], power: items.zPower(mv.power), acc: null, z: true, hits: null, special: mv.special === 'eruption' ? null : null, fixed: null, drain: null, recoil: null, status: null, flinch: null, boosts: null, flags: [], crit: 0 };
        this.emit({ t: 'zpower', side, type: zt, item: it.name });
        this.say(`${att.name} concentrou o poder Z!`);
        this.consume(att);
      }
    }
    if (slotObj) { slotObj.pp--; att.vol.lock = (att.item && att.item.startsWith('choice-')) ? slotObj.id : att.vol.lock; }
    att.vol.moved = true;
    if (a.struggle) att.vol.lock = null;
    const type = this.moveType(att, m);
    if (att.ability === 'protean' || att.ability === 'libero') { if (!(att.types.length === 1 && att.types[0] === type) && !att.teraActive && type !== 'typeless') { att.types = [type]; this.emit({ t: 'typechange', side, types: [type] }); this.say(`${att.name} mudou para o tipo ${type.toUpperCase()}!`); } }
    this.emit({ t: 'move', side, name: m.name, id: m.id, type, cat: m.cat, z: !!m.z });
    this.say(`${att.name} usou ${m.name}!`);
    if (m.id !== 'protect') att.vol.protectCount = 0;
    this.execMove(att, m, side, type);
  }

  isFoeTargeted(m) {
    if (m.cat !== 'status') return true;
    if (m.boosts && m.boosts.target === 'self') return false;
    if (m.heal || m.weather) return false;
    if (['reflect', 'lscreen', 'veil', 'spikes', 'rocks', 'prot', 'belly', 'rest'].includes(m.special)) return false;
    return true;
  }

  execMove(att, m, side, type) {
    const def = this.foe(side); const defSide = 1 - side;
    const foeT = this.isFoeTargeted(m);
    // casos de falha
    if (m.special === 'fakeout' && !att.vol.fresh) return this.fail();
    if (m.special === 'fakeout' || true) att.vol.fresh = false;
    if (m.special === 'sucker' && (def.vol.moved || !this.willAttack(defSide))) return this.fail();
    if (m.special === 'polter' && !def.item) return this.fail(`${def.name} não tem item!`);
    if (m.special === 'rest' && (att.hp === att.maxHp || att.status === 'slp')) return this.fail();
    if (m.special === 'belly' && att.hp <= att.maxHp / 2) return this.fail();

    if (foeT) {
      if (def.fainted) return this.fail();
      if (def.vol.protected) {
        if (m.z) { /* Z atravessa com 1/4 do dano */ this.say(`${def.name} se protegeu, mas o poder Z atravessou!`); }
        else { this.say(`${def.name} se protegeu!`); this.emit({ t: 'blocked', side: defSide }); if (m.special === 'crash') this.crashDamage(att); return; }
      }
      if (m.cat === 'status' && def.ability === 'magic-bounce' && !IGNORE_ABILITY.has(att.ability) && !['force'].includes(m.special)) {
        this.say(`${def.name} refletiu ${m.name}!`); return this.statusMove(def, att, m, defSide, type);
      }
    }
    if (m.cat === 'status') return this.statusMove(att, def, m, side, type);

    // acurácia
    if (!this.accuracyOk(att, def, m)) {
      this.say(`O ataque de ${att.name} errou!`); this.emit({ t: 'miss', side: defSide });
      if (m.special === 'crash') this.crashDamage(att);
      return;
    }
    // habilidade de imunidade
    const imm = this.isImmuneByAbility(att, def, m, type);
    if (imm) return this.abilityImmune(def, imm, type);
    if (this.typeEff(att, def, m, type) === 0) { this.say(`Não afeta ${def.name}...`); this.emit({ t: 'eff', side: defSide, v: 0 }); return; }
    if (POWDER.has(m.id) && def.types.includes('grass')) { this.say(`Não afeta ${def.name}...`); return; }

    // quantidade de golpes
    let hits = 1; const hitMods = [];
    if (m.hits) {
      if (m.hits[0] === m.hits[1]) hits = m.hits[0];
      else if (att.ability === 'skill-link') hits = 5;
      else { const r = this.rand(); hits = r < 0.35 ? 2 : r < 0.7 ? 3 : r < 0.85 ? 4 : 5; }
    } else if (att.ability === 'parental-bond' && !m.z && m.special !== 'struggle' && !['boom', 'recharge'].includes(m.special)) { hits = 2; hitMods.push(1, 0.25); }

    let totalDmg = 0; let done = 0; let lastEff = 1; let anyCrit = false;
    for (let h = 0; h < hits; h++) {
      if (def.fainted) break;
      const cs = this.critStage(att, m);
      const crit = !(def.ability === 'battle-armor' || def.ability === 'shell-armor') && (cs >= 3 || this.rand() < [1 / 24, 1 / 8, 1 / 2][cs]);
      const roll = this.randInt(85, 100) / 100;
      const r = this.calcDamage(att, def, m, { crit, roll, z: m.z, protectedHit: m.z && def.vol.protected, hitMod: hitMods[h] != null ? hitMods[h] : 1 });
      let dmg = r.dmg; lastEff = r.eff;
      if (m.special === 'struggle') dmg = Math.max(1, dmg);
      const dealt = this.hit(att, def, dmg, m, { crit, eff: r.eff, first: h === 0, last: h === hits - 1 || def.hp <= dmg });
      totalDmg += dealt; done++;
      if (crit && dealt > 0) anyCrit = true;
      if (att.fainted) break;
    }
    if (hits > 1) this.say(`Acertou ${done} vez(es)!`);
    if (def.vol.hitFx) { /* reservado */ }

    // efeitos pós-acerto
    const sf = att.ability === 'sheer-force';
    const serene = att.ability === 'serene-grace' ? 2 : 1;
    if (totalDmg > 0 && !att.fainted) {
      if (m.drain) {
        const base = Math.floor(totalDmg * m.drain / 100);
        const amt = att.item === 'big-root' ? Math.floor(base * 1.3) : base;
        if (def.ability === 'liquid-ooze') { this.indirect(att, amt, `${att.name} sugou lodo líquido!`); }
        else this.heal(att, Math.max(1, amt), `${att.name} drenou energia de ${def.name}!`);
      }
      if (m.recoil && att.ability !== 'rock-head' && att.ability !== 'magic-guard') this.indirect(att, totalDmg * m.recoil / 100, `${att.name} sofreu com o recuo!`);
      if (m.special === 'struggle') this.indirect(att, att.maxHp / 4, `${att.name} sofreu com o recuo!`);
      if (att.item === 'life-orb' && !att.fainted) this.indirect(att, att.maxHp / 10, `${att.name} perdeu HP por causa da Life Orb!`);
      if (att.item === 'shell-bell' && !att.fainted) this.heal(att, Math.max(1, Math.floor(totalDmg / 8)));
      if (anyCrit) { /* mensagem já emitida */ }
    }
    if (!sf && !m.z) {
      if (m.boosts && m.boosts.target === 'self' && !att.fainted) {
        if (this.chance(m.boosts.chance * serene)) for (const [k, n] of Object.entries(m.boosts.stats)) this.applyBoost(att, k, n, { self: true });
      }
      if (!def.fainted && totalDmg > 0) {
        if (m.boosts && m.boosts.target === 'foe' && this.chance(m.boosts.chance * serene)) for (const [k, n] of Object.entries(m.boosts.stats)) this.applyBoost(def, k, n, { ignoreAbility: IGNORE_ABILITY.has(att.ability) });
        if (m.status && this.chance(m.status.chance * serene)) {
          if (m.status.s === 'cnf') this.confuse(def); else if (!(def.ability === 'shield-dust')) this.inflict(def, m.status.s, att);
        }
        if (m.flinch && !def.vol.moved && this.chance(m.flinch * serene) && def.ability !== 'inner-focus') def.vol.flinch = true;
        if (att.item === 'kings-rock' && !def.vol.moved && this.chance(10)) def.vol.flinch = true;
        if (m.special === 'tri' && this.chance(20)) this.inflict(def, ['brn', 'par', 'frz'][this.randInt(0, 2)], att);
        if (m.special === 'knock' && def.item) { this.say(`${att.name} derrubou ${def.name === '' ? '' : items.itemInfo(def.item).name} de ${def.name}!`); this.consume(def); }
      }
    }
    if (def.fainted && !att.fainted) {
      if (att.ability === 'moxie') this.applyBoost(att, 'atk', 1, { self: true });
      if (att.ability === 'beast-boost') { const best = BSTATS.filter((k) => k !== 'spe' || true).sort((x, y) => att.stats[y] - att.stats[x])[0]; this.applyBoost(att, best, 1, { self: true }); }
    }
    if (m.special === 'boom') { this.suicider = side; if (!att.fainted) { this.setHp(att, 0); this.faint(att); } }
    if (m.special === 'recharge' && !def.fainted) att.vol.recharge = true;
    if (m.special === 'spin' && !att.fainted) { const c = this.sides[side].conds; if (c.rocks || c.spikes) { c.rocks = false; c.spikes = 0; this.emit({ t: 'field', side, conds: { ...c } }); this.say('As armadilhas foram removidas!'); } }
    if (m.special === 'force' && !def.fainted && !att.fainted) this.forceSwitch(defSide);
    if (m.special === 'pivot' && !att.fainted) this.pivotSide = side;
  }

  hit(att, def, dmg, m, o) {
    // Disguise
    if (def.ability === 'disguise' && !def.disguiseBroken && !IGNORE_ABILITY.has(att.ability)) {
      def.disguiseBroken = true; this.emit({ t: 'disguise', side: def.side });
      this.say(`O disfarce de ${def.name} o protegeu!`);
      this.setHp(def, def.hp - Math.floor(def.maxHp / 8), { indirect: true }); return 0;
    }
    const wasFull = def.hp === def.maxHp;
    if (dmg >= def.hp) {
      if (wasFull && def.ability === 'sturdy' && !IGNORE_ABILITY.has(att.ability)) { dmg = def.hp - 1; this.say(`${def.name} resistiu graças a Sturdy!`); }
      else if (wasFull && def.item === 'focus-sash') { dmg = def.hp - 1; this.consume(def); this.say(`${def.name} se segurou com a Focus Sash!`); }
    }
    // baga resistente
    if (def.item && items.RESIST_BERRY_TYPE[def.item] === o.__t) { /* substituída abaixo */ }
    const type = this.moveType(att, m);
    if (def.item && items.RESIST_BERRY_TYPE[def.item] === type && (o.eff > 1 || type === 'normal') && m.fixed == null) {
      dmg = Math.floor(dmg / 2); this.say(`${def.name} comeu a ${items.itemInfo(def.item).name} e reduziu o dano!`); this.consume(def);
    }
    dmg = Math.max(1, Math.min(dmg, def.hp));
    this.setHp(def, def.hp - dmg, { hit: true, crit: o.crit, eff: o.eff, type, z: !!m.z });
    if (o.crit) this.say('Um golpe crítico!');
    if (o.first || o.last) {
      if (o.eff > 1) { this.say('É super efetivo!'); this.emit({ t: 'eff', side: def.side, v: 2 }); }
      else if (o.eff < 1 && o.eff > 0) { this.say('Não é muito efetivo...'); this.emit({ t: 'eff', side: def.side, v: 0.5 }); }
    }
    const fl = m.flags || [];
    if (!att.fainted && fl.includes('contact') && !m.z) {
      if (def.item === 'rocky-helmet') this.indirect(att, att.maxHp / 6, `${att.name} foi ferido pelo Rocky Helmet!`);
      const dab = def.ability;
      if ((dab === 'rough-skin' || dab === 'iron-barbs') && !att.fainted) this.indirect(att, att.maxHp / 8, `${att.name} foi ferido por ${items.abilityInfo(dab).name}!`);
      if (!att.fainted && !def.fainted || dab === 'static') {
        if (dab === 'static' && this.chance(30)) this.inflict(att, 'par', def);
        else if (dab === 'flame-body' && this.chance(30)) this.inflict(att, 'brn', def);
        else if (dab === 'poison-point' && this.chance(30)) this.inflict(att, 'psn', def);
        else if (dab === 'effect-spore' && this.chance(30)) this.inflict(att, ['psn', 'par', 'slp'][this.randInt(0, 2)], def);
      }
    }
    if (def.hp <= 0) { this.faint(def); return dmg; }
    if (def.item === 'weakness-policy' && o.eff > 1) { this.consume(def); this.applyBoost(def, 'atk', 2, { self: true }); this.applyBoost(def, 'spa', 2, { self: true }); }
    if (def.ability === 'justified' && type === 'dark') this.applyBoost(def, 'atk', 1, { self: true });
    if (def.ability === 'weak-armor' && m.cat === 'physical') { this.applyBoost(def, 'def', -1, { self: true }); this.applyBoost(def, 'spe', 2, { self: true }); }
    this.checkItems(def);
    return dmg;
  }

  crashDamage(att) { this.indirect(att, att.maxHp / 2, `${att.name} caiu e se machucou!`); }
  fail(txt) { this.say(txt || 'Mas falhou!'); this.emit({ t: 'fail' }); }

  willAttack(side) {
    const c = this.choices[side];
    if (!c || c.type !== 'move') return false;
    const mon = this.act(side); const us = this.usableMoves(mon);
    if (!us.length) return true;
    return D.move(mon.moves[c.slot].id).cat !== 'status';
  }

  abilityImmune(def, kind, type) {
    const nm = def.name;
    const ab = items.abilityInfo(def.ability).name;
    switch (kind) {
      case 'levitate': this.say(`${nm} flutua graças a Levitate! Não afeta...`); break;
      case 'flashfire': def.vol.flashFire = true; this.say(`${nm} absorveu o fogo! Seus golpes de Fogo ficaram mais fortes!`); break;
      case 'absorb-water': case 'absorb-elec': {
        const a = def.ability;
        if (a === 'storm-drain' || a === 'lightning-rod') { this.say(`${ab} de ${nm} absorveu o golpe!`); this.applyBoost(def, 'spa', 1, { self: true }); }
        else if (a === 'motor-drive') { this.say(`${ab} de ${nm} absorveu o golpe!`); this.applyBoost(def, 'spe', 1, { self: true }); }
        else this.heal(def, Math.floor(def.maxHp / 4), `${ab} de ${nm} absorveu o golpe e recuperou HP!`);
        break;
      }
      case 'sapsipper': this.say(`${ab} de ${nm} absorveu o golpe!`); this.applyBoost(def, 'atk', 1, { self: true }); break;
      default: this.say(`${ab} de ${nm} bloqueou o golpe!`);
    }
    this.emit({ t: 'eff', side: def.side, v: 0 });
  }

  forceSwitch(side) {
    const cand = this.bench(side);
    if (!cand.length) { this.fail(); return; }
    const to = cand[this.randInt(0, cand.length - 1)];
    this.say(`${this.act(side).name} foi arrastado para longe!`);
    this.doSwitch(side, to.idx, false);
    this.queue = this.queue.filter((q) => q.side !== side || q.kind !== 'move');
  }

  /* ----------------------------- golpes de status ----------------------------- */
  statusMove(att, def, m, side, type) {
    const foeSide = att.side === 0 ? 1 : 0;
    const self = att;
    const sd = this.sides[att.side]; const fs = this.sides[def.side];
    if (m.special === 'prot') {
      const n = att.vol.protectCount || 0;
      if (n > 0 && !this.chance(100 / Math.pow(3, n))) { att.vol.protectCount = 0; return this.fail(); }
      att.vol.protected = true; att.vol.protectCount = n + 1; this.emit({ t: 'protect', side: att.side });
      this.say(`${att.name} se protegeu!`); return;
    }
    // golpes que atingem o oponente: checagens
    const targetsFoe = this.isFoeTargeted(m);
    if (targetsFoe) {
      if (def.fainted) return this.fail();
      if (m.acc != null && !this.accuracyOk(att, def, m)) { this.say(`O ataque de ${att.name} errou!`); return; }
      const imm = this.isImmuneByAbility(att, def, m, m.type);
      if (imm && m.type !== 'typeless' && (m.status || m.boosts)) return this.abilityImmune(def, imm, m.type);
      if (m.type === 'electric' && m.status && effectiveness('electric', def.types) === 0) { this.say(`Não afeta ${def.name}...`); return; }
      if (POWDER.has(m.id) && def.types.includes('grass')) { this.say(`Não afeta ${def.name}...`); return; }
      if (m.id === 'will-o-wisp' && def.types.includes('fire')) { this.say(`Não afeta ${def.name}...`); return; }
    }
    if (m.status) {
      if (m.status.s === 'cnf') { if (!this.confuse(def)) this.fail(); }
      else if (!this.inflict(def, m.status.s, att, { verbose: true })) { /* mensagem já emitida */ }
    }
    if (m.boosts) {
      const tgt = m.boosts.target === 'self' ? att : def;
      let any = false;
      for (const [k, n] of Object.entries(m.boosts.stats)) any = this.applyBoost(tgt, k, n, { self: tgt === att, ignoreAbility: IGNORE_ABILITY.has(att.ability) }) || any;
      if (!any && Object.keys(m.boosts.stats).length) this.fail();
    }
    if (m.heal) {
      if (att.hp >= att.maxHp) return this.fail(`${att.name} já está com HP cheio!`);
      this.heal(att, Math.floor(att.maxHp * m.heal / 100), `${att.name} recuperou HP!`);
    }
    if (m.weather) this.setWeather(m.weather, att.item === { rain: 'damp-rock', sun: 'heat-rock', sand: 'smooth-rock', hail: 'icy-rock' }[m.weather] ? 8 : 5, att);
    switch (m.special) {
      case 'rest': this.cure(att); att.status = 'slp'; att.sleepTurns = 2; this.emit({ t: 'status', side: att.side, status: 'slp' }); this.setHp(att, att.maxHp); this.say(`${att.name} dormiu e ficou saudável!`); break;
      case 'belly': this.setHp(att, att.hp - Math.floor(att.maxHp / 2)); att.boosts.atk = 6; this.emit({ t: 'boost', side: att.side, stat: 'atk', amount: 12, stages: 6 }); this.say(`${att.name} cortou seu HP e maximizou o Ataque!`); break;
      case 'reflect': if (sd.conds.reflect > 0) return this.fail(); sd.conds.reflect = att.item === 'light-clay' ? 8 : 5; this.emit({ t: 'field', side: att.side, conds: { ...sd.conds } }); this.say('Reflect fortaleceu o time contra golpes físicos!'); break;
      case 'lscreen': if (sd.conds.lscreen > 0) return this.fail(); sd.conds.lscreen = att.item === 'light-clay' ? 8 : 5; this.emit({ t: 'field', side: att.side, conds: { ...sd.conds } }); this.say('Light Screen fortaleceu o time contra golpes especiais!'); break;
      case 'veil': if (this.weatherType() !== 'hail' || sd.conds.veil > 0) return this.fail(); sd.conds.veil = att.item === 'light-clay' ? 8 : 5; this.emit({ t: 'field', side: att.side, conds: { ...sd.conds } }); this.say('Aurora Veil protege o time!'); break;
      case 'spikes': if (fs.conds.spikes >= 3) return this.fail(); fs.conds.spikes++; this.emit({ t: 'field', side: def.side, conds: { ...fs.conds } }); this.say(`Espinhos se espalharam aos pés do time de ${fs.name}!`); break;
      case 'rocks': if (fs.conds.rocks) return this.fail(); fs.conds.rocks = true; this.emit({ t: 'field', side: def.side, conds: { ...fs.conds } }); this.say(`Pedras pontiagudas flutuam ao redor do time de ${fs.name}!`); break;
      case 'force': this.forceSwitch(def.side); break;
      default: break;
    }
  }

  /* ----------------------------- fim de turno ----------------------------- */
  endOfTurn() {
    const order = [0, 1].sort((a, b) => this.getSpeed(this.act(b)) - this.getSpeed(this.act(a)) || this.rand() - 0.5);
    const w = this.weatherType();
    for (const s of order) {
      const mon = this.act(s); if (mon.fainted) continue;
      // clima
      if (w === 'sand' && !mon.types.some((t) => ['rock', 'ground', 'steel'].includes(t)) && !['sand-veil', 'sand-force', 'sand-rush', 'overcoat', 'magic-guard'].includes(mon.ability)) this.indirect(mon, mon.maxHp / 16, `${mon.name} foi ferido pela tempestade de areia!`);
      else if (w === 'hail' && !mon.types.includes('ice') && !['snow-cloak', 'ice-body', 'overcoat', 'magic-guard'].includes(mon.ability)) this.indirect(mon, mon.maxHp / 16, `${mon.name} foi ferido pelo granizo!`);
      if (mon.fainted) continue;
      if (w === 'rain' && mon.ability === 'rain-dish') this.heal(mon, Math.floor(mon.maxHp / 16));
      if (w === 'rain' && mon.ability === 'dry-skin') this.heal(mon, Math.floor(mon.maxHp / 8));
      if (w === 'sun' && mon.ability === 'dry-skin') this.indirect(mon, mon.maxHp / 8);
      if (w === 'sun' && mon.ability === 'solar-power') this.indirect(mon, mon.maxHp / 8);
      if (w === 'hail' && mon.ability === 'ice-body') this.heal(mon, Math.floor(mon.maxHp / 16));
      if (mon.fainted) continue;
      // itens
      if (mon.item === 'leftovers') this.heal(mon, Math.max(1, Math.floor(mon.maxHp / 16)), `${mon.name} recuperou HP com a Leftovers.`);
      if (mon.item === 'black-sludge') { if (mon.types.includes('poison')) this.heal(mon, Math.max(1, Math.floor(mon.maxHp / 16))); else this.indirect(mon, mon.maxHp / 8, `${mon.name} foi ferido pela Black Sludge!`); }
      if (mon.item === 'flame-orb' && !mon.status) { this.inflict(mon, 'brn', null); }
      if (mon.item === 'toxic-orb' && !mon.status) { this.inflict(mon, 'tox', null); }
      if (mon.fainted) continue;
      // status
      if (mon.status === 'brn') this.indirect(mon, mon.maxHp / 16, `${mon.name} sofre com a queimadura!`);
      else if (mon.status === 'psn') { if (mon.ability === 'poison-heal') this.heal(mon, Math.floor(mon.maxHp / 8)); else this.indirect(mon, mon.maxHp / 8, `${mon.name} sofre com o veneno!`); }
      else if (mon.status === 'tox') { if (mon.ability === 'poison-heal') this.heal(mon, Math.floor(mon.maxHp / 8)); else { this.indirect(mon, mon.maxHp * mon.toxCount / 16, `${mon.name} sofre com o veneno!`); mon.toxCount = Math.min(15, mon.toxCount + 1); } }
      if (mon.fainted) continue;
      if (mon.ability === 'speed-boost') this.applyBoost(mon, 'spe', 1, { self: true });
      mon.vol.protected = false; mon.vol.flinch = false; mon.vol.hitThisTurn = false;
    }
    for (const s of [0, 1]) { const mon = this.act(s); if (!mon.fainted && mon.vol) { mon.vol.protected = false; } }
    // contadores
    for (const s of [0, 1]) {
      const c = this.sides[s].conds; let changed = false;
      for (const k of ['reflect', 'lscreen', 'veil']) if (c[k] > 0) { c[k]--; changed = true; if (c[k] === 0) this.say(`${{ reflect: 'Reflect', lscreen: 'Light Screen', veil: 'Aurora Veil' }[k]} de ${this.sides[s].name} acabou.`); }
      if (changed) this.emit({ t: 'field', side: s, conds: { ...c } });
    }
    if (this.weather) {
      this.weatherTurns--;
      if (this.weatherTurns <= 0) { this.say({ rain: 'A chuva parou.', sun: 'O sol voltou ao normal.', sand: 'A tempestade de areia acabou.', hail: 'O granizo parou.' }[this.weather]); this.weather = null; this.emit({ t: 'weather', weather: null }); }
    }
  }
}

module.exports = { Battle, makeMon, mulberry32, STRUGGLE };
});

__def('engine/ai', function (module, exports, require) {
'use strict';
/**
 * IA do Stadium. Níveis: 0 = Fácil (aleatória), 1 = Normal (maior dano),
 * 2 = Difícil (matchups, setup, status, Mega/Z/Tera), 3 = Mestre (prevê o rival, trocas defensivas, prioridade/KO).
 */
const D = require('../data');
const items = require('./items');
const { effectiveness } = require('./types');

const SETUP = new Set(['swords-dance', 'dragon-dance', 'nasty-plot', 'calm-mind', 'bulk-up', 'quiver-dance', 'shell-smash', 'agility', 'work-up', 'coil', 'iron-defense', 'amnesia', 'cosmic-power', 'belly-drum']);
const pick = (b, arr) => arr[Math.floor(b.rand() * arr.length)];

/** Maior dano % que `att` causa em `def` com o melhor golpe. */
function bestHit(b, att, def) {
  let best = 0;
  for (const mv of att.moves) { if (mv.pp <= 0) continue; const d = b.estimate(att, def, mv.id); if (d > best) best = d; }
  return best / def.hp;
}

function matchup(b, me, foe) {
  const mine = bestHit(b, me, foe);
  const theirs = bestHit(b, foe, me) * (me.maxHp ? 1 : 1) * (foe.hp / foe.maxHp > 0 ? 1 : 0);
  const mySpe = b.getSpeed(me) >= b.getSpeed(foe);
  return Math.min(1.5, mine) - Math.min(1.5, theirs * (me.hp > 0 ? (me.maxHp / Math.max(1, me.hp)) * 0.4 + 0.6 : 1)) + (mySpe ? 0.15 : 0);
}

function switchCandidates(b, side) {
  return b.bench(side);
}

function bestSwitch(b, side, level) {
  const foe = b.foe(side); const cand = switchCandidates(b, side);
  if (!cand.length) return null;
  if (level === 0) return pick(b, cand);
  let best = cand[0]; let bs = -9;
  for (const c of cand) {
    let sc = matchup(b, c, foe);
    if (level >= 3 && !foe.fainted) {
      // quanto dano o melhor golpe do rival causa ao entrar
      const take = bestHit(b, foe, c);
      sc -= take * 0.5;
    }
    sc += (c.hp / c.maxHp) * 0.3;
    if (sc > bs) { bs = sc; best = c; }
  }
  return best;
}

function scoreStatus(b, me, foe, mv, level) {
  const hpP = me.hp / me.maxHp;
  if (SETUP.has(mv.id) || (mv.boosts && mv.boosts.target === 'self')) {
    const stats = mv.boosts ? Object.keys(mv.boosts.stats) : [];
    const cur = stats.reduce((a, k) => a + (me.boosts[k] || 0), 0);
    if (cur >= 2 || hpP < 0.55) return 0.02;
    const threat = bestHit(b, foe, me);
    if (threat > 0.5) return 0.05;
    return 0.55 - cur * 0.12;
  }
  if (mv.heal) return hpP < 0.5 ? 0.8 : hpP < 0.7 ? 0.25 : 0;
  if (mv.status) {
    if (foe.status) return 0;
    if (mv.status.s === 'par' && foe.types.includes('electric')) return 0;
    if (mv.type === 'electric' && effectiveness('electric', foe.types) === 0) return 0;
    if (mv.status.s === 'brn' && (foe.types.includes('fire') || foe.stats.atk < foe.stats.spa)) return 0.05;
    if (['psn', 'tox'].includes(mv.status.s) && (foe.types.includes('poison') || foe.types.includes('steel'))) return 0;
    if (mv.id === 'spore' || mv.id === 'sleep-powder') { if (foe.types.includes('grass')) return 0; return 0.7; }
    return mv.status.s === 'slp' ? 0.65 : mv.status.s === 'par' ? 0.45 : 0.4;
  }
  const c = b.sides[me.side].conds; const fc = b.sides[foe.side].conds;
  if (mv.special === 'rocks') return !fc.rocks && b.bench(foe.side).length >= 2 ? 0.5 : 0;
  if (mv.special === 'spikes') return fc.spikes < 3 && b.bench(foe.side).length >= 2 ? 0.35 : 0;
  if (mv.special === 'reflect') return !c.reflect && foe.stats.atk > foe.stats.spa ? 0.35 : 0;
  if (mv.special === 'lscreen') return !c.lscreen && foe.stats.spa >= foe.stats.atk ? 0.35 : 0;
  if (mv.special === 'prot') return level >= 3 && me.vol.fresh ? 0.12 : 0.02;
  if (mv.special === 'force') return foe.boosts.atk + foe.boosts.spa > 1 ? 0.6 : 0.05;
  if (mv.weather) return b.weather ? 0.02 : 0.15;
  if (mv.boosts && mv.boosts.target === 'foe') return 0.12;
  return 0.03;
}

function decide(b, side, level) {
  const me = b.act(side); const foe = b.foe(side);
  const req = b.request(side);
  // troca forçada
  if (b.phase === 'switch') {
    const t = bestSwitch(b, side, level);
    return { type: 'switch', to: t.idx };
  }
  if (req.struggle) return { type: 'move', slot: 0 };
  const legal = req.moves.filter((m) => !m.disabled);

  if (level === 0) {
    const mv = pick(b, legal);
    return { type: 'move', slot: mv.slot, mega: !!req.canMega && b.rand() < 0.5, tera: !!req.canTera && b.rand() < 0.1, z: !!mv.z && b.rand() < 0.5 };
  }

  // pontua golpes
  const foeHpAbs = foe.hp;
  const myFaster = b.getSpeed(me) > b.getSpeed(foe);
  const foeBest = bestHit(b, foe, me);
  const zAvail = req.moves.some((m) => m.z);
  const scored = legal.map((m) => {
    const mv = D.move(m.id); let s;
    if (mv.cat === 'status') s = scoreStatus(b, me, foe, mv, level);
    else {
      const dmg = b.estimate(me, foe, mv.id);
      s = Math.min(1.2, dmg / foeHpAbs);
      if (dmg >= foeHpAbs * 0.95) s += 0.6 + ((mv.prio > 0 || myFaster) ? 0.3 : 0);
      if (mv.prio > 0 && level >= 3 && !myFaster && foe.hp / foe.maxHp < 0.35) s += 0.15;
      if (mv.special === 'recharge') s -= 0.1;
      if (mv.special === 'boom') s = me.hp / me.maxHp < 0.3 ? s : s * 0.3;
      if (mv.recoil && me.hp / me.maxHp < 0.35) s *= 0.7;
      if (mv.special === 'fakeout') s = me.vol.fresh ? s + 0.4 : 0;
      if (mv.special === 'sucker') s *= 0.7;
    }
    if (level === 1) s += b.rand() * 0.15; else s += b.rand() * 0.05;
    return { m, mv, s };
  });
  scored.sort((x, y) => y.s - x.s);
  const top = scored[0];

  // decide trocar (nível >= 2)
  if (level >= 2 && b.bench(side).length && !b.isTrapped(me) && me.vol.fresh !== true && b.turn - b.sides[side].lastSwitchTurn > 1) {
    const mu = matchup(b, me, foe);
    const threatKO = foeBest * foe.hp >= me.hp && !myFaster;
    const sw = bestSwitch(b, side, level);
    if (sw) {
      const smu = matchup(b, sw, foe);
      const boosted = Object.values(me.boosts).some((v) => v > 1);
      if (!boosted && ((mu < -0.45 && smu > mu + 0.5 && top.s < 0.5) || (level >= 3 && threatKO && top.s < 0.9 && smu > 0 && b.rand() < 0.75))) return { type: 'switch', to: sw.idx };
    }
  }

  const choice = { type: 'move', slot: top.m.slot };
  // Mega
  if (req.canMega) choice.mega = true;
  // Z: usa no golpe que dá mais dano com Z se vale a pena
  if (zAvail && level >= 2) {
    let bestZ = null; let bz = 0;
    for (const m of req.moves) { if (!m.z || m.disabled) continue; const d = b.estimate(me, foe, m.id, { z: true }); if (d > bz) { bz = d; bestZ = m; } }
    const lastMon = b.alive(side).length === 1;
    if (bestZ && (bz >= foe.hp || (foe.hp / foe.maxHp > 0.6 && bz >= foe.hp * 0.7) || (lastMon && bz > foe.hp * 0.5))) { choice.slot = bestZ.slot; choice.z = true; }
  }
  // Tera
  if (req.canTera && level >= 2 && !choice.z) {
    const orig = me.types; const tera = me.tera;
    const clone = Object.assign(Object.create(Object.getPrototypeOf(me)), me, { types: [tera], teraActive: true });
    const mv = top.m.id; const mvD = D.move(mv);
    const before = b.estimate(me, foe, mv);
    const after = b.estimate(clone, foe, mv);
    const defBefore = bestHit(b, foe, me);
    const defAfter = bestHit(b, foe, clone);
    if ((mvD.cat !== 'status' && after > before * 1.2) || (defAfter < defBefore * 0.6 && defBefore > 0.35) || (level >= 3 && me.hp / me.maxHp < 0.5 && after > before)) choice.tera = true;
    else if (b.alive(side).length === 1 && b.rand() < 0.5) choice.tera = true;
  }
  return choice;
}

module.exports = { decide, matchup };
});

__def('engine/teams', function (module, exports, require) {
'use strict';
/** Validação de times (anti-trapaça) e geração de times aleatórios. */
const D = require('../data');
const items = require('./items');
const { TYPES } = require('./types');

const MAX_TEAM = 6;

function validateTeam(team) {
  if (!Array.isArray(team) || team.length < 1 || team.length > MAX_TEAM) return { error: `O time precisa ter de 1 a ${MAX_TEAM} Pokémon.` };
  const seenSpecies = new Set(); const seenItems = new Set(); const clean = [];
  for (const raw of team) {
    if (!raw || typeof raw.species !== 'string') return { error: 'Pokémon inválido no time.' };
    const sp = D.species(raw.species);
    if (!sp) return { error: `Espécie desconhecida: ${String(raw.species).slice(0, 30)}` };
    if (seenSpecies.has(sp.id)) return { error: `Species Clause: ${sp.name} repetido.` };
    seenSpecies.add(sp.id);
    const ability = sp.abilities.includes(raw.ability) ? raw.ability : sp.abilities[0];
    let item = raw.item || null;
    if (item) {
      const info = items.itemInfo(item);
      if (!info) return { error: `Item desconhecido: ${String(item).slice(0, 30)}` };
      if (info.mega && !sp.megas.some((m) => m.id === info.mega)) return { error: `${sp.name} não pode usar essa Mega Stone.` };
      if (seenItems.has(item)) return { error: 'Item Clause: itens repetidos no time.' };
      seenItems.add(item);
    }
    const moves = Array.isArray(raw.moves) ? [...new Set(raw.moves)].slice(0, 4) : [];
    if (!moves.length) return { error: `${sp.name} precisa de pelo menos 1 golpe.` };
    for (const m of moves) if (!sp.pool.includes(m) && !sp.moves.includes(m)) return { error: `${sp.name} não pode aprender ${String(m).slice(0, 30)}.` };
    const tera = TYPES.includes(raw.tera) ? raw.tera : sp.types[0];
    clean.push({ species: sp.id, ability, item, moves, tera });
  }
  return { team: clean };
}

function shuffle(arr, rng) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function randomTeam(n = 6, rng = Math.random, opts = {}) {
  const all = D.allSpecies().filter((s) => !opts.gens || opts.gens.includes(s.gen));
  const picks = shuffle(all, rng).slice(0, n);
  const used = new Set(); const team = [];
  let megaTaken = false; let zTaken = 0;
  for (const sp of picks) {
    const ability = sp.abilities[Math.floor(rng() * sp.abilities.length)];
    const moves = sp.moves.slice();
    let item = null; const r = rng();
    const mega = sp.megas[0];
    if (mega && !megaTaken && r < 0.6) { item = `megastone-${sp.megas[Math.floor(rng() * sp.megas.length)].id}`; megaTaken = true; }
    else {
      const stabType = sp.types[0];
      const pool = ['leftovers', 'life-orb', 'expert-belt', 'sitrus-berry', 'lum-berry', 'focus-sash', 'rocky-helmet', 'weakness-policy', 'assault-vest', items.TYPE_BOOST[stabType]];
      if (zTaken < 2 && rng() < 0.35) { item = items.Z_CRYSTAL[stabType]; zTaken++; }
      else item = pool[Math.floor(rng() * pool.length)];
      if (item === 'assault-vest' && moves.some((m) => D.move(m).cat === 'status')) item = 'leftovers';
    }
    if (used.has(item)) item = ['leftovers', 'life-orb', 'sitrus-berry', 'lum-berry', 'expert-belt', 'focus-sash', 'rocky-helmet', 'shell-bell', 'scope-lens', 'muscle-band', 'wise-glasses'].find((i) => !used.has(i));
    used.add(item);
    team.push({ species: sp.id, ability, item, moves, tera: rng() < 0.5 ? sp.types[0] : TYPES[Math.floor(rng() * TYPES.length)] });
  }
  return team;
}

module.exports = { validateTeam, randomTeam, MAX_TEAM };
});

__def('rooms', function (module, exports, require) {
'use strict';
/**
 * Gerenciador de partidas (solo vs IA, local/hotseat, online por sala ou fila).
 * Independe de Socket.io: recebe objetos "socket" com { id, emit(ev, data) }.
 * O servidor é autoritativo: o cliente só envia ESCOLHAS; todo dano/RNG é calculado aqui.
 */
const { Battle } = require('./engine/battle');
const { validateTeam, randomTeam } = require('./engine/teams');

const AI_NAMES = ['Lorelei', 'Bruno', 'Agatha', 'Lance', 'Cynthia', 'Red', 'Blue', 'Steven', 'Diantha', 'Leon'];
const DIFFS = { facil: 0, normal: 1, dificil: 2, mestre: 3 };
const cleanName = (n, fb) => String(n || fb).replace(/[^\p{L}\p{N} _-]/gu, '').trim().slice(0, 16) || fb;

class Match {
  constructor(id, mode) { this.id = id; this.mode = mode; this.players = []; this.battle = null; this.timer = null; this.ended = false; }
  /** players[i] = { socket|null, name, team } ; socket null = IA */
  begin(players, ai) {
    this.players = players;
    this.battle = new Battle(players.map((p) => ({ name: p.name, team: p.team })), { ai });
    this.battle.start();
    this.broadcast(true);
  }
  controllerOf(socketId) { // lado(s) controlados por esse socket
    return this.players.map((p, i) => (p.socket && p.socket.id === socketId ? i : -1)).filter((i) => i >= 0);
  }
  /** payload enviado a um jogador (em hotseat o mesmo socket recebe os dois pedidos). */
  payloadFor(i, events) {
    const b = this.battle; const names = this.players.map((x) => x.name);
    if (this.mode === 'local') return { mode: 'local', you: 0, events, snapshots: [b.snapshot(0), b.snapshot(1)], requests: [b.request(0), b.request(1)], names };
    return { mode: this.mode, you: i, events, snapshot: b.snapshot(i), request: b.request(i), names };
  }
  /** envia eventos + request atualizados a todos os jogadores humanos. */
  broadcast(first = false) {
    const b = this.battle; const events = b.flush();
    const seen = new Set();
    this.players.forEach((p, i) => {
      if (!p.socket) return;
      if (this.mode === 'local') { if (seen.has(p.socket.id)) return; seen.add(p.socket.id); }
      p.socket.emit(first ? 'battle:start' : 'battle:update', this.payloadFor(i, events));
    });
    if (b.over) this.ended = true;
  }
  /** reenvia o estado atual (sem eventos) para quem reconectou depois de uma queda de rede. */
  resend(socketId) {
    if (!this.battle) return;
    const i = this.players.findIndex((p) => p.socket && p.socket.id === socketId); if (i < 0) return;
    this.players[i].socket.emit('battle:update', this.payloadFor(i, []));
  }
  choose(socketId, choice, side) {
    if (this.ended) return { ok: false, error: 'Batalha encerrada' };
    const mine = this.controllerOf(socketId);
    if (!mine.length) return { ok: false, error: 'Você não está nesta batalha' };
    const s = this.mode === 'local' ? (mine.includes(side) ? side : -1) : mine[0];
    if (s < 0) return { ok: false, error: 'Lado inválido' };
    const r = this.battle.choose(s, choice);
    if (r.ok) this.broadcast(false);
    return r;
  }
  forfeit(socketId) {
    if (this.ended || !this.battle) return;
    const mine = this.controllerOf(socketId); if (!mine.length) return;
    this.battle.forfeit(mine[0]); this.broadcast(false);
  }
}

class Manager {
  constructor() { this.matches = new Map(); this.bySocket = new Map(); this.rooms = new Map(); this.queue = []; this.seq = 1; }

  code() { const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; let c; do { c = Array.from({ length: 4 }, () => A[Math.floor(Math.random() * A.length)]).join(''); } while (this.rooms.has(c)); return c; }

  attach(sock, match) { this.matches.set(match.id, match); this.bySocket.set(sock.id, match); }

  /* ---------- Solo vs IA ---------- */
  solo(sock, { team, name, difficulty }) {
    this.leave(sock);
    const v = validateTeam(team); if (v.error) return { ok: false, error: v.error };
    const lvl = DIFFS[difficulty] != null ? DIFFS[difficulty] : 1;
    const m = new Match(`m${this.seq++}`, 'solo');
    const aiTeam = validateTeam(randomTeam(Math.max(3, v.team.length))).team;
    this.attach(sock, m);
    m.begin([{ socket: sock, name: cleanName(name, 'Jogador'), team: v.team }, { socket: null, name: AI_NAMES[Math.floor(Math.random() * AI_NAMES.length)], team: aiTeam }], { 1: lvl });
    return { ok: true };
  }

  /* ---------- Local (hotseat) ---------- */
  local(sock, { team1, team2, name1, name2 }) {
    this.leave(sock);
    const a = validateTeam(team1); const b = validateTeam(team2);
    if (a.error || b.error) return { ok: false, error: a.error || b.error };
    const m = new Match(`m${this.seq++}`, 'local'); this.attach(sock, m);
    m.begin([{ socket: sock, name: cleanName(name1, 'Jogador 1'), team: a.team }, { socket: sock, name: cleanName(name2, 'Jogador 2'), team: b.team }], {});
    return { ok: true };
  }

  /* ---------- Online: sala por código ---------- */
  createRoom(sock, { team, name }) {
    this.leave(sock);
    const v = validateTeam(team); if (v.error) return { ok: false, error: v.error };
    const code = this.code();
    this.rooms.set(code, { host: { sock, name: cleanName(name, 'Jogador 1'), team: v.team } });
    sock.roomCode = code;
    return { ok: true, code };
  }
  joinRoom(sock, { code, team, name }) {
    this.leave(sock);
    code = String(code || '').toUpperCase().trim();
    const room = this.rooms.get(code); if (!room) return { ok: false, error: 'Sala não encontrada.' };
    if (room.host.sock.id === sock.id) return { ok: false, error: 'Você já está nessa sala.' };
    const v = validateTeam(team); if (v.error) return { ok: false, error: v.error };
    this.rooms.delete(code); room.host.sock.roomCode = null;
    this.startOnline(room.host, { sock, name: cleanName(name, 'Jogador 2'), team: v.team });
    return { ok: true };
  }

  /* ---------- Online: fila rápida ---------- */
  quick(sock, { team, name }) {
    this.leave(sock);
    const v = validateTeam(team); if (v.error) return { ok: false, error: v.error };
    const me = { sock, name: cleanName(name, 'Jogador'), team: v.team };
    const other = this.queue.shift();
    if (other) { this.startOnline(other, me); return { ok: true, matched: true }; }
    this.queue.push(me); sock.inQueue = true; return { ok: true, matched: false };
  }

  startOnline(a, b) {
    const m = new Match(`m${this.seq++}`, 'online'); this.attach(a.sock, m); this.attach(b.sock, m);
    a.sock.inQueue = b.sock.inQueue = false;
    m.begin([{ socket: a.sock, name: a.name, team: a.team }, { socket: b.sock, name: b.name, team: b.team }], {});
  }

  /* ---------- ações ---------- */
  choose(sock, choice, side) {
    const m = this.bySocket.get(sock.id); if (!m) return { ok: false, error: 'Sem batalha ativa' };
    const r = m.choose(sock.id, choice, side);
    if (m.ended) this.cleanup(m);
    return r;
  }
  forfeit(sock) { const m = this.bySocket.get(sock.id); if (m) { m.forfeit(sock.id); if (m.ended) this.cleanup(m); } }
  /** conexão voltou após uma queda curta: reenvia o estado da partida em andamento. */
  resume(sock) { const m = this.bySocket.get(sock.id); if (m && !m.ended) m.resend(sock.id); }

  leave(sock) {
    this.queue = this.queue.filter((q) => q.sock.id !== sock.id);
    if (sock.roomCode) { this.rooms.delete(sock.roomCode); sock.roomCode = null; }
    const m = this.bySocket.get(sock.id);
    if (m) { if (!m.ended) m.forfeit(sock.id); this.cleanup(m); }
  }
  cleanup(m) {
    for (const p of m.players) if (p.socket && this.bySocket.get(p.socket.id) === m) this.bySocket.delete(p.socket.id);
    this.matches.delete(m.id);
  }
  stats() { return { matches: this.matches.size, rooms: this.rooms.size, queue: this.queue.length }; }
}

module.exports = { Manager, Match, DIFFS };
});

__def('dexapi', function (module, exports, require) {
'use strict';
/** Monta o JSON da Pokédex enviado ao cliente (/api/dex). Compartilhado por server.js e pelos testes. */
const D = require('./data');
const items = require('./engine/items');
const { TYPES, TYPE_PT, CHART } = require('./engine/types');

let cache = null;
function dexJSON() {
  if (cache) return cache;
  const moves = {};
  for (const [id, m] of Object.entries(D.allMoves())) moves[id] = { id, name: m.name, type: m.type, cat: m.cat, power: m.power, acc: m.acc, pp: m.pp, prio: m.prio };
  const species = D.allSpecies().map((s) => ({
    id: s.id, dex: s.dex, name: s.name, gen: s.gen, types: s.types, stats: s.stats, abilities: s.abilities, sd: s.sd, pool: s.pool, moves: s.moves,
    megas: s.megas.map((m) => ({ id: m.id, name: m.name, types: m.types, stats: m.stats, ability: m.ability, sd: m.sd })),
  }));
  const abilities = {}; const used = new Set(species.flatMap((s) => [...s.abilities, ...s.megas.map((m) => m.ability)]));
  for (const id of used) abilities[id] = items.abilityInfo(id);
  const itemList = Object.values(items.ITEMS).map((i) => ({ id: i.id, name: i.name, desc: i.desc, z: i.z || null }));
  cache = JSON.stringify({ species, moves, abilities, items: itemList, types: TYPES, typesPT: TYPE_PT, chart: CHART, zNames: items.Z_NAME, gens: D.generations() });
  return cache;
}
module.exports = { dexJSON };
});

/* ================= servidor ================= */
/* ---------- servidor (HTTP puro + SSE; sem dependências) ---------- */
const http = require('http');
const fs = require('fs');
const path = require('path');

const D = $('data');
const { dexJSON } = $('dexapi');
const { randomTeam, validateTeam } = $('engine/teams');
const { Manager } = $('rooms');

const PORT = Number(process.env.PORT) || 3000;
// Os arquivos do site podem estar na pasta "public" ou soltos ao lado do server.js.
const PUBLIC_DIR = fs.existsSync(path.join(__dirname, 'public', 'index.html')) ? path.join(__dirname, 'public') : __dirname;
const MAX_BODY = 100 * 1024;
const MAX_CONN = 3000;
const GRACE_MS = 45000; // tempo para o jogador reconectar antes de perder a partida
const SID = /^[a-z0-9]{8,64}$/;

const mgr = new Manager();
const socks = new Map(); // sid -> conexão (sobrevive a quedas curtas)

/* ---------- eventos do jogo (cliente -> servidor) ---------- */
function handlersFor(sock) {
  return {
    'solo:start': (d) => mgr.solo(sock, d),
    'local:start': (d) => mgr.local(sock, d),
    'room:create': (d) => mgr.createRoom(sock, d),
    'room:join': (d) => mgr.joinRoom(sock, d),
    'queue:join': (d) => mgr.quick(sock, d),
    'queue:leave': () => { mgr.leave(sock); return { ok: true }; },
    'battle:choose': (d) => mgr.choose(sock, d.choice, d.side),
    'battle:forfeit': () => { mgr.forfeit(sock); return { ok: true }; },
    'team:validate': (d) => { const v = validateTeam(d.team); return v.error ? { ok: false, error: v.error } : { ok: true }; },
  };
}
/* limite de uso por conexão (anti-spam) */
function guard() {
  let tokens = 20; const iv = setInterval(() => { tokens = Math.min(20, tokens + 10); }, 1000); iv.unref();
  return {
    run(fn, data) {
      if (--tokens < 0) return { ok: false, error: 'Calma lá, muitas ações!' };
      try { return fn(data && typeof data === 'object' ? data : {}); } catch (e) { console.error('[handler]', e); return { ok: false, error: 'Erro interno no servidor.' }; }
    },
    stop() { clearInterval(iv); },
  };
}
function online() { let n = 0; for (const s of socks.values()) if (s.res) n++; return n; }
function broadcastOnline() { const n = online(); for (const s of socks.values()) s.emit('online', n); }
function dropSock(sock) { clearInterval(sock.hb); clearTimeout(sock.timer); sock.g.stop(); mgr.leave(sock); socks.delete(sock.id); broadcastOnline(); }

/* ---------- http ---------- */
const send = (res, status, obj) => { res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }); res.end(JSON.stringify(obj)); };
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
const FILES = {};
for (const f of ['index.html', 'shim.js', 'favicon.svg']) FILES['/' + f] = { buf: fs.readFileSync(path.join(PUBLIC_DIR, f)), type: TYPES[path.extname(f)] || 'application/octet-stream' };
if (!FILES['/index.html'].buf.length) throw new Error('index.html vazio');
FILES['/'] = FILES['/index.html'];
FILES['/favicon.ico'] = FILES['/favicon.svg'];
const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https://play.pokemonshowdown.com https://raw.githubusercontent.com; connect-src 'self'; base-uri 'none'; frame-ancestors 'self'";

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const parts = [];
    req.on('data', (ch) => { size += ch.length; if (size > MAX_BODY) { reject(new Error('big')); req.destroy(); } else parts.push(ch); });
    req.on('end', () => { try { resolve(JSON.parse(Buffer.concat(parts).toString('utf8') || '{}')); } catch (e) { reject(e); } });
    req.on('error', reject);
  });
}

async function handleApi(req, res, url) {
  const p = url.pathname;
  if (p === '/api/dex') { res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=300' }); return res.end(dexJSON()); }
  if (p === '/api/random-team') return send(res, 200, randomTeam(Math.max(1, Math.min(6, parseInt(url.searchParams.get('n'), 10) || 6))));
  if (p === '/api/ping') return send(res, 200, { ok: true });

  const sid = url.searchParams.get('sid') || '';
  if (!SID.test(sid)) return send(res, 400, { ok: false, error: 'sid inválido' });

  if (p === '/api/events' && req.method === 'GET') { // abre (ou reabre) a conexão ao vivo
    let sock = socks.get(sid); const resumed = !!sock;
    if (!sock) {
      if (socks.size >= MAX_CONN) return send(res, 503, { ok: false, error: 'Servidor cheio' });
      sock = { id: sid, res: null, hb: null, timer: null, g: guard(), emit(e, d) { if (this.res && !this.res.writableEnded) this.res.write('data: ' + JSON.stringify({ e, d }) + '\n\n'); } };
      socks.set(sid, sock);
    }
    clearTimeout(sock.timer); clearInterval(sock.hb);
    if (sock.res) { try { sock.res.end(); } catch (e) { /* já fechada */ } }
    sock.res = res;
    res.writeHead(200, { 'content-type': 'text/event-stream; charset=utf-8', 'cache-control': 'no-cache, no-transform', connection: 'keep-alive', 'x-accel-buffering': 'no' });
    res.write('retry: 2000\n\n');
    sock.emit('__ready', { resumed });
    sock.hb = setInterval(() => { if (sock.res) sock.res.write('event: ping\ndata: 1\n\n'); }, 15000);
    if (resumed) mgr.resume(sock); // devolve a partida em andamento, se houver
    broadcastOnline();
    req.on('close', () => {
      if (sock.res !== res) return;
      sock.res = null; clearInterval(sock.hb); broadcastOnline();
      sock.timer = setTimeout(() => dropSock(sock), GRACE_MS);
    });
    return undefined;
  }
  if (p === '/api/emit' && req.method === 'POST') { // evento do cliente; a resposta é o "ack"
    let b; try { b = await readBody(req); } catch (e) { return send(res, 400, { ok: false, error: 'JSON inválido' }); }
    const sock = socks.get(sid);
    if (!sock) return send(res, 200, { ok: false, error: 'Conexão expirada. Recarregue a página.' });
    const fn = b && typeof b.e === 'string' ? handlersFor(sock)[b.e] : null;
    return send(res, 200, fn ? sock.g.run(fn, b.d) : { ok: false, error: 'Evento desconhecido' });
  }
  return send(res, 404, { ok: false, error: 'não encontrado' });
}

const server = http.createServer((req, res) => {
  let url; try { url = new URL(req.url, 'http://x'); } catch (e) { res.writeHead(400); return res.end(); }
  if (url.pathname === '/healthz') { res.writeHead(200, { 'content-type': 'text/plain' }); return res.end('ok'); }
  if (url.pathname.startsWith('/api/')) {
    handleApi(req, res, url).catch((e) => { console.error(e); if (!res.headersSent) send(res, 500, { ok: false, error: 'erro' }); });
    return undefined;
  }
  const f = FILES[url.pathname];
  if (!f || (req.method !== 'GET' && req.method !== 'HEAD')) { res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); return res.end('Não encontrado'); }
  res.writeHead(200, { 'content-type': f.type, 'cache-control': 'no-cache', 'x-content-type-options': 'nosniff', 'content-security-policy': CSP });
  return res.end(req.method === 'HEAD' ? undefined : f.buf);
});
server.requestTimeout = 0; // conexões SSE ficam abertas
process.on('uncaughtException', (e) => console.error('Erro:', e));
server.listen(PORT, '0.0.0.0', () => console.log('Pokémon Stadium Web rodando na porta ' + PORT + ' — ' + JSON.stringify(D.count())));
