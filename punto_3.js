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

let num = Number(prompt("ingrese un numero"));
if (isNaN(num)) {
  console.log("los datos ingresados no son válidos");
}

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(`${i}- el nro ${i} es par`);
  } else {
    console.log(`${i}- el nro ${i} es impar`);
  }
}
