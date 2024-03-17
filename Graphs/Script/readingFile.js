const fs = require('fs');

// Имя файла JSON для чтения
const fileName = './Test.json';

// Чтение файла JSON
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }
    
    try {
        // Преобразование данных из JSON в объект
        const jsonData = JSON.parse(data);

        // Вывод данных для проверки успешного чтения
        //console.log('Данные из файла JSON:');
        //console.log(jsonData);
        
        // Пример структуры данных 
        class MyStructure {
            constructor(labels, objects) {
                this.labels = labels;
                this.objects = objects;
            }
        }

        // Создание экземпляра структуры с прочитанными данными
        const myDataStructure = new MyStructure(jsonData.labels, jsonData.dataSet);
        const parametersCount = myDataStructure.objects.length;
        module.exports = myDataStructure;
    } catch (error) {
        console.error('Ошибка при обработке данных JSON:', error);
    }   
});

