'use strict';

document.querySelector('#searchButton').addEventListener('click', (evt) => {
    let dataInput = "";

    dataInput = document.querySelector('#searchBar').value;
    (dataInput.length == 0) ? alert("empty search!") : setUserSearch(dataInput);
})

document.querySelector('#searchBar').addEventListener('keyup', (evt) => {
    if (evt.key == 'Enter') {
        let dataInput = "";

        dataInput = document.querySelector('#searchBar').value;
        (dataInput.length == 0) ? alert("empty search!") : setUserSearch(dataInput);
    }
})

document.querySelector('#elements').addEventListener('click', evt => {
    let target = {};
    let id = '';

    target = evt.target;
    id = target.parentElement.parentElement.parentElement.id;
    if (target.id == 'like') {
        target.classList.contains('is-focused') ? unlikePhoto(id) : likePhoto(id);
        target.classList.toggle('is-focused');
    }
})

document.querySelector('#prevPageB').addEventListener('click',(evt)=>document.documentElement.scrollTop = 0);
document.querySelector('#nextPageB').addEventListener('click',(evt)=>document.documentElement.scrollTop = 0);