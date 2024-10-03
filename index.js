document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('#search-box');
    const working = document.querySelector('#working-content');
    const searchBar = document.querySelector('#search-bar input');
    searchBar.addEventListener('input', search);
    let readyOrders = document.querySelectorAll('.orders')[0].children;
    let waitingOrders = document.querySelectorAll('.orders')[1].children;
    const map = new Map();
    const sr = document.createElement('div');
    sr.setAttribute('id', 'search-result');

    for (let i = 0; i < readyOrders.length; i++) {
        let copy = readyOrders[i].cloneNode(true);
        map.set(readyOrders[i], copy);
    }
    for (let i = 0; i < waitingOrders.length; i++) {
        let copy = waitingOrders[i].cloneNode(true);
        map.set(waitingOrders[i], copy);
    }

    function search() {
        if (searchBar.value == '') {
            searchBox.removeChild(sr);
            searchBox.style.height = '80px';
            working.style.height = '288px';
            return;
        }

        let searchResult = document.querySelector('#search-result');
        for (let i = 0; i < readyOrders.length; i++) {
            let name = readyOrders[i].firstChild.nextSibling.textContent;
            if (searchResult == null) {
                searchBox.appendChild(sr);
                searchResult = document.querySelector('#search-result');
                searchBox.style.height = '250px';
                working.style.height = '118px';
            }
            if (name.includes(searchBar.value)) {
                searchResult.appendChild(map.get(readyOrders[i]));
            } else {
                if (searchResult != null && searchResult.contains(map.get(readyOrders[i]))) {
                    searchResult.removeChild(map.get(readyOrders[i]));
                }
            }
        }
        for (let i = 0; i < waitingOrders.length; i++) {
            let name = waitingOrders[i].firstChild.nextSibling.textContent;
            if (searchResult == null) {
                searchBox.appendChild(sr);
                searchResult = document.querySelector('#search-result');
                searchBox.style.height = '250px';
                working.style.height = '118px';
            }
            if (name.includes(searchBar.value)) {
                searchResult.appendChild(map.get(waitingOrders[i]));
            } else {
                if (searchResult != null && searchResult.contains(map.get(waitingOrders[i]))) {
                    searchResult.removeChild(map.get(waitingOrders[i]));
                }
            }
        }
    }
});