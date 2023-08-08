// let user: { name: string, age: number } = {
// 	age: 30,
// 	name: 'Alex'
// };

// let userLikeName: { name: string, age: number } = {
// 	age: 40,
// 	name: "Allan"
// }

// export{}
// використання type


type User = {
	name: string,
	age: number,
	
}

let user: User = {
	name: 'Alex',
	age: 40,
}

export { user }

// використання interface
interface UserId{
	name: string,
	age: number
}

let userId: UserId = {
	name: 'Kate',
	age: 50
}

export{userId}