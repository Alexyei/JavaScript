let maxSequence = function (arr) {
    let local = 0;
    let global = 0;

    for (let i = 0; i < arr.length; ++i)
        if (arr[i] >= 0)
            local += arr[i];
        else {
            global = Math.max(local, global);
            local = Math.max(local + arr[i], 0);
        }
    return Math.max(local, global);
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));