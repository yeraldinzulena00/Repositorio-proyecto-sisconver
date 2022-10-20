const $grafica = document.querySelector("#grafica");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Libros", "Elementos", "Prestamos", "Devoluciones","Usuarios"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [20, 50, 50, 50,50], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(232,233,161)',
        'rgba(250,181,102)',
        'rgba(229,112,126)',
        'rgba(229,112,126)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],// Color del borde
    borderWidth: 4,// Ancho del borde
};
new Chart($grafica, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});