/*
**5)** Crea 3 arrays. El primero tendrá 5 números, 
el segundo array se llamará pares y el tercero 
impares, ambos arrays estarán vacíos **[ ]**

- Multiplica cada uno de los números del primer array 
por un número aleatorio entre 1 y 10
- Si el resultado es par, guarda ese número en el array 
de pares y si es impar en el array de impares.
- Mostrar por consola: array de pares e impares

**Tip: se recomienda el uso de for of**
*/

let num = [1, 2, 3, 4, 5];
let pares = [];
let impares = [];
let operador = Math.ceil(Math.random() * 10);
let producto = num.map((x) => x * operador);

for (const numero of producto) {
  if (numero % 2 === 0) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
}

console.log(`el numero multiplicador es ${operador}`);
console.log(pares);
console.log(impares);
