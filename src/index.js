// Отримати погоду за допомогою OpenWeatherMap API Опис:
//  Використайте публічне API OpenWeatherMap для отримання поточної погоди.
//  Зробіть GET-запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
//  де {city} - назва міста, а {API_KEY} - ваш ключ API OpenWeatherMap. Перегляньте отримані дані щодо погоди.

const input = document.querySelector("#input")

function makeList(elem){
 const code = `
               <li><p>Погода: ${elem.weather[0].main}</p></li>
               <li><p>Опис погоди: ${elem.weather[0].description}</p></li>
               <li><p>Кількість хмар: ${elem.clouds.all}</p></li>
               <li><p>Вологість: ${elem.main.humidity} г/м^3</p></li>
               <li><p>Видимість: ${elem.visibility}</p></li>
               <li><p>Швидкість вітру: ${elem.wind.speed} км/год</p></li>
             `
    return code
}

input.addEventListener("input", (e) => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=132d51da6bb517be4ab97307a49e31fe`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
       document.querySelector(".list").innerHTML = makeList(data)
    })
})