const disjuntores = [false, false, true, false, false, true, false, false];

let contador1 = 0;
let contador2 = 0;

for (let disjuntor of disjuntores) {
  if (disjuntor === false) {
    contador1++
  } else {
    contador2++
  }
}

console.log(`contador false: ${contador1} contador true: ${contador2}`)