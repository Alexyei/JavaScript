"use strict"
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
        // if (!this.stomach)
        //     this.stomach = [];
        // this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
// speedy.eat("apple");
// speedy.eat("banana");
// console.log( speedy.stomach ); // apple
//
// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log( lazy.stomach ); // apple


Function.prototype.defer = function (ms){
    setTimeout(this, ms);
}

function f() {
    console.log("Hello!");
}

//f.defer(1000); // выведет "Hello!" через 1 секунду


Function.prototype.deferDec = function (ms){
    let f = this;
    return function(...args){
        setTimeout(()=>f.apply(this,args), ms);
    }

}

function f1(a, b) {
    console.log( a + b );
}

//f1.deferDec(1000)(1, 2); // выведет 3 через 1 секунду

let animal = {
    eats: true
};

let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

//console.log(rabbit.jumps); // true

let dictionary = Object.create(null, {
    toString: {
        value(){
            return Object.keys(this).join();
        }
    }
});

// ваш код, который добавляет метод dictionary.toString
// dictionary.toString = function (){
//
// }


// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"
console.log(dictionary.toString())


function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};

let rabbit1 = new Rabbit("Rabbit");

rabbit1.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit1).sayHi();
rabbit1.__proto__.sayHi();
