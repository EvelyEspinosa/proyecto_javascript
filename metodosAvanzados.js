/* .slice() --Sintaxis: let newArray = arrayOriginal.slice(inicio,fin);*/

//let frutas = ["manzana", "naranja", "platano", "fresa", "kiwi"];
//let primerasTres = frutas.slice(0, 3);
// console.log(primerasTres);
//let desdeNaranja = frutas.slice(1);
//console.log(desdeNaranja);
//let ultimasDos = frutas.slice(-2);
// console.log(ultimasDos);
//let entreDosIndice = frutas.slice(-3, 4);
 //console.log(entreDosIndice);


 /*.splice() -- sintaxis: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...);*/

 //let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
 //meses.splice(1, 2, "Nuevomes1", "nuevoMes2");
 //console.log(meses);
 //meses.splice(2, 0, "nuevoMeses3");
 //console.log(meses);


 /* . sort()  arrayOriginal.sort() Permite ordenar numeros y palabras alfabaticamente*/

 //let numeros = [3, 5, 8, 6, 7, 0];
 //numeros.sort();
 //console.log(numeros);
 //let palabras = ["perro", "gato", "auto", "zorro"];
 //palabras.sort();
 //console.log(palabras);


 /* .find() -- sintaxis: let resultado = arrayOriginal.find(funcionDePrueba(elemento));*/

 //let edades = [23, 45, 67, 12, 22, 89]
 //let mayorDeEdad = edades.find(edad => edad >= 18);
 //console.log(mayorDeEdad);
 //let primeraEdadMayor = edades.find(edad => edad > 30);
 //console.log(primeraEdadMayor);


 /*.map () */

 let numeros = [2,4,6];
 let numerosMultiplicados = numeros.map( function(num){
    return num * 2;
 });
// console.log(numerosMultiplicados);

 /* . filter() */

 let edades = [22,8,17,19,30];
 let mayores = edades.filter(function(edad) {
    return edad > 18
 });
// console.log(mayores);

 /* . reduce() */
  let nums = [5,7,16];
  let suma = nums.reduce(function(acum, num) {
    return acum - num ;
  });

//console.log(suma);

/* . forEach() */

let paises = ["argentina", "colombia", "brasil"];
paises.forEach(function(pais) {
    console.log(pais);
});