function digital_root(n) {
    while(n>9)
        n=+String(n).split("").reduce((sum,item)=>sum+item.charCodeAt(0)-"0".charCodeAt(0),0)
    return n;
}