// Here is an example of a constructor function in JavaScript:
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
      return this.firstName + " " + this.lastName;
    }
  }

  // This constructor function creates a Person object with the properties firstName, lastName, and age, as well as a getFullName method that returns the full name of the person. 
  // We can create a new Person object using the new keyword, like this:

let person1 = new Person("John", "Doe", 30);

console.log(person1.getFullName()); // Output: "John Doe"

