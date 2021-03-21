'use strict';

function createElementHtml(searchedData){
    let html;
    html = `<div class="column is-one-third-desktop is-full-mobile">    
                    <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img src="${searchedData.urls.regular}" alt="${searchedData.alt_description}">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-48x48">
                              <img src="${searchedData.user.profile_image.small}" alt="Placeholder image">
                            </figure>
                          </div>
                          <div class="media-content">
                            <p class="title is-4">"${searchedData.user.first_name?searchedData.user.first_name:''} ${searchedData.user.last_name?searchedData.user.last_name:''}"</p>
                            <p class="subtitle is-6"><a href="${searchedData.user.portfolio_url}">@${searchedData.user.instagram_username}</a></p>
                          </div>
                        </div>            
                        <div class="content">
                          "${searchedData.user.bio}"
                          <br>
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <button class="card-footer-item is-link is-inverted" id="like">Μου αρέσει</button>                
                      </footer>
                    </div>
                </div>`;

    return html;
}

function pagintation(){
    let html = "";
    html = `<li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
            <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
            <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>`
}