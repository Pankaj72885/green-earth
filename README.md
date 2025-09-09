Green Earth - Assignment

This project is a dynamic e-commerce style website for a fictional tree-planting campaign called "Green Earth". It is built with HTML, TailwindCSS, DaisyUI, and modern vanilla JavaScript.

Core Features:

1. Dynamic category and plant loading from an external API.
2. A fully functional shopping cart (add, remove, and total calculation).
3. A details modal for individual plants.
4. UX improvements like a loading spinner and active button states.
5. A fully responsive design for mobile and desktop.

Questions & Answers

1. What is the difference between var, let, and const?

Answer:
In JavaScript, var, let, and const are used to declare variables, but they behave differently. Think of them as different types of boxes for storing information.

var: This is the old way of declaring variables. It's like a flimsy, unpredictable box. It has some confusing scoping rules and is generally avoided in modern JavaScript to prevent bugs.

let: This is the modern, standard box. You use let when you expect the value inside the box to change later. For example, if you have a score in a game, you would use let score = 0; because the score will increase. let variables are "block-scoped," meaning they only exist within the {} they are created in.

const: This is the modern, super-safe, "locked" box. const stands for constant. You use it for values that you know will never change. For example, const birthday = 'January 1st';. Once set, its value cannot be changed. This helps make code safer and more predictable. It is also "block-scoped."

In short: Always use const by default. If you know you'll need to change the variable's value later, use let. Avoid using var.

2.  What is the difference between map(), forEach(), and filter()?

Answer:
These are all methods used to loop over arrays, but they have different purposes.

forEach(): Use this when you want to do something for each item in an array, but you don't need to create a new array. It's like walking down a line of people and telling each person to clap. It doesn't return anything.

    const names = ['Alice', 'Bob', 'Charlie'];
    names.forEach(name => {
      console.log(`Hello, ${name}!`);
    });

map(): Use this when you want to transform each item in an array and create a new array of the same length with the transformed items. It's like taking a list of ingredients and creating a new list of prepared foods.

    const numbers = [1, 2, 3];
    const doubledNumbers = numbers.map(num => num * 2);

filter(): Use this when you want to select a few items from an array that meet a certain condition and create a new, shorter array with only those selected items. It's like sieving flour—only the fine particles get through.

    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = numbers.filter(num => num % 2 === 0);

evenNumbers is now [2, 4, 6]

3. What are arrow functions in ES6?

Answer:
Arrow functions are just a shorter way to write functions in JavaScript code. Think of a function like a recipe - you give it some ingredients and it gives you back a finished dish.

Old way of writing functions:

    function add(a, b) {
      return a + b;
    }

New shorter way (arrow function):

    const add = (a, b) => a + b;

The arrow function does the exact same thing but uses fewer words. It makes your code cleaner and easier to read, especially for simple tasks.

4. How does destructuring assignment work in ES6?

Answer:
Destructuring is like unpacking a suitcase. Instead of taking items out one by one, you can take out several things at once and give them names.

With objects (like a person's information):

    const tree = {
      name: 'Mango Tree',
      price: 500,
      category: 'Fruit'
    };

    Instead of writing:
    const name = tree.name;
    const price = tree.price;

    Can write:
    const { name, price } = tree;

With lists:

    const colors = ['Red', 'Green', 'Blue'];
    const [firstColor, secondColor] = colors;

5. Explain template literals in ES6. How are they different from string concatenation?

Answer:
Template literals are a newer, easier way to combine text with variables (stored information) in JavaScript.

Old way (joining text pieces together):

    const name = 'Earth';
    const message = 'Hello, ' + name + '! Welcome.';

New way (template literals):

    const name = 'Earth';
    const message = `Hello, ${name}! Welcome.`;

The new way is better because:

1. It's easier to read and write
2. You can write text that goes across multiple lines
3. You just put variables inside ${} instead of using lots of + signs
