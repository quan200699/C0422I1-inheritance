"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    show() {
        console.log('hello');
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
}
exports.Car = Car;
