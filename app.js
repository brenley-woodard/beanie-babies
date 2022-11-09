/* Imports */
import { renderBeanies } from './render.js';
/* Get DOM Elements */
const beanieList = document.querySelector('#beanie-list');
const searchForm = document.querySelector('#search-form');

const astroSignSelect = document.querySelector('#astro-select');

/* State */
let beanies = [];
let astrosigns = [];

/* Events */

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
