function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {
    decorator.calls = [];

    function decorator(...args) {
        decorator.calls.push(args)
        func.apply(this, arguments);
    }

    return decorator;

}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(4, 5);
for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}


function f1(x) {
    console.log(x);
}

function delay(func, time) {
    return function (...args) {
        setTimeout(() =>
            func.apply(this, args), time);
    }
}

// создаём обёртки
let f1000 = delay(f1, 1000);
let f1500 = delay(f1, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

function debounce(func, time) {
    let last;
    return function (...args) {
        let now = Date.now();
        if (!last || now - last >= time) {
            last = now;
            return func.apply(this, args);
        }
    }
}

let f = debounce(console.log, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован
//
// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


function f2(a) {
    console.log(a)
}

function throttle(func, ms) {
    let isCooldown = false,
        savedArgs,
        sacedThis;

    function w() {

        if (isCooldown) {
            savedArgs = arguments;
            sacedThis = this;
            return;
        }

        func.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => {
            isCooldown = false;
            if (savedArgs) {
                w.apply(sacedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return w;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f10001 = throttle(f2, 5000);

f10001(1); // показывает 1
f10001(2); // (ограничение, 1000 мс ещё нет)
f10001(3); // (ограничение, 1000 мс ещё нет)
