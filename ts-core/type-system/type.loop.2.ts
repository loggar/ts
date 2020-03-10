type I = 0 | 1 | 2 | 3 | 4 | 5;

type X = {
  [Key in I]: Key;
};
// X is [0, 1, 2, 3, 4, 5]

// JS🟨 look at JS similar code
const x = [];
for (let i = 0; i <= 6; i++) {
  x.push(i);
}
