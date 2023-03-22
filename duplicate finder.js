const a = [1, 3, 4, 4, 1, 5, 6, 2, 6, 57, 23, 12, 10, 20, 10];
let b = [];

for (let i = 0; i < a.length; i++) {
  for (let j = i; j < a.length; j++) {
    if (a[i] === a[j + 1]) {
      b.push(a[i]);
    }
  }
}
const c = a.filter((item) => !b.includes(item));
const d = b.concat(c).sort((e, f) => e - f);
console.log(d);
