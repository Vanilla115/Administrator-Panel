var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'pie',
          data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
                label: "Total", 
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                data: [86,114,106,106,107,111,133]
              }, {
                label: "Accepted", 
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                data: [70,90,44,60,83,90]
              }, {
                label: "Pending", 
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                data: [10,21,60,44,17,21,17]
              }, {
                label: "Rejected",
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)", 
                data: [6,3,2,2,7,0,16,]
              }
        ]
    },
 });


