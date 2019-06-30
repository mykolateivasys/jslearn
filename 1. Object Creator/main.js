'use strict'

var list = document.getElementById('list');
var button = document.getElementById('addButton');

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
};

var persons = [];

var dave = new Person('Dave', 26, 'New York');
var joan = new Person('Joan', 30, 'Amsterdam');
var matt = new Person('Matt', 63, 'Barcelona');

persons.push(dave, joan, matt);

(function renderList(list) {
    for (var i = 0; i < persons.length; i++) {
        var domPerson = document.createElement('li');
        domPerson.classList.add("list-group-item");
        var textNode = document.createTextNode(`${persons[i].name}, ${persons[i].age}, ${persons[i].city}`);
        domPerson.appendChild(textNode);
        list.appendChild(domPerson)
    }
})(window.list);

function addPerson(event) {
    event.preventDefault()
    var name = document.getElementById('nameInput');
    var age = document.getElementById('ageInput');
    var city = document.getElementById('cityInput');
    var newPerson = new Person(name.value, age.value, city.value);
    persons.push(newPerson);
    createDomPerson(newPerson)
    name.value = '';
    age.value = '';
    city.value = '';
}

function createDomPerson(person) {
    var newDomPerson = document.createElement('li');
    newDomPerson.classList.add('list-group-item');
    var textNode = document.createTextNode(`${person.name}, ${person.age}, ${person.city}`);
    newDomPerson.appendChild(textNode);
    renderNewPerson(newDomPerson, window.list)
}

function renderNewPerson(domPerson, listToAppend) {
    listToAppend.appendChild(domPerson);
}

button.addEventListener('click', addPerson);