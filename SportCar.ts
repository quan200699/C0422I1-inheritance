import {Car} from "./car";

export class SportCar extends Car {
    private _brand: string;


    constructor(name: string, color: string, brand: string) {
        super(name, color);
        this._brand = brand;
    }


    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    info() {
        return `Thông tin xe: ${this.name}, màu xe: ${this.color},  thương hiệu: ${this._brand}`;
    }

    public show(): void {
        console.log('ghi đè phương thức')
    }

    public run(): void;
    public run(name?: string): void;
    public run(name?: string, speed?: number): void
    public run(name?: string, speed?: number) {
        if (name === undefined && speed == undefined) {
            console.log('run không tham số')
        } else if (speed === undefined) {
            console.log('run có tham số name')
        } else {
            console.log('run có 2 tham số')
        }
    }
}
