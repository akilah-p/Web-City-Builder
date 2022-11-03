/* Imports */

/* Get DOM Elements */
const locationSelect = document.getElementById('location-select');
const locationImage = document.getElementById('location-img');

const architectureSelect = document.getElementById('architecture-select');
const architectureImage = document.getElementById('architecture-img');

const popularitySelect = document.getElementById('popularity-select');
const popularityImage = document.getElementById('popularity-img');

const sloganBtn = document.getElementById('slogan-btn');
const sloganInput = document.getElementById('slogan-input');
const sloganList = document.getElementById('slogan-list');

/* State */
let slogans = [];
let locationCounter = 0;
let architectureCounter = 0;
let popularityCounter = 0;
/* Events */
locationSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    locationImage.src = `./assets/location-${value}.jpeg`;
    locationCounter++;
});

architectureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImage.src = `./assets/location-${value}.jpeg`;
    architectureCounter++;
});

popularitySelect.addEventListener('change', (e) => {
    const value = e.target.value;
    popularityImage.src = `./assets/location-${value}.jpeg`;
    popularityCounter++;
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
