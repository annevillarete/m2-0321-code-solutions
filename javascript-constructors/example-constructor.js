function ExampleConstructor () {

};

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var anExampleConstructor = new ExampleConstructor(); 
console.log('value of anExampleConstructor:', anExampleConstructor);

var isAnInstanceOf = anExampleConstructor instanceof ExampleConstructor;
console.log(isAnInstanceOf);



