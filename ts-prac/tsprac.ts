//========  use npx tsc tsprac.ts to compile to js and run

// add types after variables to define it. if a variable is not the same type as the definted type, ts will throw an error
function addShipping(price: number, shipping: number): number | boolean {
    return price + shipping;
}

// this world work
addShipping(10, 5);

// this will throw an error
//addS("10", 5);

//========  types that are supported: string, number, boolean, null, undefined
const myName: string = "";
// myName = 5 will throw an error

//========  undefined types would be considered a type of "any"
let myName2;

//========  we can use multiple data types (called union types)
let myName3: string | null = null;

//========  arrays, add brackets to type annotations.
// this will only allow strings and numbers in the array.
// if data type is left undefined, array can be filled with any types.
let items: string[] | number[] = [];



//======== objects, add curly brackets to define types of keys

// add interface to define a type of object once and use it multiple times w/o repeating lines of code
// interfaces cannot hold values and are not a replacement for objects
interface IAccount {
    name: string,
    balance: number,
    // ?: says that we might not have this key at the moment but might add later.
    status?: string,
    deposit?: () => void
}

const account: IAccount = {
    name: "Luis",
    balance: 10
}

/*
this works as well w/o the interface
const account: {
    // this curly bracket is used to definte types of keys in the object 
name: string,
balance: number,
    // ?: says that we might not have this key at the moment but might add later.
status?: string
} = {
    name: "Luis",
    balance: 10
}
*/

let accounts: IAccount[];

//======== classes
// implements keyword tells ts that we are adding an interface to the class
class InvestmentAccount implements IAccount {
    /*
    if we do not want to use constructor
        name;
        balance;
    */
    constructor(
        public name, public balance
    ) {

    }

    // make a function private to the class. properties and methods are public by default
    private withdraw() {

    }

}