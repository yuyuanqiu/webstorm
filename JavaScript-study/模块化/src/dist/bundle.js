(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module1.js");

var _module2 = require("./module2.js");

(0, _module.foo_mode1)();
(0, _module.bar_mode1)();
(0, _module2.foo_mode2)();
(0, _module2.bar_mode2)();
},{"./module1.js":2,"./module2.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo_mode1 = foo_mode1;
exports.bar_mode1 = bar_mode1;
function foo_mode1() {
    console.log("foo in module1");
}

function bar_mode1() {
    console.log("bar in module1");
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function foo_mode2() {
    console.log("foo in module2");
}

function bar_mode2() {
    console.log("bar in module2");
}

exports.foo_mode2 = foo_mode2;
exports.bar_mode2 = bar_mode2;
},{}]},{},[1]);
