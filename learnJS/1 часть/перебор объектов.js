let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries){
    return Object.entries(salaries).reduce((sum, [key, value]) => sum + value, 0);

}

console.log(sumSalaries(salaries) );
