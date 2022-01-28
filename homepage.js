/* GLOBAL VARIABLES */


/* GLOBAL VARIABLES END */



/*FETCH FUNCTIONS  */

const fetchOnLoad = function () {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=madonna",
    {}
  )
    .then((res) => res.json())
    .then((data) => {
      songs(data);
      
      
    })
    .catch((err) => console.error(err));
}


/*FETCH FUNCTIONS END  */


/* LOADING FUNCTIONS */


  const songs = (obj) => {
    const song = obj.data;
    console.log(song);

    const eminemContainer = document.querySelector(".home-container");
    for (let i = 0; i < song.length; i++) {
      let newAnchor = document.createElement("a");
      newAnchor.classList.add("col");
      newAnchor.innerHTML = `
          <div class="card-container position-relative d-flex justify-content-center">
            <img src="assets/playhoverbtn.png" class="playhover2" alt="" />
            <div>
            <img class="mt-3 img-card" src="${song[i].album.cover}" alt="Card image cap" />
            <div class="d-flex flex-column align-items-start p-0 mt-3 ml-1 justify-content-start">
            <div class="card-title line-clamp2">${song[i].album.title}</div>
            <p class="card-text mt-n2 line-clamp">${song[i].artist.name}</p>
            </div>
            </div>
          </div>`;

      newAnchor.onclick = () =>
        window.location.assign("./AlbumPage.html?albumID=" + song[i].album.id);
      eminemContainer.appendChild(newAnchor);
    }
  };




/* showTitles = () => {
        const innerModal = document.querySelector('.modal-body')
        console.log(innerModal)
        const song = data.data
        for (let i = 0; i < song.length; i++) {
          innerModal.innerHTML += `<span> ${song[i].title_short} <br></span>`
        }
      } */

/* LOADING FUNCTIONS END */



/* ONLOAD  FUNCTIONS */

window.onload = () => {
  fetchOnLoad();
    
}




     
     
        
         