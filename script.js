
let cities = ['Москва', 'Минск', 'Мадрид', 'Анкара', 'Каир', 'Нью-Йорк', 'Дубай'];
let tempretures = []; //создаём массивы

for(let i = 0; i < cities.length; i++) {
  let tempreture = prompt('Введите температуру для города ' + cities[i]);
  if(isNaN(tempreture)) {
    alert('Вы ввели некорректное число! Попробуйте ещё раз.');
  } tempretures.push(tempreture);
} //код для ввода данных от пользователя

let list = document.getElementById('city-list');//получение данных от HTML
 for (let i = 0; i < cities.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = cities[i] + ':' + tempretures[i] + ' °C';
  list.appendChild(listItem);
  list.style.listStyle = 'none';
} //код для добавления элементовнв страницу
 
let maxTempreture = document.getElementById('max');
maxTempreture.textContent = Math.max(...tempretures);
let minTempreture = document.getElementById('min');
minTempreture.textContent = Math.min(...tempretures);
// подсчёт максимальной и минимальной температуры