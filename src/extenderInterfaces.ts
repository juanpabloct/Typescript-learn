//Creacion De la interfaz

interface Nombres{
  nombre:string
  apellido:string
}
//Si nosotros queremos que las propiedades solo sean de lectura, que no se puedan editar se usa la propiedad readOnly
// interface Nombres{
//   readonly nombre:string
//   apellido:string
// }

//Esta nueva interfaz esta heredando el tipado de la interfaz Nombres
interface Person1 extends Nombres{
  edad:number
  nacimiento:string
}
//Ahora que pasaria si queremos omitir algunos tipados
//Se haria de la siguiente manera
interface Person2 extends Omit< Nombres, "apellido">{
  edad:number
  nacimiento:string
}
//como vemos me ignora apellido, no me esta apareciendo falla y eso que hereda a Nombres
const person2:Person2={edad:20,nacimiento:"", nombre:""}


const person1:Person1={
  nombre:"adasd",
  apellido:"sdfsdfsfd",
  edad:22,
  nacimiento:"22/04/2022"
}



//si queremos que elementos sean opcionales sse usa partial de la siguiente manera

interface Person3 extends Partial<Nombres>{
  edad:number
  nacimiento:string
}
//El partial dejaria el codigo asi

// interface Person1 extends Nombres{
//   edad?:number
//   nacimiento?:string
// }


interface Person4 extends Required<Nombres>{
  edad:number
  nacimiento:string
}
//El Required dejaria el codigo asi

// interface Person1 extends Nombres{
//   edad:number
//   nacimiento:string
// }

//

