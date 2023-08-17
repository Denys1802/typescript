// function firstElement<T>(arr: T[]): T {
// 	return arr[0]
// }

// let number = [1, 2, 3, 4]

// console.log(firstElement(number));


// let string = ['str1', 'str2', 'str3', 'str4']

// console.log(firstElement(string));

// export {firstElement}

interface MergedObject {
    name?: string;
    age?: number;
}

function merge(objA: object, objB: object): MergedObject {
    return Object.assign({}, objA, objB);
}

const merged = merge({ name: 'Alise' }, { age: 10 });

console.log(merged.name);
console.log(merged.age);


export{merge}