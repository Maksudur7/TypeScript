// nullable types

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB : ${input}`);
    } else {
        console.log('From DB : All user');
    }
}

getUser("Mezba")

// unknown types 

const DiscountCalculator = (input: unknown) => {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1
        console.log(discountedPrice);
    } else if (typeof input === 'string') {
        const [discountedPrice] = input.split("");
        console.log(Number(discountedPrice) * 0.1);
    } else {
        console.log('wrong input');
    }
}
DiscountCalculator(100)
DiscountCalculator('100 TK')
DiscountCalculator(null)
