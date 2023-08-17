let mixedType: string | boolean | number | object;

mixedType = " string";
mixedType = 10;
mixedType = false;
mixedType = {}

export {mixedType}


// type Dog = {
//     legs: 4,
//     bark: () => void
// }

// type Fish = {
//     fins: 2,
//     swim: () => void
// }

// let pet: Dog | Fish;

// function isDog(pet: Dog | Fish): pet is Dog {
//     return 'bark' in pet;
// }

// if (isDog(pet)) {
//     pet.bark();
// } else {
//     pet.swim();
// }