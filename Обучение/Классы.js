class User {
    name = "Аноним";

    sayHi() {
        console.log(`Привет, ${this.name}!`);
    }
}

let user = new User();
user.sayHi();
new User().sayHi();
console.log(User.name); // имя функции
console.log(User.sayHi);

function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function() {
        clearInterval(timer);
    };

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };

}

class Clock1 {
    //деструктурирующее присваивание
    constructor({template}) {
        this.template = template;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(()=>this.render(), 1000);
    };
}

let clock = new Clock({template: 'h:m:s'});
let clock1 = new Clock1({template: "h:m:s"});
// clock.start();
clock1.start();
// clock1.stop();
let stop = setTimeout(()=>clock1.stop.call(clock1),5000);
setTimeout(()=>clearInterval(stop),5000);

