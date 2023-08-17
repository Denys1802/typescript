// type AnimalName = {
// 	name: string
// }

// type AnimalAge = {
// 	age: number
// }

// type Animal = AnimalName & AnimalAge


// let dog: Animal = {
// 	name: "bob",
// 	age: 10
// }

// console.log(dog);


// export {dog}
//===================================================================================


// interface Animal {
// 	name: string
// }

// interface Dog extends Animal {
// 	bark: string
// }

// class MyDog implements Dog {
// 	name = "Fido";
// 	bark = "Wofff";
// }
// const dog = new MyDog


// console.log(dog.name);
// console.log(dog.bark);



// export {dog}

//=====================================================================


interface Walkable{
	walk(): void
}

interface Eatable{
	eat(): void
}

class Animal implements Walkable, Eatable{
	walk(): void {
		console.log("The animal walks");
		
	}

	eat(): void {
		console.log("The animal eating");
		
	}
}

const animal = new Animal

animal.walk()
animal.eat()

export {animal}