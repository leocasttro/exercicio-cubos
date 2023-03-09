const letras = ["A", "a", "e", "E", "e", "z"];

let encontrada = 0;
for (let letra of letras) {
    if (letra === "E") {
        encontrada++;
    } else if (letra === "e") {
        encontrada++;
    }
}
if (encontrada >= 1) {
    console.log(`Foram encontradas ${encontrada} letras "E" ou "e".`);
} else {
    console.log("Nenhuma letra E ou e foi encontrada.");
}