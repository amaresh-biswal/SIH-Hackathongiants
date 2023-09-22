document.addEventListener('DOMContentLoaded', () => {
    const weatherContainer = document.getElementById('weather-container');

    
    const apiKey = '68540f6bf62fa1cc356a0da08c669180';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const states = ['Andhra Pradesh','State of Jammu and Kashmīr','Delhi', 'Arunachal Pradesh', 'Assam', 'State of Bihār', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand','Union Territory of Puducherry', 'West Bengal'];

    states.forEach(state => {
        fetch(`${apiUrl}?q=${state},India&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const weatherCard = document.createElement('div');
                weatherCard.classList.add('weather-card');

                const cityName = data.name;
                const temperature = Math.round(data.main.temp - 273.15);
                const weatherDescription = data.weather[0].description;
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

                weatherCard.innerHTML = `
                    <h2>${cityName}</h2>
                    <img src="${iconUrl}" alt="${weatherDescription}">
                    <p>${weatherDescription}</p>
                    <p>Temperature: ${temperature}°C</p>
                `;

                weatherContainer.appendChild(weatherCard);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    });
});
