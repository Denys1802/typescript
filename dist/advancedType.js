// in
function printDetails(obj) {
    console.log(`Name: ${obj.name}`);
    if ('privileges' in obj) {
        console.log(`Privileges: ${obj.privileges.join()}`);
    }
    if ('startDate' in obj) {
        console.log(`Start Date: ${obj.startDate}`);
    }
}
export { printDetails };
// instanceof
class Car {
    drive() {
        console.log('Driving a car...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log(`Loading cargo: ${amount}`);
    }
}
const carInstance = new Car();
const truckInstance = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(carInstance);
useVehicle(truckInstance);
export { useVehicle };
function isDog(animal) {
    return 'bark' in animal;
}
function letAnimalTalk(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
export { letAnimalTalk };
//# sourceMappingURL=advancedType.js.map