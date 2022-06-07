import {SportCar} from "./SportCar";
import {Car} from "./car";

let sportCar: SportCar = new SportCar('hehe','do','hihi');
console.log(sportCar.info());
sportCar.show();
// let car: Car = new Car('hehe', 'xanh');
// car.show();
//
let car1: Car = new SportCar('hehe','vang','hihi');
sportCar.run();
sportCar.run('quan');
sportCar.run('quan2',100);
