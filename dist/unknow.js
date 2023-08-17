// let notSure: unknown = 4;
// notSure = "maiby string";
// notSure = true;
// let num: number;
// num = notSure
// export {num}
function fetchUserData() {
    return 'Tom';
}
let userData = fetchUserData();
if (typeof userData === 'string') {
    console.log(userData.toLocaleUpperCase());
}
export { userData };
//# sourceMappingURL=unknow.js.map