const inputEL = document.getElementById("town");
const mainTempEL = document.getElementById("temperature-main");
const cityEL = document.getElementById("city");
const countryEL = document.getElementById("country");
const weatherEL = document.getElementById("weather");
const weatherDesEL = document.getElementById("weather-des");
const tempEL = document.getElementById("temprature");
const windEL = document.getElementById("wind");
const humidityEL = document.getElementById("humidity");
const weatherImgEL = document.getElementById("weather-img");
const search = document.getElementById("search");
const loader = document.querySelector(".loader");
const contentImage = document.querySelector(".content");
let flag = document.getElementById("flag");
let countryFlag = "../country-flag.json";

const API = "f832a8efeeb0cdfcbdfb8b19812e041f";
export {
	inputEL,
	mainTempEL,
	cityEL,
	countryEL,
	weatherEL,
	weatherDesEL,
	tempEL,
	windEL,
	humidityEL,
	search,
	weatherImgEL,
	loader,
	contentImage,
	flag,
	API,
	countryFlag,
};
