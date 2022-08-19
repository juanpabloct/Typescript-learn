"use strict";
//EL tipado de dato unknown es muy similar a any, solo que este es mas avanzado
const valueNumberUnknown = "asdsadasdasd ad as ads ";
if (typeof valueNumberUnknown == "string") {
    const data = valueNumberUnknown;
    console.log(valueNumberUnknown);
}
//Las ventajas que trae al usarlo es que cuando asignamos alguna variable con este valor exige verificacion para saber si realmente es de ese tipo
//Cosa diferente con any ya que este es como ignorara todo
