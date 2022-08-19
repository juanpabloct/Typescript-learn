"use strict";
var Bebidas;
(function (Bebidas) {
    Bebidas["gaseosa"] = "Gaseosa";
    Bebidas["licor"] = "Licor";
    Bebidas["bebidasNaturales"] = "Jugos";
})(Bebidas || (Bebidas = {}));
const bebida = Bebidas.gaseosa;
console.log(bebida);
