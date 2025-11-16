// Polimorphism : bohurupi

class Person {
    getSleep() {
        console.log(`I am a normal happy person. I sleep for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I am student . I sleep 7 hours`);
    }
}

class NextLeveldevloper extends Person {
    getSleep() {
        console.log(`I am a Next Lavel Devloper . I sleep for 6 hours`);
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep()
}

const Person1 = new Person()
const Person2 = new Student()
const Person3 = new NextLeveldevloper()

getSleepingHours(Person1)
getSleepingHours(Person2)
getSleepingHours(Person3)

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {

    radius: number;

    constructor(radius: number) {
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const getArea = (param: Shape) => {
    console.log(param.getArea());
}

const circle1 = new Circle(15)

getArea(circle1)