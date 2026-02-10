import { categories } from './src/db/tabsData.js'
import { videosData } from './src/db/videoData.js'
import renderVideos from './src/utils/renderVideos.js'
import voiceSearch from './src/utils/voiceSearch.js';
const feed = document.querySelector('.feed');
const searchBar = document.querySelector('#searchBar');
const tabs = document.querySelector('#tabs');

let selected = "All"
let filteredData = [];
let query = '';


// Filtering data
function filter() {
    // Filtering videos data on basis of selected tab

    if (selected === "All") {
        filteredData = [...videosData];
    } else {
        filteredData = videosData.filter(
            (video) => video.category === selected
        );
    }
    
    // Filtering videos data on basis of user query
    if (query.trim() !== '') {
        filteredData = videosData.filter(
            (video) => {
                let q = query.toLowerCase()
                return video.title.toLowerCase().includes(q) || video.channel.toLowerCase().includes(q);
            }
        );
    }

    renderVideos(feed, filteredData)
}

// Adding style to selected tab & showing filtered videos based on clicked tab
function createTabs() {
    tabs.innerHTML = '';
    categories.forEach((category) => {
        const btn = document.createElement('button');
        btn.textContent = category
        if (category == selected) {
            btn.classList.add("active2")
        }
        btn.classList.add('tab')
        btn.addEventListener("click", () => {
            selected = category
            createTabs()
            filter();
        })
        tabs.appendChild(btn)
    })

}

function searchUserQuery() {
    searchBar.addEventListener('input', (e) => {
        query = e.target.value;
        filter()
    })
}

createTabs()
searchUserQuery()
filter()
voiceSearch()

