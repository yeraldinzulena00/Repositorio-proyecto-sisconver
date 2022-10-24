const $grafica = document.querySelector("#grafica");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Libros", "Elementos", "Prestamos", "Devoluciones","Usuarios"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [20, 50, 50, 50,50], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
    ],// Color de fondo
    borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
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