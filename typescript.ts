// so that cab't redcleare block-scoped variable doesn't happen
export {} 
// const sum = (a : number, b : number) =>{
//     return a + b;
// }

// sum(4,5);

// boolean
let isCool: boolean=  true;

//number

let weight: number = 150;

//string

let color: string = 'red';

let quote: string = `my favorite color is${color}`


//array

let pets: string[] = ['cat', 'dog', 'cow']

let pets2: Array<string> = ['cat', 'dog', 'cow']

//Object

let items: object = {
    a: 'pan', 
    b: 'bottle'
}

// null/undefined

let undefexample: undefined = undefined;
let nullexample: null = null;


//tuple 

let basket: [string, number];
basket = ['baskball', 4]

//Enumerable

enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2] // -> Medium
let sizeName2: number = Size.Small // -> 1

// Any (can have any type) will never throw out and error like JS
// Good for converting JS to TS for really complicated functions that
// can't be easily defined at the start
let something: any = 'Anything can be here'
something = basket


// void -> expect no return
let sing = (): void => {
    console.log('void');
}

let sing2 = (): string => {
    return 'string';
}

// never -> tests if the function has no return type 
// and if it has a unreachable endpoint 
let error = (): never =>{
    throw Error('something went wrong')
}

// Interface
// creates a new name that can be used everywhere 
interface RobotArmy {
    count: number,
    type: string,
     magic?: string // -> ? means it may or may not be apart of the
                    // interface
}

let fightRobotArmyQuestionMark = (robots: {count: 2, type: 'dragon'}) => {
    console.log('Fighting')
}
// want robots to have a countm type and magic of their respective
// types
let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fighting')
}
// Same as above 
let fightRobotArmy2 = (robots: {count: number
                        ,type: string, magic: string}) => {
    console.log('Fighting')
}

// type doesn't create a new name
type RobotArmy2 ={
    count: number,
    type: string,
     magic: string
}

// Type assertion (dangerous to use)
interface CatArmy {
    count: number,
    type: string,
     magic: string
}

let dog = {} as CatArmy

dog.count // -> works if you do let dog = {} as CatArmy



//function

let fightRobotArmyFunction = (robots: RobotArmy): void => {
    console.log('Fighting')
}

let fightRobotArmyFunction2 = (robots: RobotArmy): number => {
    console.log('Fighting')
    return 5;
}

// Class
class Animal {
    sing: string = 'lalala'
    constructor(sound: string){
        this.sing = sound;
    }
    greet() {
        return `'Hello ${this.sing}`
    }
}

let lion = new Animal('roar')
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

let confused: string | number = "hello"
let confused2: string | number = 8
// let confused3: string | number = false   --> error

