 type="text/javascript"
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'Usuarios', 'Prestamos'],
    ['Septiembre', 800, 55],
    ['Octubre', 800,40 ],
    ['Noviembre', 750, 10],
    ['Diciembre', 800, 540]
  ]);

  var options = {
    chart: {
      title: 'Sistema biblioteca',
      subtitle: 'Usuarios, Prestamos',
    },
    bars: 'vertical' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}




      
