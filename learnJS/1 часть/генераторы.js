function* pseudoRandom(seed) {
    let next = seed;
    while (true) {
        next = next * 16807 % 2147483647
        yield next;
        // seed = yield seed * 16807 % 2147483647
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073

let range = {
    from: 1,
    to: 5,

    async *gen() { // то же, что и [Symbol.asyncIterator]: async function*()
        for(let value = this.from; value <= this.to; value++) {

            // пауза между значениями, ожидание
            await new Promise(resolve => resolve());

            yield value;
        }
    }
};
let x = range.gen().next().then(result=>console.log(result));
// setTimeout(()=>console.log(x),1000);
// setTimeout(()=>console.log(x),10000);
