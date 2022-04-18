/*
**6)** Tomar una lista de lenguajes de programación y 
mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente
y en mayúsculas sin mutar el arreglo original.

*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
  console.log(lenguajes.sort());

  for (let i = 0; i < lenguajes.length; i++) {
    console.log(`${i} - ${lenguajes}`);
  }
}

console.log(ordenarLenguajes(lenguajes));
