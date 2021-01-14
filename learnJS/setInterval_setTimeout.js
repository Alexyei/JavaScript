function printNumbersI(from, to){
    //let printNumber = ()=>(from>to)?clearInterval(timerId):console.log(from++);
    let printNumber =()=>{console.log(from++);if (from>to) clearInterval(timerId);}

    let timerId = setInterval(printNumber,1000, from);
    // if (from>to)
    //     clearInterval(timerId);
}

function printNumbersTR(from, to){
    let printNumber =()=>{console.log(from++);if (from<=to) setTimeout(printNumber, 1000);}
    setTimeout(printNumber,1000);
    //let timerId = setInterval(printNumber,1000, from);
}

//printNumbersI(1, 5);
printNumbersTR(1, 5);
