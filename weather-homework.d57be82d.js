document.querySelector("#input").addEventListener("input",u=>{fetch(`https://api.openweathermap.org/data/2.5/weather?q=${u.target.value}&appid=132d51da6bb517be4ab97307a49e31fe`).then(u=>u.json()).then(u=>{document.querySelector(".list").innerHTML=`
               <li><p>\u{41F}\u{43E}\u{433}\u{43E}\u{434}\u{430}: ${u.weather[0].main}</p></li>
               <li><p>\u{41E}\u{43F}\u{438}\u{441} \u{43F}\u{43E}\u{433}\u{43E}\u{434}\u{438}: ${u.weather[0].description}</p></li>
               <li><p>\u{41A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{445}\u{43C}\u{430}\u{440}: ${u.clouds.all}</p></li>
               <li><p>\u{412}\u{43E}\u{43B}\u{43E}\u{433}\u{456}\u{441}\u{442}\u{44C}: ${u.main.humidity} \u{433}/\u{43C}^3</p></li>
               <li><p>\u{412}\u{438}\u{434}\u{438}\u{43C}\u{456}\u{441}\u{442}\u{44C}: ${u.visibility}</p></li>
               <li><p>\u{428}\u{432}\u{438}\u{434}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{432}\u{456}\u{442}\u{440}\u{443}: ${u.wind.speed} \u{43A}\u{43C}/\u{433}\u{43E}\u{434}</p></li>
             `})});
//# sourceMappingURL=weather-homework.d57be82d.js.map
