
### Answer to the question no - 1 

* `const`: A locked box. 📦 Use this most of the time. Once you put something in it, you can't change it. This is safe!
* `let`: A regular box. 🗳️ Use this only when you know you'll need to change what's inside later (like a score in a game).
* `var`: An old, confusing box. 낡 Just don't use it. It's outdated.

Rule: Start with `const`, and if you get an error because you need to change the value, switch to `let`.

***

### Answer to the question no - 2

These are ways to work with lists (arrays):

* `forEach()`: Does an action for each item. It's like telling every person in a line to wave. It doesn't give you a new list back.
* `map()`: Creates a new list by changing each item. It's like taking a list of numbers `[1, 2, 3]` and creating a new list of them doubled `[2, 4, 6]`.
* `filter()`: Creates a smaller list by picking only the items you want. It's like looking at a box of fruits and picking out only the apples.

***

### Answer to the question no - 3

An arrow function is just a shorter way to write a function. It's modern and cleaner.

* Old way:
  `function add(a, b) { return a + b; }`
* New arrow way:
  `const add = (a, b) => a + b;`

It does the same thing, but it's shorter and easier to type!

***

### Answer to the question no - 4

It's a shortcut to unpack values from an object or array.

Imagine you have an object: `const person = { name: 'Alex', age: 30 };`

* The long way:
  `const name = person.name;`
  `const age = person.age;`
* The short way (destructuring):
  `const { name, age } = person;`

It just pulls the values out into variables with the same name. It's less typing!

***

### Answer to the question no - 5

They are an easier way to add variables into a string. You use backticks (`` ` ``) instead of quotes.

* The old way:
  `"Hi, my name is " + name + "!"` (This is clumsy!)
* The new way (template literal):
  ` `Hi, my name is ${name}!` ` (So much cleaner!)

Just wrap your variable with `${}` inside the backticks. It's easier to read and write.