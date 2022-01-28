/* GLOBAL VARIABLES */


/* GLOBAL VARIABLES END */



/*FETCH FUNCTIONS  */

const fetchOnLoad = function (search = "madonna") {
  fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`,
    {}
  )
    .then((res) => res.json())
    .then((data) => {
      songs(data);

    })

    .catch((err) => console.error(err));
  }

  const fetchOnLoad2 = function (search = "eminem") {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`,
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        songs2(data);
      })

      .catch((err) => console.error(err));
  };

    const fetchOnLoad3 = function (search = "queen") {
      fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`,
        {}
      )
        .then((res) => res.json())
        .then((data) => {
          songs3(data);
        })

        .catch((err) => console.error(err));
    };
  
  
  /*FETCH FUNCTIONS END  */
  
  
  /* LOADING FUNCTIONS */
  
  
    const songs = (obj) => {
      const song = obj.data;
      console.log(song);
  
      const madonnaContainer = document.querySelector(".home-container");
      madonnaContainer.innerHTML = " ";

      for (let i = 0; i < 8; i++) {
        let newAnchor = document.createElement("a");
        newAnchor.classList.add("clickable");
        
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
      eminemContainer.innerHTML = " ";
      for (let i = 0; i < 8; i++) {
        let newAnchor = document.createElement("a");
        newAnchor.classList.add("clickable");
        
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
      queenContainer.innerHTML = " ";
      for (let i = 0; i < 8; i++) {
        let newAnchor = document.createElement("a");
        newAnchor.classList.add("clickable");
        
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
  
  
  const getSearchQuery = function(str) {
    console.log(str);
    let searchQuery = str.toLowerCase();
    fetchOnLoad(searchQuery);    
    fetchOnLoad2(searchQuery);    
    fetchOnLoad3(searchQuery);    


  } 
  
  
  /* LOADING FUNCTIONS END */
  
  /* EVENT LISTENERS */

  let searchInput = document.getElementById("search-input");
  searchInput.addEventListener("change", () => getSearchQuery(searchInput.value));  
  /* EVENT LISTENERS END */


  
  /* ONLOAD  FUNCTIONS */
  
  window.onload = () => {
    fetchOnLoad();
    fetchOnLoad2();
    fetchOnLoad3();

 }








