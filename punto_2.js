/*
**2)** Escribe un programa que pueda calcular el área 
de 2 figuras geométricas: triangulo y rectángulo. En primer lugar 
pregunta de qué figura se quiere calcular el área, después solicita los datos
que necesites para calcularlo. Utiliza **switch** para pedir los datos según 
la figura.

- triangulo = b * h/2
- rectangulo = b * h
*/

let figura = prompt(
  "ingrese si desea calcular el area de un triangulo (1) o un rectangulo (2)"
);
let figura_Mayus = figura.toUpperCase();

switch (figura_Mayus) {
  case "TRIANGULO":
  case "1":
    let baset = Number(prompt("ingrese la base del triangulo"));
    let alturat = Number(prompt("ingrese la altura del triangulo"));
    let areat = (baset * alturat) / 2;
    console.log(
      `el área del triangulo es igual a ${baset} x ${alturat} /2 = ${areat} cm2`
    );

    break;

  case "RECTANGULO":
  case "2":
    let baser = Number(prompt("ingrese la base del rectangulo"));
    let alturar = Number(prompt("ingrese la altura del rectangulo"));
    let arear = baser * alturar;
    console.log(
      `el área del rectangulo es igual a ${baser} x ${alturar} = ${arear} cm2`
    );

    break;

  default:
    console.log("La operación ingresada no es válida");
    break;
}
