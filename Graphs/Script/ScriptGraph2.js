import { fetchData } from "./ParseServer.js"

const parseData = async () => {
  const response = await fetchData()
  const newChifLabels = response.labels
  const dataSetArray = response.dataSet

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels:  newChifLabels,
        datasets: [{ 
            data: dataSetArray[0].massData,
            label: dataSetArray[0].label,
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          }, { 
            data: dataSetArray[1].massData,
            label: dataSetArray[1].label,
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            fill: false,
          }, { 
            data: dataSetArray[2].massData,
            label: dataSetArray[2].label,
            borderColor: "#C0392B",
            backgroundColor:"#C0392B",
            fill: false,
          },{
            data: dataSetArray[3].massData,
            label: dataSetArray[3].label,
            borderColor: "#ffa500",
            backgroundColor:"#ffc04d",
            fill: false,
          },{
            data: dataSetArray[4].massData,
            label: dataSetArray[4].label,
            borderColor: "#4A235A",
            backgroundColor:"#4A235A",
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
}

parseData()