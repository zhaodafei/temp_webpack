const less = require("./index.less");

console.log("版本ts");

class Person {
    private _name: string;

    constructor(name:string) {
        this._name = name;
    }

    /*getName() {
        return this._name;
    }
    setName(value: string) {
        this._name = value;
    }*/

     // ES6 语法
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

}

const per =new Person("daFei");
// per.setName("论语");
per.name = "史记"; //  ES6 语法
console.log(per);
