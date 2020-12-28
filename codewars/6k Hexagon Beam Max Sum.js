// let a = [1,2]
// let b = [3,4]
// console.log(a[7])
// b[0]+=a[7]||0
//
// console.log(b)
// console.log((-2) % 10)
console.log(Math.max(-10, NaN || -10))
console.log(Math.max(-10, undefined))
console.log(Math.max(-10, null))
function maxHexagonBeam(n, seq) {
    // @param {int} n
    // @param {Array} seq
    // your code goes here
    let a = new Array(n * 2 - 1).fill(0)
    let b = new Array(n * 2 - 1).fill(0)
    let c;

    let index = 0;

    for (let i = 0; i < n * 2 - 1; ++i) {
        let k = n * 2 - 1 - Math.abs(n - i - 1);
        // console.log(seq[0 % seq.length])
        // console.log(seq[1 % seq.length])
        let temp = new Array(k).fill(0).map((v) => seq[index++ % seq.length]);
        // console.log(temp);
        let sumc = 0;
        // for (let j = 0; j < temp.length; ++j) {
        //     a[(i >= n ? i - n + 1 : 0) + j] += temp[j]
        //     b[n * 2 - 1 - temp.length + j - (i >= n ? i - n + 1 : 0)] += temp[j]
        //     sumc += temp[j];
        // }
        temp.forEach((v, j) => {
            a[(i >= n ? i - n + 1 : 0) + j] += v;
            b[n * 2 - 1 - temp.length + j - (i >= n ? i - n + 1 : 0)] += v;
            sumc += v;
        });
        c = Math.max(sumc, c || sumc);
    }
// console.log(Math.max(a));
//     console.log(Math.max(b));
//     console.log(c);
//     console.log(Math.max(c, ...a, ...b));
//     return Math.max(c, Math.max(...a), Math.max(...b));
    return Math.max(c, ...a, ...b);
}

function maxHexagonBeam1(n, seq) {
    let a = new Array(n * 2 - 1).fill(0)
    let b = new Array(n * 2 - 1).fill(0)
    let c = 0;

    let index = 0;

    for (let i = 0; i < n * 2 - 1; ++i) {
        c = Math.max(c, new Array(n * 2 - 1 - Math.abs(n - i - 1)).fill(0).map((v) => seq[index++ % seq.length]).reduce((sum, v, j, temp) => {
            a[(i >= n ? i - n + 1 : 0) + j] += v;
            b[n * 2 - 1 - temp.length + j - (i >= n ? i - n + 1 : 0)] += v;
            return sum + v;
        }, 0));
    }

    return Math.max(c, ...a, ...b);
}

const example_tests = [
    [2, [5, 8, 3, 8]],
    [3, [1, 3, 5, 7]],
    [4, [2, 4, 6, 8]],
    [5, [1, 0, 4, -6]],
    [5, [2]]
];
const example_solutions = [24, 23, 34, 9, 18];

example_tests.forEach((v) => {console.log(maxHexagonBeam(v[0], v[1])), console.log(maxHexagonBeam1(v[0], v[1]))});
