//1
async function esParell(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`El numero ${num}, es parell`);
    } else {
      reject(`El numero ${num}, NO es parell`);
    }
  });
}

console.log(esParell(2));
console.log(esParell(3));
//2
async function menorA10(num) {
  return new Promise((resolve, reject) => {
    if ( num <= 10) {
      resolve(`El numero ${num} es menor o igual a 10  `);
    } else {
      reject(`El numero ${num} es major a 10  `);
    }
  });
}

menorA10(9)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

menorA10(11)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//3
let arr = ["a", "e", "i", "o", "u"];

async function esVocal(letra) {
  return new Promise((resolve, reject) => {
    if (arr.includes(letra)) {
      resolve(`La lletra ${letra}, es vocal`);
    } else {
      reject(`La lletra ${letra}, es vocal`);
    }
  });
}

esVocal("e")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//4
async function divideix(a, b) {
  return new Promise((resolve, reject) => {
    let result = a / b;
    if (b === 0) {
      reject("Entre infinito no");
    } else {
      resolve(result);
    }
  });
}

divideix(5, 1)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

divideix(5, 0)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
