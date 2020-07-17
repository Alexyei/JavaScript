"use strict";
let worker = {
    slow(min, max) {
        console.log(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    // return function() {
    //     let key = hash(arguments); // (*)
    //     if (cache.has(key)) {
    //         return cache.get(key);
    //     }
    //
    //     let result = func.call(this, ...arguments); // (**)
    //
    //     cache.set(key, result);
    //     return result;
    // };
    return function (...args) {
        let key = hash(args); // (*)
        // let key = hash(...args); 

        // console.log(typeof(...args)); ERROR!!!
        // console.log(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...args); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    // console.log(arguments);
    // console.log(args);
    // console.log(args[0],args[1]);
    // console.log(typeof(args));
    // console.log(typeof (args[0] + ',' + args[1]));
    return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // работает
console.log("Again " + worker.slow(3, 5)); // аналогично (из кеша)