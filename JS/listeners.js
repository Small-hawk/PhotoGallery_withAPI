'use strict';

document.querySelector('#searchButton').addEventListener('click', (evt)=>{
    let dataInput = "";

    dataInput = document.querySelector('#searchBar').value;
    console.log(dataInput);
    (dataInput.length ==0) ? alert("empty search!") : runSearch(dataInput);
})

document.querySelector('#searchBar').addEventListener('keyup', (evt) => {
    if(evt.key == 'Enter'){
        let dataInput = "";

        dataInput = document.querySelector('#searchBar').value;
        console.log(dataInput);
        (dataInput.length ==0) ? alert("empty search!") : runSearch(dataInput);
    }
})

