'use strict';

function loadDataHtml(dataToLoad = "", idElement = "") {
    document.querySelector(idElement).innerHTML = dataToLoad;
}

function runSearch() {
    let dataHtml = "";

    search(userSearch).then(d => {
        d.forEach((data) => {
            dataHtml += createElementHtml(data);
        })
        loadDataHtml(dataHtml, '#elements');
        showUserResults();
    });
}

function localFormDate(elem) {
    let date = new Date(elem);
    let formatedDate = new Date();
    return formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
}

function likePhoto(newLike) {
    let tempData = new Object();

    if (!localStorage.getItem('likedData')) {
        localStorage.setItem('likedData', '[]');
    }
    tempData = JSON.parse(localStorage.getItem("likedData"));
    if(!tempData.includes(newLike)){
        tempData.push(newLike);
    }
    localStorage.setItem('likedData', JSON.stringify(tempData));
}

function unlikePhoto(newUnLike) {
    let tempData = new Object();

    if (localStorage.getItem('likedData')) {
        tempData = JSON.parse(localStorage.getItem("likedData"));
        tempData = tempData.filter(function(d){return d !=newUnLike});
        localStorage.setItem('likedData', JSON.stringify(tempData));
    }
}

function isLiked(idPhoto) {
    let tempData = new Object();
    let flag = false;

    if (localStorage.getItem('likedData')) {
        console.log('yes')
        tempData = JSON.parse(localStorage.getItem("likedData"));
        tempData.forEach(function(d){
            if(d === idPhoto){
                console.log("yes yes")
                flag = true;
            }
        })
    }
    return flag;
}

function setItemsPerPage(quantity) {
    totalPerPage = quantity;
    runSearch();
}

function setTotalItems(total) {
    totalItems = total;
}

function setOrderBy(order) {
    orderBy = order;
    runSearch();
}

function nextPage() {
    currPage++;
    runSearch();
}

function previousPage() {
    currPage--;
    runSearch();
}

function setUserSearch(inputStr) {
    userSearch = inputStr;
    runSearch();
}

function showUserResults() {
    let text = "";

    text = `<p>
                Search: ${userSearch.toUpperCase()}, Total Items: ${totalItems}, Total Pages: ${Math.ceil(totalItems / totalPerPage)}
            </p>`;
    loadDataHtml(text, '#results');
}

function setPagination() {
    let totalPages = Math.ceil(totalItems / totalPerPage);

    if (currPage <= 2) {

    } else if (currPage >= 3) {

    } else if (currPage <= totalPages - 2) {

    }

}