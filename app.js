/* Imports */
import { getBeanies } from './fetch-utils.js';
import { renderBeanies } from './render.js';
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
    astroSigns = response.data;
    displayAstroSigns();
});

async function findBeanies(astroSign) {
    const response = await getBeanies(astroSign);

    beanies = response.data;

    displayBeanies();
}

/* Display Functions */

function displayBeanies() {
    beanieList.innerHTML = '';
    for (let beanie of beanies) {
        const beanieEl = renderBeanies(beanie);
        beanieList.append(beanieEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayBeanies();
