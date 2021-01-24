// let filterRangeInPlace = (arr, from, to) => filter =>
//     arr.splice(0, arr.length, ...(filter))(arr.filter(item=>item>=from && item<=to));

let filterRangeInPlace = (arr, from, to) => {
    let filter = arr.filter(item=>item>=from && item<=to);
    console.log(filter)
    return arr.splice(0, arr.length, ...(filter));
}

let arr = [1,2,3];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]
