

//Que es la sobrecarga y para que sirve
//Esta es util cuando en el tipado nosotros tenemos un Or
//Ayudando asi a identificar que dato es el que se esta pasando para que se tipe.

function mensaje(input:string):string
function mensaje(input:number):number
function mensaje(input:string|number){
  return input
}
console.log(mensaje("sdfdfgs"));
console.log(mensaje(223234))
