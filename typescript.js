"use strict";
exports.__esModule = true;
// const sum = (a : number, b : number) =>{
//     return a + b;
// }
// sum(4,5);
// boolean
var isCool = true;
//number
var weight = 150;
//string
var color = 'red';
var quote = "my favorite color is".concat(color);
//array
var pets = ['cat', 'dog', 'cow'];
var pets2 = ['cat', 'dog', 'cow'];
//Object
var items = {
    a: 'pan',
    b: 'bottle'
};
// null/undefined
var undefexample = undefined;
var nullexample = null;
//tuple 
var basket;
basket = ['baskball', 4];
//Enumerable
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2]; // -> Medium
var sizeName2 = Size.Small; // -> 1
// Any (can have any type) will never throw out and error like JS
// Good for converting JS to TS for really complicated functions that
// can't be easily defined at the start
var something = 'Anything can be here';
something = basket;
// void -> expect no return
var sing = function () {
    console.log('void');
};
var sing2 = function () {
    return 'string';
};
// never -> tests if the function has no return type 
// and if it has a unreachable endpoint 
var error = function () {
    throw Error('something went wrong');
};
var fightRobotArmyQuestionMark = function (robots) {
    console.log('Fighting');
};
// want robots to have a countm type and magic of their respective
// types
var fightRobotArmy = function (robots) {
    console.log('Fighting');
};
// Same as above 
var fightRobotArmy2 = function (robots) {
    console.log('Fighting');
};
var dog = {};
dog.count; // -> works if you do let dog = {} as CatArmy
//function
var fightRobotArmyFunction = function (robots) {
    console.log('Fighting');
};
var fightRobotArmyFunction2 = function (robots) {
    console.log('Fighting');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "'Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('roar');
lion.greet();
// Get error because you are accessing a private variable
// class Animal {
//     private sing: string = 'lalala'
//     constructor(sound: string){
//         this.sing = sound;
//     }
//     greet() {
//         return `'Hello ${this.sing}`
//     }
// }
// let lion = new Animal('roar')
// lion.greet();
// Union type
var confused = "hello";
var confused2 = 8;
// let confused3: string | number = false   --> error
