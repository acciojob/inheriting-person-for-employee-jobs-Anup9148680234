// complete this js code
class Person(name, age) {
	constructor{
		this._name = name;
		this._age = age;
	}
	greet(){
		console.log("Hello, my name is "+this._name+", I am "+this._age+" years old.")
	}
}

class Employee extends Person(name, age, jobTitle) {
	constructor(name, age, jobTitle){
		this._name = name;
		this._age = age;
		this._jobTtitle = jobTitle
	}
	jobGreet(){
		console.log("Hello, my name is "+name+," I am "+age+" years old, and my job title is "+jobTitle+".")
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
