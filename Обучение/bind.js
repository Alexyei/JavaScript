function f() {
    console.log(this.name);
}

f = f.bind( {name: "Вася"});
f.apply({name: "Петя"});

f();
