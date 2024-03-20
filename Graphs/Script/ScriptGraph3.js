import { fetchData } from "./readingFile.js"

const parseData = async () => {
  const response = await fetchData()
  const newChifLabels = response.labels
  const dataSetArray = response.dataSet

  var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: newChifLabels,
            datasets: [{
              label: dataSetArray[0].label,
              data: dataSetArray[0].massData,
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
              }, {
              label: dataSetArray[1].label,
              data: dataSetArray[1].massData,
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            },{
              label: dataSetArray[2].label,
              data: dataSetArray[2].massData,
              fill: true,
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgb(255, 206, 86)',
              pointBackgroundColor: 'rgb(255, 206, 86)',
              pointHoverBorderColor: 'rgb(255, 206, 86)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff'
            },
            {
              label: dataSetArray[3].label,
              data: dataSetArray[3].massData,
              fill: true,
              backgroundColor: 'rgba(46, 139, 87, 0.2)',
              borderColor: 'rgb(46, 139, 87)',
              pointBackgroundColor: 'rgb(46, 139, 87)',
              pointHoverBorderColor: 'rgb(46, 139, 87)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff'
            },{
              label: dataSetArray[4].label,
              data: dataSetArray[4].massData,
              fill: true,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgb(75, 192, 192)',
              pointBackgroundColor: 'rgb(75, 192, 192)',
              pointHoverBorderColor: 'rgb(75, 192, 192)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff'
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
  },
 });
}
parseData()