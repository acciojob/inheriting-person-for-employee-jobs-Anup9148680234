// complete this js code
function Person(name, age) {
	greet(){
		console.log("Hello, my name is "+name+", I am "+age+" years old.")
	}
}

function Employee extends Person(name, age, jobTitle) {
	constructor(name, age, jobTitle){
		this.name = name;
		this.age = age;
		this.jobTtitle = jobTitle
	}
	jobGreet(){
		console.log("Hello, my name is "+name+," I am "+age+" years old, and my job title is "+jobTitle+".")
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
