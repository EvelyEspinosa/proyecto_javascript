//funciones declaradas

//console.log(suma(2,2)); //puede ir tanto a arriba o abajo

function suma(num1, num2) {
    return num1+num2;
}
 
//funciones expresadas - asicnadas a variables --solo por debejo de la funcion
let resta = function (num1, num2) {
   return num1 - num2; 
}

//console.log(resta(10,5));

//funciones flecha (arrow functions) - solo por debejo de la funcion

let multiplicacion = (num1, num2) => { return num1 * num2; }
/* console.log(multiplicacion(4,3)); */

let objeto = {
    valor : 10,
    doble : function() { // arrow ()=>{return thix.valor * 2} sale= NaN
        return this.valor * 2;
    }
}
console.log(objeto.doble());