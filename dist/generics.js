// function firstElement<T>(arr: T[]): T {
// 	return arr[0]
// }
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const merged = merge({ name: 'Alise' }, { age: 10 });
console.log(merged.name);
console.log(merged.age);
export { merge };
//# sourceMappingURL=generics.js.map