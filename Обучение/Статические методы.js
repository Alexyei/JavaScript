class Animal {

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }

}

Animal.AnimalMethod = ()=>console.log("method in animal");

// Наследует от Animal
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} прячется!`);
    }

    static compare1(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

Rabbit.RabbitMethod = ()=>console.log("method in Rabbit");

let rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.