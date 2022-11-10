/* Imports */
import { getBeanies, getAstroSign } from './fetch-utils.js';
import { renderBeanies, renderAstroSign } from './render.js';
/* Get DOM Elements */
const beanieList = document.querySelector('#beanie-list');
const searchForm = document.querySelector('#search-form');

const astroSignSelect = document.querySelector('#astro-select');

/* State */
let beanies = [];
let astrosigns = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanies();
    // call a fetch function that's getting all astroSigns
    const response = await getAstroSign();
    // call a display function that displays all astroSigns
    astrosigns = response.data;
    displayAstroSigns();
});

async function findBeanies(astroSign) {
    const response = await getBeanies(astroSign);

    beanies = response.data;

    displayBeanies();
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
});

/* Display Functions */

function displayBeanies() {
    beanieList.innerHTML = '';
    for (let beanie of beanies) {
        const beanieEl = renderBeanies(beanie);
        beanieList.append(beanieEl);
    }
}

function displayAstroSigns() {
    for (let astrosign of astrosigns) {
        const optionEl = renderAstroSign(astrosign);
        astroSignSelect.append(optionEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayBeanies();
