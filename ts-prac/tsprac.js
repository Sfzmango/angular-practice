//========  use npx tsc tsprac.ts to compile to js and run
// add types after variables to define it. if a variable is not the same type as the definted type, ts will throw an error
function addShipping(price, shipping) {
    return price + shipping;
}
// this world work
addShipping(10, 5);
// this will throw an error
//addS("10", 5);
//========  types that are supported: string, number, boolean, null, undefined
var myName = "";
// myName = 5 will throw an error
//========  undefined types would be considered a type of "any"
var myName2;
//========  we can use multiple data types (called union types)
var myName3 = null;
//========  arrays, add brackets to type annotations.
// this will only allow strings and numbers in the array.
// if data type is left undefined, array can be filled with any types.
var items = [];
var account = {
    name: "Luis",
    balance: 10
};
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
var accounts;
//======== classes
// implements keyword tells ts that we are adding an interface to the class
var InvestmentAccount = /** @class */ (function () {
    /*
    if we do not want to use constructor
        name;
        balance;
    */
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    // make a function private to the class. properties and methods are public by default
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
