'use strict';
const apiKey = 'C-Sh4uWGfe6CmkhOPPlObyvpVmE_iNI_1B3pKCWjak8';
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

async function search(query='code', page=1, perPage=24, order_by='relevant'){
    let serverData = {};
    serverData = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&page=${page}&perPage=${perPage}&order_by=${order_by}`,{
        method: 'GET',
        headers:{
            'Authorization': `Client-ID ${apiKey}`
        }
    })
    serverData = await serverData.json();
    console.log(serverData);
}

function createElementHtml(){
    let html;
        html = `<div class="column is-one-third-desktop is-full-mobile">    
                    <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-48x48">
                              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                          </div>
                          <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                          </div>
                        </div>            
                        <div class="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                          <a href="#">#css</a> <a href="#">#responsive</a>
                          <br>
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">Μου αρέσει</a>                
                      </footer>
                    </div>
                </div>`;

    return html;
}

function loadDataHtml(data){
    document.querySelector('#elements').innerHTML = data;
}
function runSearch(data = "") {

}

document.querySelector('#searchButton').addEventListener('click', evt=>{
    document.querySelector('#searchBar').value.length ==0 ? alert("empty search!") : runSearch();
})