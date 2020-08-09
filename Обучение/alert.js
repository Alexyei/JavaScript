"use strict";
function sum(a) {
    sum.value = a;
    function fsum(a){
        sum.value+=a;
        return fsum;
    }
    fsum[Symbol.toPrimitive]=()=>sum.value;

    return fsum;
}

console.log(sum(1)(2)==3)
console.log(sum(1)(2)(3) == 6);
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);
console.log(sum.value);

function sum1(a) {
    let value = a;
    function fsum(a){
        value+=a;
        return fsum;
    }
    fsum[Symbol.toPrimitive]=()=>value;

    return fsum;
}

console.log(sum1(1)(2)==3);
console.log(sum1(1)(2)(3) == 6);
console.log(sum1(5)(-1)(2) == 6);
console.log(sum1(6)(-1)(-2)(-3) == 0);
console.log(sum1(0)(1)(2)(3)(4)(5) == 15);
console.log(sum1.value);

function sayHi() {
    console.log(this);
}

