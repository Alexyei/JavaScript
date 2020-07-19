"use strict";

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};
// Function.prototype.defer = (ms) => {
//     console.log(this);
//     setTimeout(this, ms);
// }; //this берётся из лексического окружения, в стрелочных функциях нет своего this
function f() {
    console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

Function.prototype.defer1 = function (ms) {
    function f(...args) {
        // console.log(this); // undefined потеря this
        setTimeout(this, ms, ...args);
    }
    return f.bind(this);
};

// Так тоже работает this берётся из лексического окружения
Function.prototype.defer1 = function (ms) {
    return (...args) => setTimeout(this, ms, ...args);
};

function f1(a, b) {
    console.log(a + b);
}

f1.defer1(1000)(1, 2); // выведет 3 через 1 секунду.