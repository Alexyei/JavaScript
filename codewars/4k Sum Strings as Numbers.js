// function sumStrings(a, b) {
//     return String(TryParseBigInt(a) + TryParseBigInt(b));
// }
//
// /**
//  * @return {bigint}
//  */
// function TryParseBigInt(a) {
//     let va = BigInt(0);
//     let zeroCode = '0'.charCodeAt(0);
//     for (let i = 0;i<a.length;++i) {
//         va *= 10n;
//         va += BigInt(a.charCodeAt(i) - zeroCode);
//     }
//     return va;
// }
//
// console.log(sumStrings('123', '456'), '579');
// console.log((10**15+"").slice(0,15).length);
// let arr = [1];
// console.log(7+arr[2]);

function strToLongInt(a) {
    let longint = [];
    longint.push(+a.slice(-14));
    for (let i = 1; i <= Math.floor(a.length / 14); ++i)
        longint.push(+a.slice((i + 1) * -14, i * -14));
    return longint;
}

function sumLongInt(a, b) {
    let result = [];
    let last = 0;
    let minLengh = Math.min(a.length, b.length);
    for (let i = 0; i < minLengh; ++i) {
        result.push(a[i] + b[i] + last);
        // console.log(String(a[i]+b[i]+last).length);
        // console.log((a[i]+b[i]+last)-10**14);
        if (result[i] >= 10 ** 14) {
            last = 1;
            result[i] -= 10 ** 14;
        } else
            last = 0;
    }

    let maxLongInt = (a.length > b.length) ? a : b;
    for (let i = minLengh; i < maxLongInt.length; ++i) {
        result.push(maxLongInt[i] + last);
        if (result[i] >= 10 ** 14) {
            result[i] -= 10 ** 14;
            last = 1;
        } else
            last = 0;
    }
    if (last)
        result.push(1);


    return result;
}


function longIntToStr(a) {
    let result = '';
    for (let i = 0; i < a.length - 1; ++i) {
        result = String(a[i]).padStart(14, "0") + result;
    }
    return String(a[a.length - 1]) + result;
}

function sumStrings2(a, b) {
    return longIntToStr(sumLongInt(strToLongInt(a), strToLongInt(b)));
}

// function longIntToStr(a) {
//     return a.reduceRight((str, item)=>str+String(item).padStart(14,"0"),'');
// }

// console.log(sumStrings2('123', '456'), '579');
// console.log(sumStrings2('', '456'), '456');
// console.log(sumStrings2('789', ''), '789');
console.log(sumStrings2('', ''), '0');
console.log(sumStrings2('', '0'), '0');
console.log(sumStrings2('0', ''), '0');
console.log(sumStrings2('0', '0'), '0');
// console.log(strToLongInt('712569312664357328695151392'));
// console.log(strToLongInt('8100824045303269669937'));
// console.log(sumLongInt(strToLongInt('712569312664357328695151392'), strToLongInt('8100824045303269669937')));
// console.log(String(sumLongInt(strToLongInt('712569312664357328695151392'), strToLongInt('8100824045303269669937'))[0]).length);
console.log(sumStrings2('712569312664357328695151392', '8100824045303269669937'), '712577413488402631964821329');