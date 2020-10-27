let log = console.log;

let myObj = {}; // new Object()
log(myObj.constructor); // function Object(){}
log(myObj.__proto__ === myObj.constructor.prototype); // true


function Dog() {};

let jjinii = new Dog();
log(jjinii.__proto__ === Dog.prototype); // true
log(jjinii.__proto__.__proto__ === Object.prototype); // true
log(Object.prototype.__proto__); // null

// Prototype Chain
function Animal() {}
Object.setPrototypeOf(Dog.prototype, Animal.prototype); 
log(jjinii.__proto__); // Dog{}
log(jjinii.__proto__.__proto__); // Animal{}
log(jjinii.__proto__.__proto__.__proto__); // {}
log(jjinii.__proto__.__proto__.__proto__.__proto__); //null


////////////////////////////

// obj -> otherProto.prototype -> Object.prototype  -> null

let otherProto = function() {
    this.prop1 = 123;
    this.inner = function() {
        console.log('inner method')
    };
};

otherProto.prototype.someMethod = function() {
    console.log('otherProto')
};

let obj = new otherProto();
console.log(obj.prop1); // 123
obj.inner(); // inner method
obj.someMethod(); // otherProto
obj.toString();
// obj.__proto__.inner();  // error!!