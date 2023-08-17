var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role[Role.ADMIN]);
const person = {
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log(Role.ADMIN);
}
//  const enum Test {
// 	A = 1,
// 	B = 2
// }
// for (let item in Test) {
// console.log(item);
// 	}
// enum HttpCodes{
// 	OK = 200,
// 	BadRequest = 400,
// 	Unauthorized = 401
// }
// function respond(status: HttpCodes) {
// 	return HttpCodes
// }
// respond(HttpCodes.OK)
export { person };
//# sourceMappingURL=enum.js.map