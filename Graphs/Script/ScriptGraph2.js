let mass = [[70,50,44,60,83,50,66],[10,21,60,44,17,21,17]]
//import {myDataStructure, parametersCount} from 'readingFile.js';

//let labels = myDataStructure.labels
var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [
              { 
                data: mass[0],
                label: "Accepted",
                borderColor: "#3cba9f",
                backgroundColor: "#71d1bd",
                fill: false,
              }, { 
                data: mass[1],
                label: "Pending",
                borderColor: "#ffa500",
                backgroundColor:"#ffc04d",
                fill: false,
              }, { 
                data: [6,3,2,2,7,0,16],
                label: "Rejected",
                borderColor: "#c45850",
                backgroundColor:"#d78f89",
                fill: false,
              },
              { 
                data: [6,3,2,2,7,2,22],
                label: "Rejected2",
                borderColor: "#c45850",
                backgroundColor:"#d78f89",
                fill: false,
              },      
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