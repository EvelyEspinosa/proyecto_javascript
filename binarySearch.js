let arreglo = [1, 2, 3, 4, 5, 6, 7];
let nroABuscar = 3;

function busquedaBinaria(arreglo, valorBuscado) {
    let indiceDeBusqueda = 0;
    let limiteDeBusqueda = arreglo.length -1;
    while (indiceDeBusqueda <= limiteDeBusqueda) {
        const INDICEMITAD = Math.round((indiceDeBusqueda + limiteDeBusqueda) / 2);
        const ELEMENTOMEDIO = arreglo[INDICEMITAD];
        if (ELEMENTOMEDIO == valorBuscado) {
            return INDICEMITAD;
        }
        if (ELEMENTOMEDIO > valorBuscado) {
            limiteDeBusqueda = INDICEMITAD - 1;
        }else{
            indiceDeBusqueda = INDICEMITAD + 1;
        }
    }
    return null;
}let indiceEncontrado = busquedaBinaria(arreglo, nroABuscar);
console.log(indiceEncontrado);