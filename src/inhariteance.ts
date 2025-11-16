class Student {
    constructor(public name : string, public age: number, public address : string){
    }

    getSleep(numOfHours : number){
        console.log(`${this.name} ${numOfHours} ghonta ghumai`);
    }
}

class Teacher extends Student {
    constructor(public name : string, public age: number, public address : string, public designation : string){
        super(name, age, address)
        this.designation = designation
    }

    getSleep(numOfHours : number){
        console.log(`${this.name} ${numOfHours} ghonta ghumai`);
    }

    takeClass(numOfClass : number){
        console.log(`${this.name} ${numOfClass} ghonta class nei`);
    }
}

const student1 = new Student('Mr. fakibazz', 18, 'Bangladesh')
student1.getSleep(15)

const teacher1 = new Teacher('Mr. Teachar',25, 'Bangladesh', ' Senior teacher')
console.log(teacher1.takeClass(4));