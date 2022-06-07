"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportCar = void 0;
const car_1 = require("./car");
class SportCar extends car_1.Car {
    constructor(name, color, brand) {
        super(name, color);
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    info() {
        return `Thông tin xe: ${this.name}, màu xe: ${this.color},  thương hiệu: ${this._brand}`;
    }
    show() {
        console.log('ghi đè phương thức');
    }
    run(name, speed) {
        if (name === undefined && speed == undefined) {
            console.log('run không tham số');
        }
        else if (speed === undefined) {
            console.log('run có tham số name');
        }
        else {
            console.log('run có 2 tham số');
        }
    }
}
exports.SportCar = SportCar;
