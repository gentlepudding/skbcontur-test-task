// не мой код

function search(str, limit = 10) {
    str = str.toLowerCase();
    return kladr.filter(entity => {
        const city = entity.City.toLowerCase();
        return city.includes(str);
    }).slice(0, limit);
}

function createCitiesList(entities) {
    const ul = document.createElement('ul');

    ul.classList.add('cities-list');

    for (const entity of entities) {
        const city = entity.City;
        const li = document.createElement('li');

        li.classList.add('cities-list__string');
        li.textContent = city;

        ul.appendChild(li);
    }

    return ul;
}

// конец не моего кода



// reaction
// class toggle
// dom manipulation

const input = document.querySelector('.search-form');
const cities = document.querySelector('.cities');

// focus
// blur
// change
// keyup/keydown/keypress
// click/mousedown/mouseup

function onKeypress(event) {
    setTimeout(() => {
        /*
        1. получить ввод пользователя
        2. по этому вводу найти города
        3. по этим городам построить html-список
        4. очистить текущий список
        5. вставить в него новый список
        */

        const searchString = input.value;
        const searchResult = search(searchString, 5);
        const searchList = createCitiesList(searchResult);
        cities.textContent = '';
        cities.appendChild(searchList);
        console.log(searchList);

        cities.classList.remove('hidden');
    });
}

function onStringClick(event) {
    input.value = event.target.textContent;
    cities.classList.add('hidden');
    input.focus();
}

input.addEventListener('keypress', onKeypress, true);
cities.addEventListener('click', onStringClick);
