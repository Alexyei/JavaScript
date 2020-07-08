"use strict"
function filterRangeInPlace(arr, start, end){
   let range = arr.filter(value => value>=start && value<=end);
    arr.length = 0;
    range.forEach((item)=>arr.push(item));
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]
console.log(+'0000');