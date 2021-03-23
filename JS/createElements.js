'use strict';

function createElementHtml(searchedData) {
    let html;
    let formatedDate = new Date(searchedData.updated_at);
    let time = "";
    time = localFormDate(formatedDate);

    html = `<div class="column is-one-quarter" id="${searchedData.id}">
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
                              <img src="${searchedData.user.profile_image.small}" alt="User Photo">
                            </figure>
                          </div>
                          <div class="media-content">
                            <p class="title is-5">"${searchedData.user.first_name ? searchedData.user.first_name : ''} ${searchedData.user.last_name ? searchedData.user.last_name : ''}"</p>
                            <p class="subtitle is-6"><a href="${searchedData.user.portfolio_url}">${searchedData.user.instagram_username}</a></p>
                          </div>
                        </div>            
                        <div class="content">
                            <p id="bio">
                                '${(searchedData.user.bio == null || "" || undefined) ? 'See my Profile' : searchedData.user.bio}'
                            </p>
                          <br>
                          <time datetime="01/01/1970 00:00">${time}</time>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a class="card-footer-item button is-info is-outlined ${(isLiked(searchedData.id)) ? 'is-focused' : '' }" id="like">Μου αρέσει</a>                
                      </footer>
                    </div>
                </div>`;
    return html;
}

function pagination(array) {
    let html = "";

    array.forEach(l=>{
        if (l !== 'e'){
            html += `<li><a class="pagination-link" id="pageB${l}" onclick="setCurrPage(${l})">${l}</a></li>`;
        }else if(l == 'e'){
            html += `<li><span class="pagination-ellipsis">&hellip;</span></li>`;
        }
    })
    return html;
}