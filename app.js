/* Imports */

/* Get DOM Elements */
const locationSelect = document.getElementById('location-select');
const locationImage = document.getElementById('location-img');

const architectureSelect = document.getElementById('architecture-select');
const architectureImage = document.getElementById('architecture-img');

const popularitySelect = document.getElementById('popularity-select');
const popularityImage = document.getElementById('popularity-img');

const cityNameBtn = document.getElementById('city-btn');
const cityNameInput = document.getElementById('city-input');
const cityNameList = document.getElementById('city-list');

const sloganBtn = document.getElementById('slogan-btn');
const sloganInput = document.getElementById('slogan-input');
const sloganList = document.getElementById('slogan-list');

const reportEl = document.getElementById('report');
const citySlogan = document.getElementById('city-slogans');

/* State */
let cities = [];
let slogans = [];
let locationCounter = 0;
let architectureCounter = 0;
let popularityCounter = 0;
let citySlogans = `${cities}: ${slogans}`;

/* Events */

locationSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    locationImage.src = `./assets/Location-${value}.jpeg`;
    locationCounter++;

    displayStats();
});

architectureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImage.src = `./assets/Architecture-${value}.jpeg`;
    architectureCounter++;

    displayStats();
});

popularitySelect.addEventListener('change', (e) => {
    const value = e.target.value;
    popularityImage.src = `./assets/Known-${value}.jpeg`;
    popularityCounter++;

    displayStats();
});

sloganBtn.addEventListener('click', (e) => {
    slogans.push(sloganInput.value);
    displaySlogans();
});

cityNameBtn.addEventListener('click', (e) => {
    cities.push(cityNameInput.value);
    displayCities();
});

/* Display Functions */
function createStatsString(locationNum, architectureNum, popularityNum) {
    return `You have changed the location ${locationNum} times, the architecture ${architectureNum} times, and the known for ${popularityNum} times. And who can forget that incredible city name and city slogan.`;
}

function displayStats() {
    const statsString = createStatsString(locationCounter, architectureCounter, popularityCounter);

    reportEl.textContent = statsString;
}

function displayCities() {
    cityNameList.textContent = '';
    for (let city of cities) {
        const p = document.createElement('p');
        p.textContent = city;
        cityNameList.append(p);
    }
}

function displaySlogans() {
    sloganList.textContent = '';
    for (let slogan of slogans) {
        const p = document.createElement('p');
        p.textContent = slogan;
        sloganList.append(p);
    }
}

function displayCitySlogan() {
    citySlogan.textContent = '';
    for (let citySlogan of citySlogans) {
        const h1 = document.createElement('h1');
        h1.textContent = citySlogan;
        citySlogan.append(h1);
    }
}

// (don't forget to call any display functions you want to run on page load!)
