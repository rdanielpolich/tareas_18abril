/*
**4)** Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.
*/

let suma = 0;
let num = "";
let contador = 0;

do {
  num = parseInt(prompt("ingrese un número"));
  suma = suma + num;
  contador++;
} while (suma <= 50);

console.log(
  `el total acumulado es ${suma} y se van ingresando ${contador} numeros`
);
