// масив строк
let arrayString: string[];

arrayString = ['text', 'text1']

export { arrayString }

// масив чисел

let arrayNumber: number[];

arrayNumber = [12, 45]

export { arrayNumber }

// масив обєктів

type User = {
	name: string,
	age: number
}

let users: User[] = [{ name: 'alec', age: 10 }, { name: 'kage', age: 15 }]

// тип даних Any

let arrayAny: any[];

arrayAny = ['text', 10, true, {name: 'cat', age:1}, [1,21,54]];

export {arrayAny}