'use strict';

document.querySelector('#searchButton').addEventListener('click', (evt) => {
    let dataInput = "";

    dataInput = document.querySelector('#searchBar').value;
    console.log(dataInput);
    (dataInput.length == 0) ? alert("empty search!") : runSearch(dataInput);
})

document.querySelector('#searchBar').addEventListener('keyup', (evt) => {
    if (evt.key == 'Enter') {
        let dataInput = "";

        dataInput = document.querySelector('#searchBar').value;
        console.log(dataInput);
        (dataInput.length == 0) ? alert("empty search!") : runSearch(dataInput);
    }
})

document.querySelector('#elements').addEventListener('click', evt => {
    let target = evt.target;
    console.log(target);
    console.log(target.id);
    if (target.id == 'like') {
        console.log(target.id);
        target.classList.add('buttonLiked');
        console.log(target.classList);
    }
})