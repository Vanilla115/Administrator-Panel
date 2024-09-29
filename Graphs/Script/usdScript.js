import {fetchData, arrayAPI, data} from "./weekAPI.js"

const parseData = async () => {
    const response1 = await fetchData(arrayAPI[2])
    const response2 = await fetchData(arrayAPI[1])
    const response3 = await fetchData(arrayAPI[0])
    const dataSetArray = [response1.Cur_OfficialRate, response2.Cur_OfficialRate, response3.Cur_OfficialRate]
    console.log(dataSetArray)
    const newChifLabels = data
var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels:  newChifLabels,
            datasets: [{ 
                data: dataSetArray,
                label: "USD",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
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
 });}

 parseData()

