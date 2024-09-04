let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.table(matriz);

// Recorrer la totalidad de los datos de la matriz

for(let i = 0 ; i < matriz.length ; i++){  // For es para recorrer las FILAS
    for(let j = 0 ; j < matriz.length ; j++){ // For para recorer las COLUMNAS
        console.log(matriz[i][j]);
    }
}

// FILTRAR

for (let i = 0 ; i < matriz.length ; i++ ){ // FILAS cuando no sea cuadrado este no cambia
    for (let j = 0 ; j < matriz.length ; j++ ){ // COLUMNAS --matriz[i].length
        if (matriz[i][j] % 2 == 0) {
            console.log(matriz[i][j]);
        }
    }
}