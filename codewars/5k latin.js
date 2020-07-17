function pigIt(str){
    return str.split(" ").map((item)=>(isAlphaNum(item))?item.slice(1)+item[0]+"ay":item).join(" ");
}

function isAlphaNum(str){
    return str.search(/[^A-Za-z0-9]/) == -1;
}
console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));