'use strict';

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
                      title = "Untitled",
                      width: w = 100,  // width присваиваем в w
                      height: h = 200, // height присваиваем в h
                      items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
                  ,...rest}) {
    console.log( `${title} ${w} ${h}` ); // My Menu 100 200
    console.log( item1 ); // Item1
    console.log( item2 ); // Item2
    console.log( rest); // Item2
}
showMenu(options);
options.descripton ="Описание";
showMenu(options);

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
let {name, years:age,isAdmin=false} = user;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let max = [null,0];
for (const [key, value] of Object.entries(salaries)) {
    if (value >= max[1])
        max = [key, value];
}

console.log(max[0]);
salaries = {};
max = [null,0];
console.log(max[0]);