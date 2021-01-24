let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
    // return Array.from(new Set(arr.map((val)=>new Set(Array.from(val.toLowerCase())))));
    // return Array.from(new Set(arr.map(val=>Array.from(val.toLowerCase()).sort().join(""))))
    // return Array.from(
    //     new Set(
    //         arr.map(val=>Array.from(val.toLowerCase()))
    //     )
    // ).map(val=>val.join(""))


    // return arr.filter(val=>{
    //     let key = Array.from(val.toLowerCase()).sort().join("");
    //     return !this.uniq.has(key) && this.uniq.add(key)
    //     }, {uniq: new Set()})
    let uniq = new Set();
    return arr.filter(val=>{
        let key = Array.from(val.toLowerCase()).sort().join("");
        return !uniq.has(key) && uniq.add(key)
    })
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
