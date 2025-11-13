// Generic Function 

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithUserObj = (value: { id: number, name: string }) => {
    return [value]
}

// constaien 

type student = {
    id: number;
    name: string;
}

const createArrayWithGeneric = <T extends student>(value: T) => {
    return [value];
}

const arrObj = createArrayWithGeneric({
    id: 123,
    name: "Next Level"
})

console.log(arrObj);

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [param1, param2]
