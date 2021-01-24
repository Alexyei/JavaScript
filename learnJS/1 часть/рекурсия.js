function sumTo(n) {
    return (1 + n) * n / 2;
}

function sumToI(n) {
    let sum = 0;

    for (let i = 1; i <= n; ++i)
        sum += i;

    return sum;
}

function sumToR(n) {
    return (n === 1) ? 1 : n + sumToR(n - 1);
}


// for(let i=1;i<=100;++i)
// {
//     console.log("sum: "+sumTo(i));
//     console.log("sum: "+sumToI(i));
//     console.log("sum: "+sumToR(i));
//     console.log();
// }
//
// console.log("sum: "+sumTo(100000));
// console.log("sum: "+sumToI(100000));
// // console.log("sum: "+sumToR(100000));
// console.log();
//
// function isInt(n){
//     return Number(n) === n && n % 1 === 0;
// }
//
// console.log(isInt(sumTo(100000)));


function fib(n) {
    return (n <= 2) ? 1 : fib(n - 1) + fib(n - 2);
}

function fibI(n) {
    let a = 1, b = 1;
    for (let i = 2; i < n; ++i) {
        [a, b] = [b, a + b]
    }

    return b;
}

// console.log(fib(3));
// console.log(fib(7));
// // console.log(fib(77));
// console.log(fibI(3));
// console.log(fibI(7));
// console.log(fibI(77));


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

// printList(list);

function printListR(list) {
    console.log(list.value);
    if (list.next) {
        printListR(list.next);
    }
}

// printListR(list);

function printListReverse(list) {
    let items = [];
    while (list) {
        items.push(list.value);
        list = list.next;
    }
    items.reverse().forEach(item=>console.log(item));
}

function printListReverseR(list) {

    if (list.next) {
        printListReverseR(list.next);
    }
    console.log(list.value);
}

printListReverse(list);
printListReverseR(list);
