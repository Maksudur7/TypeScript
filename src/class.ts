// oop - class - object

// class Animal {
//     name : string;
//     species : string;
//     sound : string;

//     constructor(name:string, species : string, sound: string){
//         this.name = name 
//         this.species = species
//         this.sound = sound
//     }

//     makeSound(){
//         console.log(`${this.name}The animal is making sound ${this.sound}`);
//     }
// }

// paramiter propartis 

class Animal {
    constructor(public name:string, public species : string, public sound: string){  
    }
    makeSound(){
        console.log(`${this.name}The animal is making sound ${this.sound}`);
    }
}

const dog = new Animal('dogesh bhai', 'dog', ' Ghew ghew')
console.log(dog.sound);

const cat = new Animal('mao vai' , 'mao ', 'mao vai')
console.log(cat.makeSound());
