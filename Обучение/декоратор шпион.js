"use strict";
function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

function spy(func){
    f.calls = [];
    function f(...args){
        console.log(f.calls);
        f.calls.push(args);
        func.apply(this, args);
    }
    return f;
}
function sayHi() {
    console.log(this);
}

sayHi(); // undefined
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
console.log(work.calls);
for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}