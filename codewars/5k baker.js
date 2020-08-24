function cakes(recipe, available) {
    if ( Object.keys(recipe).length>Object.keys(available).length)
        return 0;
    let max = Infinity;
    for(let key of Object.keys(recipe)){
        console.log(~~(available[key]/recipe[key]));
        max = Math.min(max,~~(available[key]/recipe[key]));
        if (!(max)) return 0;
    }
    return max;

}
// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
console.log(cakes({"sugar":18,"milk":54,"chocolate":11},
    {"sugar":4200,"chocolate":9700,"milk":7800} ));
