function fetchData(apiUrl) {
    // Выполнение GET-запроса
    return fetch(apiUrl)
      .then(response => {
        // Проверка статуса ответа
        if (!response.ok) {
          throw new Error('Ошибка HTTP: ' + response.status);
        }
        // Преобразование ответа в формат JSON и возврат данных
        return response.json();
      })
      .catch(error => {
        // Обработка ошибок
        console.error('Ошибка при получении данных:', error);
      });
  }
  const apiUrl = 'https://api.nbrb.by/exrates/rates?periodicity=0';
  fetchData(apiUrl)
    .then(data => {
      // Обработка полученных данных
      //const parameterValue1 = data.Cur_OfficialRate
      //document.getElementById('parameterValue1').textContent = "BYN: " + parameterValue1;
      //console.log(parameterValue1)
      const curData = (data.filter(obj => ['USD', 'EUR', 'RUB', 'PLN'].includes(obj.Cur_Abbreviation)));
      document.getElementById('parameterValue1').textContent = "BYN: " + curData[0].Cur_OfficialRate;
      document.getElementById('parameterValue2').textContent = "BYN: " + curData[1].Cur_OfficialRate;
      document.getElementById('parameterValue3').textContent = "BYN: " + curData[3].Cur_OfficialRate;
      document.getElementById('parameterValue4').textContent = "BYN: " + curData[2].Cur_OfficialRate;
      console.log(CurData)
    });