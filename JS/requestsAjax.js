'use strict';

// fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`).then(response => response.json()).then(data => console.log(data));

// function search(query = 'developers', page = 1, perPage = 24, order_by = 'relevant'){
//     fetch(`https://api.unsplash.com/search/photos/?query=${query}&perPage=${perPage}&order_by=${order_by}&relevant=${relevant}`,{
//         method: 'GET',
//         headers:{
//             'Authorization': `Client-ID ${apiKey}`
//         }
//     }).catch(error=>{
//         alert(error);
//     }).then(res=>res.json()).then(serverData=>{
//         console.log(serverData);
//     })
// }

async function search() {
    let serverData = {};
    let query = userSearch;

    serverData = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&page=${currPage}&per_page=${totalPerPage}&order_by=${orderBy}`, {
        method: 'GET',
        headers: {
            'Authorization': `Client-ID ${apiKey}`
        }
    })
    serverData = await serverData.json();
    setTotalItems(serverData.total);
    return serverData.results;
}