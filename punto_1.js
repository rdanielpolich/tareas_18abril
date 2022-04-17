/*
1) Solicita un nombre, la edad y nuestra por consola el mensaje 
"Hola ___, tienes ___ años y el año que viene tendrás ___ años"
Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.
*/

let nombre = prompt("ingrese su nombre");
let edad = Number(prompt("ingrese su edad"));

console.log(
  `Hola ${nombre}, tienes ${edad} y el año que viene tendras ${++edad} años`
);
