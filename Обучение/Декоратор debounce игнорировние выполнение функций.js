let f = debounce(console.log, 1000);

function debounce(f,ms){
    let lastTime = Date.now()-ms;
    return function (...args) {
        if (lastTime+ms <= Date.now()){
            lastTime=Date.now();
            f.apply(this,args);
        }
    }
}

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)