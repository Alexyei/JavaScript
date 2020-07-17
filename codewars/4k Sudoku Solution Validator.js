function validSolution(board) {
    let sqsums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let colsums = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 9; ++i)
        for (let k = 1; k < 10; ++k) {
            let j = board[i].indexOf(k);
            if (j === -1)
                return false;
            else {
                colsums[j] += k;
                sqsums[Math.floor(i / 3) * 3 + Math.floor(j / 3)] += k;
            }
        }

    return sqsums.every(sum => sum === 45) && colsums.every(sum => sum === 45);
}

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);