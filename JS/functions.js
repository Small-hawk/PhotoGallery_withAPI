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
        setPagination();
        document.querySelector(`#pageB${currPage}`).classList.add('is-current');
    });
}

function localFormDate(elem) {
    let date = new Date(elem);
    let formatedDate =  "";
    return formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  
                           ${addZeroInTime(date.getHours())}:${addZeroInTime(date.getMinutes())}`;
}

function addZeroInTime(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
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
        tempData = JSON.parse(localStorage.getItem("likedData"));
        tempData.forEach(function(d){
            if(d === idPhoto){
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
    if(currPage != Math.ceil(totalItems / totalPerPage)){
        currPage++;
        runSearch();
    }
}

function previousPage() {
    if(currPage != 1){
        currPage--;
        runSearch();
    }
}

function setCurrPage(numPage) {
    currPage = numPage;
    document.documentElement.scrollTop = 0;
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
    let arrMap = [];
    let htmlDone = "";

    if (currPage <= 3) {
        if(currPage == 1){
            arrMap.push(1,2,3,'e', Math.ceil(totalPages/2),'e',totalPages);
        }
        else if(currPage == 2){
            arrMap.push(1,2,3,4,'e', Math.ceil(totalPages/2),'e',totalPages);
        }
        else if(currPage == 3){
            arrMap.push(1,2,3,4,5,'e', Math.ceil(totalPages/2),'e',totalPages);
        }
    } else if (currPage >= 4 && currPage <= totalPages - 2) {
        arrMap.push(1,'e');
        for(let i=currPage-2; i<=currPage+2; i++){
            arrMap.push(i);
        }
        arrMap.push('e',totalPages);
    } else if (currPage >= totalPages - 2) {
        if(currPage == totalPages-2){
            arrMap.push(1,'e', Math.ceil(totalPages/2),'e', totalPages-4, totalPages-3, totalPages-2, totalPages-1, totalPages);
        }
        else if(currPage == totalPages-1){
            arrMap.push(1,'e', Math.ceil(totalPages/2),'e', totalPages-3, totalPages-2, totalPages-1, totalPages);
        }
        else if(currPage == totalPages){
            arrMap.push(1,'e', Math.ceil(totalPages/2),'e', totalPages-2, totalPages-1, totalPages);
        }
    }
    htmlDone = pagination(arrMap);
    loadDataHtml(htmlDone, "#myPagination");
}