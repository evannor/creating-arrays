// // empty set
// // const ids = new Set();

// // non-empty
// const ids = new Set([1, 2, 3]);
// console.log(ids);

// // set methods
// // add, clear, delete, entries, forEach, has, keys, size, values

// for (const entry of ids.entries()) {
//   console.log(entry);
// }
// // outputs an array with 2 entries to match output from method when used on maps
// const employees = new Set(["Billy", "Beau", "Bob"]);
// for (const entry of employees.entries()) {
//   console.log(entry);
// }

const person1 = { name: "Jeff" };
const person2 = { name: "Fred" };

const personData = new Map([[person1, [{ date: new Date(), price: 10 }]]]);
// console.log(personData);
// console.log(personData.get(person1));

personData.set(person2, [{ date: new Date(), price: 35 }]);
// console.log(personData);

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

// map methods
// clear, delete, entries, forEach, get, has, keys, set, size, values
