// oop : instance of type guard / type narrowing
class Person {
    constructor(public name: string) {

    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} gonta gumay`);

    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} gonta study kora`);
    }

}

class Teachar extends Person {
    constructor(name: string) {
        super(name)
    }

    takeClass(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} gonta class nei`);

    }
}

const getUserInfo = (user: Person) => {
    if (user instanceof Student) {
        user.doStudy(10);
    } else if (user instanceof Teachar) {
        user.takeClass(5)
    } else {
        user.getSleep(15)
    }
}

const student1 = new Student("Mr. student")
const teacher1 = new Teachar("Mr. Teacher")
getUserInfo(student1)
getUserInfo(teacher1)