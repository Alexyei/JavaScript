let i =0;

/*все элементы массива разные*/
function solver(arr,n,q){
    const result = []
    // console.log("arr = "+arr)
    // console.log("res = "+result)
    console.log(i);
    i = 0;
    return (function go(sum) {
        i++;
        // console.log("arr = "+arr)
        // console.log("res = "+result)
        if (result.length === arr.length) return result
        for (const x of arr) {
            if (!result.includes(x) && sum - (result[result.length-n]||0) + x <= q) {
                result.push(x)
                // console.log("r");
                const r = go(sum - (result[result.length-n-1]||0) + x)
                if (r) return r
                result.pop()
            }
        }
        // возвращает undefined если не удалось переставить
    })(0) || []
}

const example_tests = [
    [[3,5,7,1,6,8,2,4],3,13],
    [[3,5,7,1,6,8,2,4],3,10],
    [[7,12,6,10,3,8,5,4,13,2,9],4,28],
    [[9,16,11,6,15,14,19,3,12,18,7],3,35],
    [[33,34,29,25,36,30,27,32,21,35,39],5,155],
    [[22,14,30,25,29,19,21,17,15,32,20],4,92],
];

example_tests.forEach(x=>console.log(solver(...x)));
