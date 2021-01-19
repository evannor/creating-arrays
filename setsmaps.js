// empty set
// const ids = new Set();

// non-empty
const ids = new Set([1, 2, 3]);
console.log(ids);

// set methods
// add, clear, delete, entries, forEach, has, keys, size, values

for (const entry of ids.entries()) {
  console.log(entry);
}
// outputs an array with 2 entries to match output from method when used on maps
const employees = new Set(["Billy", "Beau", "Bob"]);
for (const entry of employees.entries()) {
  console.log(entry);
}
