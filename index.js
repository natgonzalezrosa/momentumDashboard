
// UNSPLASH API: USED TO OBTAIN RANDOM IMAGE AND ITS LOCATION
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        if (data.location.name === null){
            document.getElementById("location").textContent =`Somewhere in the middle of nowhere`
        } else {
            document.getElementById("location").textContent = `${data.location.name}`
        }
    })
    .catch(err => {
        // Use a default background image/location
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1479030160180-b1860951d696?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzA3OTY5MzI&ixlib=rb-1.2.1&q=85
)`
		document.getElementById("location").textContent = `Lower Antelope Canyon, Page, United States`
    })

// COINGECKO API: USED TO OBTAIN BITCOIN INFO
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

// GET THE CURRENT TIME AND DISPLAY IT EVERY SECOND
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

// OPENWEATHERMAP API: USING CURRENT POSITION, OBTAIN USER'S WEATHER, TEMP AND CITY
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});

// OFFICIAL JOKE API: USED TO OBTAIN RANDOM PROGRAMMER JOKE
fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(res => {
        if(!res.ok){
            throw Error("Joke data is not available")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById('set-up').textContent = `${data[0].setup}`
        document.getElementById('punchline').textContent = `${data[0].punchline}`
    })