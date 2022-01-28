/* GLOBAL VARIABLES */

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("albumID");

/* GLOBAL VARIABLES END */

/* FETCH FUNCTIONS */

const fetchAlbum = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      getAlbumDetails(data);
      getAlbumSongs(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
/* FETCH FUNCTIONS END */





/* OTHER FUNCTIONS */

const mouseoverSong = function () {
  songNode = document.getElementsByClassName("song");
  numNode = document.getElementsByClassName("listNumber");
  heartNode = document.getElementsByClassName("heartSong");
  threeDotsNode = document.getElementsByClassName("threeDotsSong");
  for (let i = 0; i < songNode.length; i++) {
    songNode[i].addEventListener("mouseover", function (e) {
      songNode[i].classList.add("highLighting");
      numNode[i].innerText = " ";
      numNode[i].classList.add("listPlay");
      heartNode[i].classList.remove("hidden");
      threeDotsNode[i].classList.remove("hidden");
    });
    songNode[i].addEventListener("mouseleave", function (e) {
      songNode[i].classList.toggle("highLighting");
      numNode[i].innerText = i + 1;
      numNode[i].classList.toggle("listPlay");
      heartNode[i].classList.add("hidden");
      threeDotsNode[i].classList.add("hidden");
    });
  }
};

//Loads album picture, songs, album page from the API
const getAlbumDetails = function (obj) {
  let albumContainer = document.getElementById("artist-name-cont");
  let durationToMinsAndSecs =
    Math.floor(obj.duration / 60) + " min " + obj.duration % 60 + " sec";  ;
  console.log(durationToMinsAndSecs);
  albumContainer.innerHTML = `<a href="${obj.link}"><img class="img-fluid d-inline-flex" width="200px" src=${obj.cover_medium} alt="albumPhoto"></a>
                              <div class="ml-3">
                                <h6 class="albumWord">${obj.type}</h6>
                                <h2 class="albumTitle ">${obj.title}</h2>
                                <h6 >
                                   <span id="artist-link"> <img class="rounded-circle img-fluid bandLogo" src=${obj.artist.picture_small} alt="Band Logo">
                                    <span class="text-muted infoAlbum"> <span class="text-white">${obj.artist.name}</span></span>  · ${obj.release_date} · ${obj.nb_tracks} songs · ${durationToMinsAndSecs}</span>
                                </h6>
                            </div>
  `;
  let artistLink = document.getElementById("artist-link");
  artistLink.onclick = () =>
    window.location.assign("./ArtistPage.html?artistID=" + obj.artist.id);
}

const getAlbumSongs = function (obj) {
  let songsContainer = document.getElementById("songList");
  let arrayOfSongsInAlbum = obj.tracks.data;
  console.log(arrayOfSongsInAlbum);
  songsContainer.innerHTML = " ";
  let i = 1;
  
  arrayOfSongsInAlbum.forEach((element) => {
    let newDiv = document.createElement("div");
    let durationToMinsAndSecs =
      Math.floor(element.duration / 60) + " : " + (element.duration % 60);
    newDiv.innerHTML = `
                <div class="pl-2 song d-flex justify-content-between">
                  <div class="d-flex">
                    <span class="listNumber">${i++}</span>
                    <p class="pl-3 text-white">
                      ${element.title} <br/>
                      <span class="text-muted">${obj.artist.name}</span>
                    </p>
                  </div>
                  <div>
                    <i class="bi bi-heart hidden heartSong"></i>
                    <span class="text-muted px-3" >${durationToMinsAndSecs}</span>
                    <i class="bi bi-three-dots hidden threeDotsSong"></i>
                  </div>
                </div>`;
    songsContainer.appendChild(newDiv);
  });

}
/* OTHER FUNCTIONS END */



  /* FUNCTIONS RUN ON LOAD  */

  window.onload = function () {
     mouseoverSong();
     fetchAlbum();
  };