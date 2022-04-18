/*
**6)** Tomar una lista de lenguajes de programación y 
mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente
y en mayúsculas sin mutar el arreglo original.

*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
  // lenguajesOrdenados = lenguajes; no va porque se asigna el mismo lugar de memoria
  let lenguajesOrdenados = lenguajes.slice(0);

  lenguajesOrdenados.sort().map(function (lenguaje, index) {
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });
}
