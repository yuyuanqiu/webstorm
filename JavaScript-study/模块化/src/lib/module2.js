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