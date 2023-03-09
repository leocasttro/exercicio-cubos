const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const arrayC = []
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    console.log(arrayA[i], arrayB[j])
  }
}

console.log(arrayC)