// let notSure: any = 4;
// notSure = "maybe string";
// notSure = false;
// notSure = {};
// let num: number;
// num = notSure;
// export {num}
function fetchUserData(id, callback) {
    const responseData = { name: "Tom" };
    callback(responseData);
}
fetchUserData("1223", (data) => {
    console.log(data.name);
});
export {};
//# sourceMappingURL=any.js.map