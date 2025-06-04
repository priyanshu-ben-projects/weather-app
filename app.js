let showPlace = document.getElementById("showPlace");
let temp = document.getElementById("getTemp");
let humidity = document.getElementById("getHumidity");
let weather = document.getElementById("getWeather");
let showStatus = document.getElementById("showStatus");

async function weatherDetails(event) {
  try {
    event.preventDefault();
    let place = document.getElementById("getPlace").value.trim();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=41b2661713a23c9694d04efc17e028dc&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    showPlace.textContent = `Country : ${data.name}`;
    humidity.textContent = `Humidity : ${data.main.humidity}`;
    temp.textContent = `Temperature : ${data.main.temp} °C`;

    const status = data.weather[0].main;
    weather.textContent = `Status : ${status}`;


    let emoji = "❓"; 
    switch (status.toLowerCase()) {
      case "clear":
        emoji = "☀️";
        break;
      case "clouds":
        emoji = "☁️";
        break;
      case "rain":
        emoji = "🌧️";
        break;
      case "thunderstorm":
        emoji = "⛈️";
        break;
      case "drizzle":
        emoji = "🌦️";
        break;
      case "snow":
        emoji = "❄️";
        break;
      case "mist":
      case "haze":
      case "fog":
        emoji = "🌫️";
        break;
      case "smoke":
        emoji = "💨";
        break;
      case "dust":
      case "sand":
      case "ash":
        emoji = "🌪️";
        break;
      default:
        emoji = "🌈";
    }

    showStatus.textContent = emoji;
  } catch (err) {
    console.error("Weather API error:", err);
  }
}