import {
	cityEL,
	humidityEL,
	inputEL,
	mainTempEL,
	search,
	tempEL,
	weatherDesEL,
	weatherEL,
	weatherImgEL,
	windEL,
	loader,
	contentImage,
	flag,
	API,
	countryFlag,
} from "./assistance.js";

let city = "";

// get data from api
async function fetchData() {
	city = inputEL.value;
	if (city.trim() === "") return
	let urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}&units=metric`;
	let response = await fetch(urlAPI);
	let data = await response.json();
	setData(data);
}
//set data into template
async function setData(data) {
	const mainTemp = data.main.temp;
	const town = data.name;
	const country = data.sys.country;
	const temp = data.main.temp;
	const humidity = data.main.humidity;
	const wind = data.wind.speed;
	const weather = data.weather[0].main;
	const weatherDes = data.weather[0].description;
	const weatherIcon = data.weather[0].icon;
	let countryInfo = await searchCountryInFile(country.toLowerCase());
	mainTempEL.innerText = `${mainTemp} ℃`;
	cityEL.innerText = ` ${town} ${country}`;
	weatherEL.innerText = weather;
	weatherDesEL.innerText = weatherDes;
	tempEL.innerText = `${temp} ℃`;
	windEL.innerText = `${wind} m/s`;
	humidityEL.innerText = `${humidity} %`;
	weatherImgEL.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
	flag.src = countryInfo.flag
}
// Function to fetch and search for the country
async function searchCountryInFile(countryCode) {
	try {
		const response = await fetch(countryFlag);
		const jsonData = await response.json();

		for (let i = 0; i < jsonData.length; i++) {
			if (jsonData[i].code === countryCode) {
				return jsonData[i];
			}
		}
		// If the country is not found, return null or handle accordingly
		return null;
	} catch (error) {
		console.error('Error fetching or parsing JSON:', error);
		return null;
	}
}
contentImage.onload = () => {
	loader.style.display = 'none';
	contentImage.style.display = 'block';
};

contentImage.src = 'https://twemoji.maxcdn.com/2/svg/1f1e6-1f1eb.svg';

search.addEventListener('click', fetchData)