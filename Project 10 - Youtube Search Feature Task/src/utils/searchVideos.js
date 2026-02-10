const searchBar = document.querySelector('#searchBar');


// Getting what user is typing in input field 
const getSearchQuery = () => {
    return searchBar.addEventListener('input', (e) => e.target.value)
}

export default getSearchQuery;