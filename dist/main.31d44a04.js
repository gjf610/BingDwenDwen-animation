// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"IwUp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.bingdundun-container {\n  position: relative;\n  height: 800px;\n  background: #faf5d7;\n  display: flex;\n  justify-content: center;\n}\n\n.bingdundun-container div:after,.bingdundun-container div:before {\n  position: absolute;\n  content: '';\n}\n.body {\n  position: relative;\n  width: 244px;\n  height: 278.5px;\n  top: 35px;\n  border: 5px solid #000;\n  background: #fff;\n  border-radius: 120px 120px 97px 97px/120px 120px 126px 126px;\n  z-index: 5;\n}\n.face {\n  position: absolute;\n  width: 200px;\n  height: 160px;\n  top: 16px;\n  left: 16px;\n  box-shadow: 0 0 0 2px #006bb0, 0 0 0 4px #dc2f1f, 0 0 0 6px #1d1815, 0 0 0 8px #efa90d, 0 0 0 10px #059341;\n  border-radius: 50% 50% 41% 41%/60% 60% 42% 42%;\n}\n.nose {\n  position: absolute;\n  width: 22px;\n  height: 15px;\n  top: 75px;\n  left: 88px;\n  background: #000;\n  border-radius: 10px 10px 21px 21px;\n}\n\n.mouth {\n  position: absolute;\n  width: 37px;\n  height: 24px;\n  top: 80px;\n  left: 81px;\n  border: 3px solid;\n  border-color: transparent transparent #000;\n  border-radius: 50%;\n}\n.ear{\n  position: absolute;\n}\n.ear::after,.ear::before {\n  width: 49px;\n  height: 63px;\n  top: 20px;\n  left: -100px;\n  background: #000;\n  border-radius: 50%;\n}\n.ear::after {\n  left: 50px;\n}\n\n.hand-left {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: -46px;\n  top: 179px;\n  border-radius: 50%;\n  background: #000;\n}\n\n.hand-left::before {\n  width: 0;\n  height: 0;\n  left: 5px;\n  top: -35px;\n  border: 24px solid;\n  border-color: transparent #000 #000 transparent;\n}\n\n.hand-right {\n  position: absolute;\n  width: 45px;\n  height: 88px;\n  top: 85px;\n  right: -45px;\n  background: #000;\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n  border-bottom-right-radius: 90px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.hand-right::after,.hand-right::before {\n  width: 8px;\n  height: 15px;\n  background: red;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n.hand-right::before {\n  left: 19px;\n  top: 13px;\n  -webkit-transform: rotate(20deg);\n  -ms-transform: rotate(20deg);\n  transform: rotate(19deg);\n  border-bottom-left-radius: 16px;\n}\n\n.hand-right::after {\n  left: 15px;\n  top: 15px;\n  -webkit-transform: rotate(20deg);\n  -ms-transform: rotate(20deg);\n  transform: rotate(-71deg);\n  border-bottom-right-radius: 16px;\n}\n\n.foot-top {\n  position: absolute;\n  top: 250px;\n}\n.foot-top::after,.foot-top::before {\n  width: 50px;\n  height: 20px;\n  background: #000;\n}\n.foot-top::before {\n  left: 40px;\n  border-top-right-radius: 100%;\n}\n\n.foot-top::after {\n  left: 148px;\n  border-top-left-radius: 100%;\n}\n\n.foot-bottom {\n  position: absolute;\n  top: 290px;\n}\n\n.foot-bottom::before {\n  left: 30px;\n  width: 55px;\n  height: 55px;\n  background: #000;\n  border-radius: 9px 9px 35px 14px/83px 90px 35px 14px;\n}\n\n.foot-bottom::after {\n  right: 25px;\n  width: 55px;\n  height: 55px;\n  background: #000;\n  border-radius:9px 9px 14px 35px/90px 83px 14px 35px;\n}\n\n.eye {\n  position: absolute;\n  top: 30px;\n  left: 100px;\n}\n\n.eye::before {\n  right: 25px;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.eye::after {\n  left: 25px;\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.eye::after,.eye::before {\n  width: 56px;\n  height: 75px;\n  background: #000;\n}\n.eye-hole {\n  position: absolute;\n  top: 50px;\n  left: 100px;\n  width: 10px;\n  height: 10px;\n  box-shadow: -47px 10px #fff, 46px 10px #fff;\n}\n\n.eye-hole::after,.eye-hole::before {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 4px solid #fff;\n}\n\n.eye-hole::before {\n  right: 38px;\n}\n\n.eye-hole::after {\n  left: 30px;\n}\n\n.eye-hole,.eye::after,.eye::before {\n  border-radius: 50%;\n}\n@keyframes wave {\n  0%{\n    transform: rotate(30deg);\n  }\n  15%{\n    transform: rotate(20deg);\n  }\n  30%{\n    transform: rotate(10deg);\n  }\n  60%{\n    transform: rotate(0deg);\n  }\n  75%{\n    transform: rotate(10deg);\n  }\n  90%{\n    transform: rotate(20deg);\n  }\n  100%{\n    transform: rotate(30deg);\n  }\n}\n.body:hover > .hand-right{\n  animation: wave 1500ms infinite linear;\n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 25,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    style: document.querySelector('#style')
  },
  events: {
    "#btnPause": 'pause',
    "#btnPlay": 'play',
    "#btnSlow": 'slow',
    "#btnNormal": 'normal',
    "#btnFast": 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = _style.default.substr(0, player.n);
    player.ui.style.innerHTML = _style.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _style.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _style.default.substr(0, player.n);
    player.ui.style.innerHTML = _style.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    // window.clearInterval(id)
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 50;
    player.play();
  },
  norm: function norm() {
    player.pause();
    player.time = 25;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./style.js":"IwUp"}]},{},["epB2"], null)
//# sourceMappingURL=main.31d44a04.js.map