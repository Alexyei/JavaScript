let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
let {name, years: age, isAdmin = false}= user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
//     let [name] = [Object.entries(salaries).reduce((max, [key, val])=>Math.max(max,val), -Infinity)];
// return name;
    //return Object.entries(salaries).reduce(([name, max], [key, val])=>[key, Math.max(max,val)])[0];
    let name = null;
    Object.entries(salaries).reduce((max, [key, val])=>val>max?(name = key,val):max, -Infinity);
    return name;
}

console.log(topSalary(salaries));
