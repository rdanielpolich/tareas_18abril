/*
1) Solicita un nombre, la edad y nuestra por consola el mensaje 
"Hola ___, tienes ___ años y el año que viene tendrás ___ años"
Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.
*/

// let nombre = prompt("ingrese su nombre");
// let edad = Number(prompt("ingrese su edad"));

// console.log(
//   `Hola ${nombre}, tienes ${edad} y el año que viene tendras ${++edad} años`
// );

/*
**2)** Escribe un programa que pueda calcular el área 
de 2 figuras geométricas: triangulo y rectángulo. En primer lugar 
pregunta de qué figura se quiere calcular el área, después solicita los datos
que necesites para calcularlo. Utiliza **switch** para pedir los datos según 
la figura.

- triangulo = b * h/2
- rectangulo = b * h
*/

// let figura = prompt(
//   "ingrese si desea calcular el area de un triangulo o un rectangulo"
// );
// figura_Mayus = figura.toUpperCase();

// if (figura_Mayus === "TRIANGULO" || figura_Mayus === "RECTANGULO") {
//   switch (true) {
//     case "TRIANGULO":
//       let baset = Number(prompt("ingrese la base del triangulo"));
//       let alturat = Number(prompt("ingrese la altura del triangulo"));
//       let areat = (baset * alturat) / 2;
//       console.log(
//         `el área del triangulo es igual a ${baset} x ${alturat} /2 = ${areat} cm2`
//       );

//       break;

//     case "RECTANGULO":
//       let baser = Number(prompt("ingrese la base del rectangulo"));
//       let alturar = Number(prompt("ingrese la altura del rectangulo"));
//       let arear = baser * alturar;
//       console.log(
//         `el área del rectangulo es igual a ${baser} x ${alturar} = ${arear} cm2`
//       );

//       break;
//   }
// } else {
//   console.log("La operación ingresada no es válida");
// }

/*
**3)** Solicita un número e imprime todos los números
pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
Por ej, si el número es 5 el resultado debería ser:
   1 - es impar
   2 - es par
   3 - es impar
   4 - es par
   5 - es impar
*/

// let num = Number(prompt("ingrese un numero"));
// if (isNaN(num)) {
//   console.log("los datos ingresados no son válidos");
// }

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i}- el nro ${i} es par`);
//   } else {
//     console.log(`${i}- el nro ${i} es impar`);
//   }
// }

/*
**4)** Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.
*/

// let suma = 0;
// let num = "";
// let contador = 0;

// do {
//   num = parseInt(prompt("ingrese un número"));
//   suma = suma + num;
//   contador++;
// } while (suma <= 50);

// console.log(
//   `el total acumulado es ${suma} y se van ingresando ${contador} numeros`
// );

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

// let num = [1, 2, 3, 4, 5];
// let pares = [];
// let impares = [];
// let operador = Math.ceil(Math.random() * 10);
// let producto = num.map((x) => x * operador);

// for (const numero of producto) {
//   if (numero % 2 === 0) {
//     pares.push(numero);
//   } else {
//     impares.push(numero);
//   }
// }

// console.log(`el numero multiplicador es ${operador}`);
// console.log(pares);
// console.log(impares);

/*
**6)** Tomar una lista de lenguajes de programación y 
mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente
y en mayúsculas sin mutar el arreglo original.

*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];
