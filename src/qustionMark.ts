// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null / undefind
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log('you are elegible');
    // } else{
    //     console.log('You are not eligible !');
    // }

    const retult = age >= 21 ? 'You are eligible' : ' you are not eligible !'
    console.log(retult);
}

biyerJonnoEligible(21)

const userTheme = undefined;
const selectedTheme = userTheme ?? 'Light them'
console.log(selectedTheme);