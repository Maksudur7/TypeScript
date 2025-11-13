// keyof : type operator
type RichPeoplesVehicle = {
    car : string;
    bike : string;
    cng : string;
}

type MyVehicle1 = 'bike' | 'car' | 'cng'
type MyVehicle2= keyof RichPeoplesVehicle

const myVehicle : MyVehicle2 = 'bike'

const user = {
    id: 222,
    name : "Mezba",
    address : {
        city : 'ctg'
    }
}

const myId = user['id'];
const myName = user['name'];
const address = user['address'];

console.log(myId);
console.log(myName);
console.log(address);