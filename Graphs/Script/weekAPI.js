const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Добавляем нуль, если месяц однозначный
const day = String(currentDate.getDate()).padStart(2, '0'); // Добавляем нуль, если день однозначный

const nowDate = `${year}-${month}-${day}`;
const date1 = new Date(year, currentDate.getMonth(), currentDate.getDate() - 7);
const date2 = new Date(year, currentDate.getMonth(), currentDate.getDate() - 14);

const year1 = date1.getFullYear();
const month1 = String(date1.getMonth() + 1).padStart(2, '0');
const day1 = String(date1.getDate()).padStart(2, '0');

const year2 = date2.getFullYear();
const month2 = String(date2.getMonth() + 1).padStart(2, '0');
const day2 = String(date2.getDate()).padStart(2, '0');

const formattedDate1 = `${year1}-${month1}-${day1}`;
const formattedDate2 = `${year2}-${month2}-${day2}`;

const apiUrl1 = `https://api.nbrb.by/exrates/rates/431?ondate=${nowDate}`
const apiUrl2 = `https://api.nbrb.by/exrates/rates/431?ondate=${formattedDate1}`
const apiUrl3 = `https://api.nbrb.by/exrates/rates/431?ondate=${formattedDate2}`

export async function fetchData(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Ошибка HTTP: ' + response.status);
      }
      return await response.json();
  } catch (error) {
      console.error('Ошибка при получении данных:', error);
  }
}

export const arrayAPI = [apiUrl1,apiUrl2,apiUrl3]
export const data = [formattedDate2,formattedDate1,nowDate]









