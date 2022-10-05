const search = document.getElementsByClassName('header__search-input')[0];
const searchButton = document.getElementsByClassName('header__search-button')[0];
const searchItemsWrapper = document.getElementsByClassName('header__search-results')[0];
const searchItems = document.querySelectorAll('.header__search-item');
const searchRecentItems = document.querySelectorAll('.header__search-recent-item');

const showSearchRecentItems = () => {
    const lastSearchValue = localStorage.getItem('search');
    if (lastSearchValue) {
        searchRecentItems.forEach(element => {
            element.classList.remove('header__search-recent-item--hidden');
        });
        searchRecentItems[0].style = 'border-top: 1px solid var(--white-color)';
        console.log(searchRecentItems[0]);
        searchRecentItems[1].innerHTML = lastSearchValue;
    }
}

search.oninput = () => {
    const value = search.value;
    const noItemsElement = document.getElementsByClassName('header__search-item--no-items')[0];
    searchItems.forEach(element => {
        if (value !== '') {
            searchItemsWrapper.classList.remove('header__search-results--hidden');
            if (element.innerText.toLowerCase().search(value.toLowerCase()) !== -1 && !element.classList.contains('header__search-item--no-items')) {
                element.classList.remove('header__search-item--hidden');
            } else {
                element.classList.add('header__search-item--hidden');
            }
        } else {
            searchItemsWrapper.classList.add('header__search-results--hidden');
        }
    })
    const hiddenResults = document.querySelectorAll('.header__search-item--hidden');
    if (hiddenResults.length === searchItems.length) {
        noItemsElement.classList.remove('header__search-item--hidden');
    }
    showSearchRecentItems();
}

search.addEventListener('blur', function() {
    if (!searchItemsWrapper.classList.contains('header__search-results--hidden')) {
        searchItemsWrapper.classList.add('header__search-results--hidden');
    }
})

searchButton.addEventListener('click', function() {
    const value = search.value;
    localStorage.setItem('search', value);
    showSearchRecentItems();
})