const Data = require('readingFile.js')
//import {myDataStructure, parametersCount} from 'readingFile.js';
var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels:  myDataStructure.labels,
            datasets: [{ 
                data: myDataStructure.objects[0].massData,
                label: myDataStructure.objects[0].label,
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
              }, { 
                data: myDataStructure.objects[1].massData,
                label: myDataStructure.objects[1].label,
                borderColor: "#3cba9f",
                backgroundColor: "#71d1bd",
                fill: false,
              }, { 
                data: myDataStructure.objects[2].massData,
                label: myDataStructure.objects[2].label,
                borderColor: "#ffa500",
                backgroundColor:"#ffc04d",
                fill: false,
              }
        ]
    },
     options: {
        plugins: {
            legend: {
                position:'right',
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
    }
 });


 