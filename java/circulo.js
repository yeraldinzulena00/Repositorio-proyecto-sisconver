
       type="text/javascript"
       google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawChart);
 
       function drawChart() {
 
         var data = google.visualization.arrayToDataTable([
           ['Task', 'Hours per Day'],
           ['Libros',     1],
           ['Usuarios',      1],
           ['Elementos',  1],
           ['Prestamos', 1],
           ['Devoluciones',    1]
         ]);
 
         var options = {
           title: 'Sistema Biblioteca'
         };
 
         var chart = new google.visualization.PieChart(document.getElementById('piechart'));
 
         chart.draw(data, options);
       }