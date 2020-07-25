function zero() {
    return arguments.length ? arguments[0](0) : 0;
}

function one() {
    return arguments.length ? arguments[0](1) : 1;
}

function two() {
    return arguments.length ? arguments[0](2) : 2;
}

function three() {
    return arguments.length ? arguments[0](3) : 3;
}

function four() {
    return arguments.length ? arguments[0](4) : 4;
}

function five() {
    return arguments.length ? arguments[0](5) : 5;
}

function six() {
    return arguments.length ? arguments[0](6) : 6;
}

function seven() {
    return arguments.length ? arguments[0](7) : 7;
}

function eight() {
    return arguments.length ? arguments[0](8) : 8;
}

function nine() {
    return arguments.length ? arguments[0](9) : 9;
}

function plus() {
    return (a) => a + arguments[0];
}

function minus() {
    return (a) => a - arguments[0];
}

function times() {
    return (a) => a * arguments[0];
}

function dividedBy() {
    return (a) => a / arguments[0] >> 0;
}

//
// console.log(zero());
// console.log(zero(plus(zero())));
//console.log(zero(plus(zero())));

console.log(three(dividedBy(two())));

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3