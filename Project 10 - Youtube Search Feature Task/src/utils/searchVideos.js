const searchBar = document.querySelector('#searchBar');


// Getting what user is typing in input field 
const getSearchQuery = () => {
    let query = searchBar.addEventListener('input', (e) => e.target.value)
    return query
}

export default getSearchQuery;