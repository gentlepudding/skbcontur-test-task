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

        li.classList.add('cities-list__city');
        li.textContent = city;

        ul.appendChild(li);
    }

    return ul;
}

// конец не моего кода

const input = document.querySelector('.search-form__input');
const cities = document.querySelector('.search-form__popup');

function onKeypress(event) {
    setTimeout(() => {
        const searchString = input.value;
        const searchResult = search(searchString, 5);
        const searchList = createCitiesList(searchResult);
        cities.textContent = '';
        cities.appendChild(searchList);

        cities.classList.remove('search-form__popup_hidden');
    });
}

function onStringClick(event) {
    input.value = event.target.textContent;
    cities.classList.add('search-form__popup_hidden');
    input.focus();
}

input.addEventListener('keydown', onKeypress, true);
cities.addEventListener('click', onStringClick);
