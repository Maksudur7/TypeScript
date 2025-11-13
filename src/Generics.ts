//dynamically generalize



type GenericArray<T> = Array<T>

// const friends : string[]= ['Mr.x', 'Mr. Y', 'Mr. z']
const friends: GenericArray<string> = ['Mr.x', 'Mr. Y', 'Mr. z']
// const rollNumbers : number[] = [4,7,11]
const rollNumbers: GenericArray<number> = [4, 7, 11]
// const isEligibleList : boolean[] = [true, false, true]
const isEligibleList: GenericArray<boolean> = [true, false, true]

const sqrFunc = (value: number) => {
    return value * value;
}

sqrFunc(8)

type Coordinates<X, Y> = [X, Y]
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

const userList: GenericArray< {name: string, age: number}> =[
    {
        name: 'Mr. x',
        age: 22
    },
    {
        name: 'Mr. Y',
        age: 25
    }
]
