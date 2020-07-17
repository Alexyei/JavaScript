"use strict";
function printNumbers(from, to){
    console.log(from);
    if (from+1>to)
        return;
    setTimeout(printNumbers,1000,from+1,to);
}

function printNumbersI(from, to){
    let intid = setInterval(()=>{console.log(from++);if (from>to) clearInterval(intid);},1000);
}


// printNumbers(1,10);
printNumbersI(1,10);