function sumAll(...args) { // args — имя массива
    let sum = 0;

    for (let arg of args) sum += arg;

    console.log(Array.isArray(args),Array.isArray(arguments));
    return sum;
}

console.log(sumAll(4,5,7));