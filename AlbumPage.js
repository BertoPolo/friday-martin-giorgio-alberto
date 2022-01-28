/* GLOBAL VARIABLES */

/* GLOBAL VARIABLES END */

/* FETCH FUNCTIONS */

const fetchAlbum = function () {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/75621062', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      getAlbumDetails(data);
      getAlbumSongs(data);
    })
    .catch((error) => {
      console.error('Error:', error);
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
  albumContainer.innerHTML = `<img class="img-fluid d-inline-flex" width="200px" src=${obj.cover_medium} alt="albumPhoto">
                              <div class="ml-3">
                                <h6 class="albumWord">${obj.type}</h6>
                                <h2 class="albumTitle ">${obj.title}</h2>
                                <h6 >
                                    <img class="rounded-circle img-fluid bandLogo" src="https://www.aqueenofmagic.com/wp-content/uploads/2020/12/Queen-mid-70s-approved-photo-04-web-optimised-1000.jpg" alt="Band Logo">
                                    <span class="text-muted infoAlbum"> <span class="text-white">${obj.artist.name}</span>  · ${obj.release_date} · ${obj.nb_tracks} songs · ${durationToMinsAndSecs}</span>
                                </h6>
                            </div>
  `;

}

const getAlbumSongs = function (obj) {
  
}
/* OTHER FUNCTIONS END */



  /* FUNCTIONS RUN ON LOAD  */

  window.onload = function () {
     mouseoverSong();
     fetchAlbum();
  };