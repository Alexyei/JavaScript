let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest"); // Теперь всё в порядке
    }
};
function func(){
    console.log("Test");
}
let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (вложенный вызов работает)
func();

function makeCounter() {
    let count = 0;

    return function f() {
        f.set = v=>count=v;
        f.decrease = ()=>--count;
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log(counter.set(7));
console.log( counter() ); // 2
console.log(counter.decrease());
console.log(counter.decrease());
console.log( counter() ); // 2
console.log();
console.log();

function makeCounter1() {


    function f() {
        return f.count++; // есть доступ к внешней переменной "count"
    }
    f.count=0;
    f.set = v=>f.count=v;
    f.decrease = ()=>--f.count;
    return f;
}

counter = makeCounter1();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log(counter.set(7));
console.log( counter() ); // 2
console.log(counter.decrease());
console.log(counter.decrease());
console.log( counter() ); // 2
console.log();
console.log();

function sum(v){
    let count = v;
    next[Symbol.toPrimitive] = function(hint) {
        return count;
    };

    function next(v){
        count+=v;
        return next;
    }
    return next;
}

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);
