'use strict';

function loadDataHtml(dataToLoad = "", idElement = ""){
    document.querySelector(idElement).innerHTML = dataToLoad;
}

function runSearch(userSearch = ""){
    let dataHtml = "";

    search(userSearch).then(d=> {
        d.forEach((data)=>{
            dataHtml += createElementHtml(data);
        })
        loadDataHtml(dataHtml, '#elements');
    });
}

function setPagination(){

}