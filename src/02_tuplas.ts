

//Para las tuplas nosotros definimos lo valores dentro de las llaves del array

const pruebaTupla:[string|boolean, number]=["helloWolrd", 3]
//Al estar asi no deja al array añadir los valores si en la primera es un string no le podemos añadir algun otro
//Al estar asi no deja pasar su longituyd que se le definio
//Permite Destructuracion


const [valueString, valueNumber]=pruebaTupla
console.log(valueString, valueNumber);
