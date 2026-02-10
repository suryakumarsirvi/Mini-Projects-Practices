import { categories } from './src/db/tabsData.js'
import { videosData } from './src/db/videoData.js'
import renderVideos from './src/utils/renderVideos.js'
import getSearchQuery from './src/utils/searchVideos.js';
const feed = document.querySelector('.feed');

let selected = "All"
const tabs = document.querySelector('#tabs');
let filteredData = []


// Filtering videos data on basis of selected tab
function filter() {
    if (selected === "All") {
        filteredData = [...videosData];
    } else {
        filteredData = videosData.filter(
            (video) => video.category === selected
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

function showResultOfQuery(){
    videosData.forEach((video)=>{
        console.log(video.title)
    })
    console.log(getSearchQuery())
}

createTabs()
filter()
showResultOfQuery(getSearchQuery)