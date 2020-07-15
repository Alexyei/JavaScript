let value = "Сюрприз!";

function f() {
    let value = "ближайшее значение";

    function g() {
        debugger; // в консоли: напишите alert(value); Сюрприз!
    }

    return g;
}

let g = f();
g();