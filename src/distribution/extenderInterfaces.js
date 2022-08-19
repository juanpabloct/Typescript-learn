"use strict";
//Creacion De la interfaz
//como vemos me ignora apellido, no me esta apareciendo falla y eso que hereda a Nombres
const person2 = { edad: 20, nacimiento: "", nombre: "" };
const person1 = {
    nombre: "adasd",
    apellido: "sdfsdfsfd",
    edad: 22,
    nacimiento: "22/04/2022"
};
//El Required dejaria el codigo asi
// interface Person1 extends Nombres{
//   edad:number
//   nacimiento:string
// }
//
