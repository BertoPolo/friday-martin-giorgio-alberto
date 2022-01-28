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

  const fetchOnLoad2 = function () {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem",
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        songs2(data);
  
      })
  
      .catch((err) => console.error(err));
    }

    const fetchOnLoad3 = function () {
      fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
        {}
      )
        .then((res) => res.json())
        .then((data) => {
          songs3(data);
    
        })
    
        .catch((err) => console.error(err));
      }
  
  
  /*FETCH FUNCTIONS END  */
  
  
  /* LOADING FUNCTIONS */
  
  
    const songs = (obj) => {
      const song = obj.data;
      console.log(song);
  
      const madonnaContainer = document.querySelector(".home-container");
      for (let i = 0; i < 8; i++) {
        let newAnchor = document.createElement("a");
        
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
        madonnaContainer.appendChild(newAnchor);
      }
    };

    const songs2 = (obj) => {
      const song = obj.data;
      console.log(song);
  
      const eminemContainer = document.querySelector(".home-container2");
      for (let i = 0; i < 8; i++) {
        let newAnchor = document.createElement("a");
        
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

    const songs3 = (obj) => {
      const song = obj.data;
      console.log(song);
  
      const queenContainer = document.querySelector(".home-container3");
      for (let i = 0; i < 8; i++) {
        let newAnchor = document.createElement("a");
        
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
        queenContainer.appendChild(newAnchor);
      }
    };
  
  
  
  
  
  /* LOADING FUNCTIONS END */
  
  
  
  /* ONLOAD  FUNCTIONS */
  
  window.onload = () => {
    fetchOnLoad();
    fetchOnLoad2();
    fetchOnLoad3();

 }








