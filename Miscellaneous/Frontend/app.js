// # JavaScript OOP — Objects and Prototypes

// ## 1. Objects in JavaScript

// An **object** is a collection of properties stored as key-value pairs.

// Properties can contain values such as strings, numbers, arrays, and functions.

// ```js
// const student = {
//     name: "Pavan",
//     age: 19,
//     greet() {
//         console.log("Hello!");
//     }
// };

// console.log(student.name); // Pavan
// console.log(student.age);  // 19
// student.greet();           // Hello!
// ```

// - `name` and `age` are properties.
// - `greet()` is a method (a function stored in an object).
// - Use dot notation (`student.name`) or bracket notation (`student["name"]`) to access properties.

// ## 2. What is a Prototype?

// Every ordinary JavaScript object has an internal link to another object called its **prototype**.

// The prototype allows objects to inherit properties and methods from other objects.

// ```js
// const person = {
//     greet() {
//         console.log("Hello!");
//     }
// };

// const student = Object.create(person);

// student.name = "Pavan";

// student.greet(); // Hello!
// ```

// Here, `student` doesn't have its own `greet()` method. JavaScript finds it in the `person` prototype.

// ## 3. Prototype Chain

// When accessing a property, JavaScript searches:

// 1. The object itself.
// 2. Its prototype.
// 3. The prototype's prototype.
// 4. Until it reaches `null`.

// This process is called the **prototype chain**.

// ```js
// const arr = [10, 20, 30];

// arr.push(40);
// console.log(arr); // [10, 20, 30, 40]
// ```

// The `push()` method comes from `Array.prototype`, not from an individual array's own properties.

// ## 4. `__proto__` vs `prototype`

// - `__proto__` is a legacy accessor for an object's internal prototype.
// - `prototype` is a property on constructor functions used when creating objects with `new`.
// - `Object.getPrototypeOf()` is the recommended way to inspect an object's prototype.

// ```js
// const arr = [1, 2, 3];

// console.log(Object.getPrototypeOf(arr) === Array.prototype);
// // true
// ```

// ## 5. Prototype Method Sharing

// Methods defined on a constructor's prototype can be shared by all instances.

// ```js
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, ${this.name}`);
// };

// const p1 = new Person("Pavan");
// const p2 = new Person("Rahul");

// p1.greet(); // Hello, Pavan
// p2.greet(); // Hello, Rahul
// ```

// Both objects reuse the same `greet()` function through their prototype.

// ## Key Points to Remember

// - Objects store properties and methods.
// - Prototypes allow inheritance and method sharing.
// - JavaScript uses the prototype chain to look up inherited properties.
// - Arrays inherit methods from `Array.prototype`.
// - Prototype inheritance is a fundamental part of JavaScript's object-oriented programming.

//Factory Functions
// ## Factory Functions in JavaScript

// A **Factory Function** is a function that creates and returns objects without using the `new` keyword.

// ### Example

// ```js
// function createStudent(name, age) {
//     return {
//         name: name,
//         age: age,
//         greet() {
//             console.log("Hello " + this.name);
//         }
//     };
// }

// const s1 = createStudent("Pavan", 19);
// const s2 = createStudent("Rahul", 20);

// s1.greet(); // Hello Pavan
// ```

// ### Advantages
// 1. Easy to create multiple objects.
// 2. No need to use the `new` keyword.
// 3. Flexible and simple syntax.
// 4. Can hide private data using closures.

// ### Disadvantages
// 1. **Memory wastage:** Methods defined inside the factory are recreated for every object.
// 2. **No shared prototype methods by default:** Each returned object gets its own copy of methods.
// 3. Can become inefficient when creating a large number of objects with repeated methods.

// ### Key Point

// Factory functions create objects and return them directly. They are an alternative to constructor functions.

//new operator
// ## New Operator in JavaScript

// The **`new` operator** creates a new object using a constructor function.

// ### Example

// ```js
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.greet = function() {
//     console.log("Hello " + this.name);
// };

// const s1 = new Student("Pavan", 19);
// const s2 = new Student("Rahul", 20);

// s1.greet();
// s2.greet();
// ```

// ### What happens when we use `new`?

// JavaScript automatically performs four operations:

// 1. Creates a new empty object.
// 2. Links the new object's prototype to the constructor's `prototype` property.
// 3. Executes the constructor function with `this` referring to the new object.
// 4. Returns the newly created object (unless the constructor explicitly returns another object).

// ### How is it better than Factory Functions?

// **Factory Function:**
// - Creates a separate copy of methods for every object if methods are defined inside the factory.
// - Can consume more memory when creating many objects.

// **Constructor Function + `new`:**
// - Methods can be defined once on the constructor's prototype.
// - All instances share those methods.
// - Avoids unnecessary duplication of functions.
// - Provides a convenient pattern for creating multiple similar objects.

// ### Example: Shared Methods

// ```js
// function Student(name) {
//     this.name = name;
// }

// Student.prototype.greet = function() {
//     console.log("Hello " + this.name);
// };

// const s1 = new Student("Pavan");
// const s2 = new Student("Rahul");

// console.log(s1.greet === s2.greet); // true
// ```

// Both objects use the same `greet()` function.

// ### Key Points

// - `new` is an operator, not a function.
// - Constructor functions are conventionally named using PascalCase.
// - `this` refers to the newly created object inside the constructor.
// - Prototype methods are shared among instances.
// - `new` helps create objects efficiently when using shared methods.