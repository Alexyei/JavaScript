function dotsdfAndBoxes(ar) {
    let n = (Math.sqrt(2 * ar.length + 1) - 1) / 2
    // console.log(n)
    let table = Array(n ** 2).fill(4)
    // console.log(table)
    let firstPlayer = true
    let count = 0;

    function setSquare(r, c) {

        // if (!table[r * n + c]) {
        //     firstPlayer && (count += 1)
        // } else {
        //     firstPlayer = !firstPlayer;
        // }
        return table[r * n + c] -= 1, !table[r * n + c]
    }

    function changePlayer(...args) {
        console.log(firstPlayer)
        args.some((v) => v) ?
            // (console.log("SQR!"),
            firstPlayer && (count += args.filter(x => x===true).length)
    // )
            : firstPlayer = !firstPlayer;
    }

    ar.forEach((v) => {
        v.sort((a, b) => a - b)
        console.log(v)
        // console.log(firstPlayer)
        let row = Math.trunc(v[0] / (n + 1));
        let col = v[0] % (n + 1);
        // горизонтальное ребро
        if (v[1] - v[0] === 1) {
            if (row === 0)
                changePlayer(setSquare(row, col));
            else if (row === n)
                changePlayer(setSquare(row - 1, col));
            else {
                changePlayer(setSquare(row, col),
                    setSquare(row - 1, col));
            }
        }
        // вертикальное ребро
        else {
            // col = v[0] % (n+1);
            if (col === 0)
                changePlayer(setSquare(row, col));
            else if (col === n)
                changePlayer(setSquare(row, col - 1));
            else {
                changePlayer(setSquare(row, col),
                    setSquare(row, col - 1));
            }
        }
    });
console.log(table)
    return [count, table.length - count]
}

const example_tests = [
    // [[0,1],[7,8],[1,2],[6,7],[0,3],[5,8],[3,4],[1,4],[4,5],[2,5],[4,7],[3,6]],
    // [[0,1],[1,2],[2,5],[5,4],[4,7],[7,8],[8,5],[1,4],[6,7],[3,6],[3,0],[3,4]],
    // [[0,1],[7,8],[1,2],[6,7],[0,3],[8,5],[3,4],[4,1],[4,5],[2,5],[3,6],[7,4]],
    // [[0, 1], [5, 9], [9, 8], [13, 9], [7, 11], [0, 4], [9, 10], [10, 6], [4, 5], [2, 3], [13, 14], [4, 8], [8, 12], [1, 5], [5, 6], [14, 15], [10, 11], [2, 6], [12, 13], [1, 2], [10, 14], [15, 11], [6, 7], [3, 7]],
    // [[5, 9], [6, 10], [9, 13], [7, 11], [4, 5], [5, 6], [6, 7], [8, 12], [1, 5], [2, 6], [8, 9], [10, 14], [10, 11], [4, 8], [12, 13], [9, 10], [1, 2], [11, 15], [13, 14], [14, 15], [0, 4], [0, 1], [3, 7], [2, 3]],
    [[5,6],[12,17],[16,21],[13,14],[2,7],[5,10],[13,18],[17,18],[10,11],[15,20],[21,22],[1,6],[7,8],[10,15],[15,16],[8,3],[18,23],[0,5],[6,7],[8,13],[11,12],[11,16],[22,23],[17,22],[20,21],[6,11],[16,17],[0,1],[7,12],[12,13],[2,3],[14,19],[23,24],[1,2],[8,9],[19,24],[18,19],[9,14],[4,9],[3,4]]
];
const example_solutions = [[3, 1], [2, 2], [1, 3], [2, 7], [6, 3]];

example_tests.forEach((v) => console.log(dotsdfAndBoxes(v)));
