// in

type Admin = {
	name: string,
	privileges: string[]
}

type Employee = {
	name: string,
	startDate: Date
}

type AdminOnEmployee = Admin | Employee;

function printDetails(obj: AdminOnEmployee) {
	console.log(`Name: ${obj.name}`);
	
	if ('privileges' in obj) {
		console.log(`Privileges: ${obj.privileges.join()}`);
		
	}

	if ('startDate' in obj) {
		console.log(`Start Date: ${obj.startDate}`);
		
	}
}

export { printDetails }

// instanceof

class Car{
	drive() {
		console.log('Driving a car...');
		
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...');
		
	}

	loadCargo(amount: number) {
		console.log(`Loading cargo: ${amount}`);
		
	}
}


type Vehicle = Car | Truck;


const carInstance = new Car();
const truckInstance = new Truck();


function useVehicle(vehicle:Vehicle) {
	vehicle.drive()

	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000)
	}
}

useVehicle(carInstance)

useVehicle(truckInstance)


export{useVehicle}


// User Defined

type Dog = {
	bark: () => void;

}

type Cat = {
	meow: ()=> void
}


function isDog(animal: Dog | Cat): animal is Dog {
	return 'bark' in animal;
	
}

function letAnimalTalk(animal: Dog | Cat) {
	if (isDog(animal)) {
		animal.bark()
	} else {
		animal.meow()
	}
}


export {letAnimalTalk}