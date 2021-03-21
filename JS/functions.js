'use strict';

function loadDataHtml(dataToLoad = "", idElement = "") {
    document.querySelector(idElement).innerHTML = dataToLoad;
}

function runSearch(userSearch = "") {
    let dataHtml = "";

    search(userSearch).then(d => {
        d.forEach((data) => {
            dataHtml += createElementHtml(data);
        })
        loadDataHtml(dataHtml, '#elements');
    });
}

function localFormDate(elem) {
    let date = new Date(elem);
    let formatedDate = new Date();
    // console.log(date);
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    return formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
}

function setPagination() {

}