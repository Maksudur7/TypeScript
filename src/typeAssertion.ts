
let anything: any;

anything = '22';

(anything as string).at

const kgToGmConverter = (input: string | number): string | number | undefined => {
    if (typeof input === 'number') {
        return input * 1000
    } else if (typeof input === 'string') {
        const [value] = input.split('')
        return `Converted output is :${value}`
    }
}

const retult1 = kgToGmConverter(2) as number
console.log(retult1);
const result2 = kgToGmConverter('2 kg')
console.log(result2);