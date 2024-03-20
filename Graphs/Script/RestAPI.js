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
  const apiUrl = 'https://v6.exchangerate-api.com/v6/16a73fc5928855bf0e5a2f79/latest/USD';
  fetchData(apiUrl)
    .then(data => {
      // Обработка полученных данных
      console.log(data);
    });