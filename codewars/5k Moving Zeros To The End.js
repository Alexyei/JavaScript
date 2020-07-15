let moveZeros = function (arr) {
    let result = arr.filter((item)=>item!==0);
    for(let i =arr.length-result.length;i;--i)
        result.push(0);
    return result;

};
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));