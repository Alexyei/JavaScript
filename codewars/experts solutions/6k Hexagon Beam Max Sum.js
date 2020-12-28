const maxHexagonBeam = (n, seq) => {

    let n2 = n * 2 - 1,
        sums = Array(n2 * 3).fill(0),
        elFrom = (elCur = 0),
        elTo = n;
    for (let i = 0; i < n2; i++) {
        for (let j = elFrom; j < elTo; j++) {
            sums[i] += seqEl = seq[elCur % seq.length];
            sums[n2 + j] += seqEl;
            sums[n2 * 2 + (n - 1) + (i - j)] += seqEl;
            elCur++;
        }
        i < n - 1 ? elTo++ : elFrom++;
    }
    return sums.reduce((max, e) => Math.max(max, e), -Infinity);
}
