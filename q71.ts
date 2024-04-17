//Compare let and const: Create two examples where let allows reassignment but const does not.

// Using `let` for a variable that can be reassigned
let age = 25;
age = 27;        // Works fine because `let` allows reassignment
console.log(age);          // shows 26

   // Trying to reassign a `const`-declared variable
const name = "Sara";
try {
    name = "Ali";    // This line will cause an error
} catch (error) {
  console.log("error: Can't reassign a `const` -declared variable.");     // This message is shown
}

// This example illustrates that `const` prevents changing the variable once it's set.



