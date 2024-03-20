import { fetchData } from "./readingFile.js"

const parseData = async () => {
  const response = await fetchData()
  const newChifLabels = response.labels
  const dataSetArray = response.dataSet

  var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: newChifLabels,
            datasets: [{
            label: dataSetArray[0].label,
            data: dataSetArray[0].massData,
            fill: true,
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgb(255, 0, 0)',
            pointBackgroundColor: 'rgb(255, 0, 0)',
            pointHoverBorderColor: 'rgb(255, 0, 0)'
            }, {
            label: dataSetArray[1].label,
            data: dataSetArray[1].massData,
            fill: true,
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderColor: 'rgb(255, 165, 0)',
            pointBackgroundColor: 'rgb(255, 165, 0)',
            pointHoverBorderColor: 'rgb(255, 165, 0)'
            },
            {
            label: dataSetArray[2].label,
            data: dataSetArray[2].massData,
            fill: true,
            backgroundColor: 'rgba(0, 255, 255, 0.2)',
            borderColor: 'rgb(0, 255, 255)',
            pointBackgroundColor: 'rgb(0, 255, 255)',
            pointHoverBorderColor: 'rgb(0, 255, 255)'
            },
            {
            label: dataSetArray[3].label,
            data: dataSetArray[3].massData,
            fill: true,
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgb(0, 255, 0)',
            pointBackgroundColor: 'rgb(0, 255, 0)',
            pointHoverBorderColor: 'rgb(0, 255, 0)'
            },{
            label: dataSetArray[4].label,
            data: dataSetArray[4].massData,
            fill: true,
            backgroundColor: 'rgba(138, 43, 226, 0.2)',
            borderColor: 'rgb(138, 43, 226)',
            pointBackgroundColor: 'rgb(138, 43, 226)',
            pointHoverBorderColor: 'rgb(138, 43, 226)'
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