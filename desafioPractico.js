let gastos = [
    [10, 20, 30, 40, 50, 60, 70],// semana 1
    [5, 15, 25, 35, 45, 55, 65], // semana 2
    [8, 18, 28, 38, 48, 58, 68], // semana 3
    [12, 22, 32, 42, 52, 62, 72] // semana 4
];


//Gastos de la semana
function gastosDeUnaSemanaEspecifica(matriz, numSemana) {

    let sumaDeGastos = 0;

    for (let i = 0; i < matriz[numSemana].length ; i++) {
        sumaDeGastos += matriz[numSemana-1][i];
    }
    return sumaDeGastos
};
let sumaDeGastosSemanales = gastosDeUnaSemanaEspecifica(gastos, 2);
//console.log("Los gastos de la semna 2 fueron: "+ sumaDeGastosSemanales);

// Gastos de un dia de la semana

function gastosDeUnDiaLaSemana(matriz, numDeDia) {
    let gastosDeUnDia = 0;

    for (let i = 0; i < matriz.length; i++) {
        gastosDeUnDia += matriz[i][numDeDia-1];
        
    }
    return gastosDeUnDia;
}
let gastosTotales = gastosDeUnDiaLaSemana(gastos, 1);
//console.log("Los gastos de todos los lunes fueron: "+ gastosTotales);

// Gastos Totales

let gastoMensual = 0;

function gastosDeTodoElMes(matriz) {
    for (let i = 0; i < matriz.length ; i++) {
        for (let j = 0; j < matriz[i].length ; j++) {
            gastoMensual += matriz[i][j];
        }
    }
    return gastoMensual;
};

let gastosMensuales = gastosDeTodoElMes(gastos);
//console.log("Los gastos de todo el mes fueron: "+ gastosMensuales);

// Gastos por semana ejercicio 4

function calcularTotalDeGastosPorSemana(matriz, callback) {
    let totalGastosPorSemana = [];
    let gastosSemanales = 0;

    matriz.forEach( function(semana) {
        gastosSemanales = semana.reduce(function(total, dia) {
            return total + dia;
        });
        totalGastosPorSemana.push(gastosSemanales);
    },0);
    callback(totalGastosPorSemana);
}

//otra funcion
function mostarResultados(resultados) {
    console.log("Total de gastos por semana: " + resultados);
}

calcularTotalDeGastosPorSemana(gastos, mostarResultados);