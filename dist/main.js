"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportCar_1 = require("./SportCar");
let sportCar = new SportCar_1.SportCar('hehe', 'do', 'hihi');
console.log(sportCar.info());
sportCar.show();
// let car: Car = new Car('hehe', 'xanh');
// car.show();
//
let car1 = new SportCar_1.SportCar('hehe', 'vang', 'hihi');
sportCar.run();
sportCar.run('quan');
sportCar.run('quan2', 100);
