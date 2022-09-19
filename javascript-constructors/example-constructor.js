function ExampleConstructor() {

}

console.log('typeof prototype :', ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('value of example :', example);

var booleanInstance = example instanceof ExampleConstructor;
console.log('booleanInstance value :', booleanInstance);
