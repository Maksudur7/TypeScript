type USER = {
    id: number,
    name: {
        fristName: string,
        lastName: string
    },
    gender: 'male' | ' female',
    contactNo: string,
    address: {
        divition: string,
        city: string
    }

}

const user1: USER =  {
    id: 123,
    name: {
        fristName: 'mr',
        lastName: 'x'
    },
    gender: "male",
    contactNo: '0123',
    address: {
        divition: 'chattogram',
        city: 'chattogram'
    }
}

type IsAdmin = true;
const isAdmin : IsAdmin = true;

type name = string

const myName : name = 'Me. x';

// function

type AddFunc = (num1 : number, num2 : number) => number

const add : AddFunc = (num1, num2) => num1+num2