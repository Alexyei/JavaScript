function sum(a) {
    return b => a + b;
}

console.log(sum(1)(2))// = 3
console.log(sum(5)(-1))// = 4


function inBetween(from, to) {
    return item => item >= from && item <= to
}

function inArray(arr) {
    return item => arr.includes(item)
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(field){
    return (a, b) => a[field] > b[field] ? 1 : -1
}

console.log(users);
users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);


function makeArmy() {
    let shooters = [];


    for(let i = 0;i < 10;i++) {
        let shooter = function() { // функция shooter
            console.log( i); // должна выводить порядковый номер
        };
        shooters.push(shooter);

    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10


