let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if (prop in target) {
                return Reflect.get(...arguments);
            } else {
                throw new Error("такого свойства не существует"); // значение по умолчанию
            }
        }
    });
}

user = wrap(user);

console.log(user.name); // John
//console.log(user.age); // Ошибка: такого свойства не существует

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop) {
        let num = parseInt(prop);
        if (num && num < 0) {
            prop = (target.length + num)
        }

        if (prop in target) {
            return Reflect.get(...arguments);
        }
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
console.log(array[-3]); // 3
console.log(array[-4]); // 2
console.log(array[0]); // 3
console.log(array[1]); // 2
console.log(array[2]); // 3
console.log(array[3]); // 3
console.log(array[-7]); // 2

function makeObservable(target) {
    let proxy = new Proxy(target, {
        set(target, prop, val, receiver) {
            if (this.setHandler) this.setHandler(key, val);
            return Reflect.set(...arguments); // (2)
        }
    });
    proxy.observe= function(handler){
        proxy.setHandler = handler;
    }

    return proxy;
}

let user1 = {};
user1 = makeObservable(user1);

user1.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user1.name = "John"; // выводит: SET name=John
