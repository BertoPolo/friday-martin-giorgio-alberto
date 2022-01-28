/* GLOBAL VARIABLES */

 const searchParams = new URLSearchParams(window.location.search);
 const artistID = searchParams.get("artistID");

/* GLOBAL VARIABLES END */




const mouseoverSong = function () {
  songNode = document.getElementsByClassName('song')
  numNode = document.getElementsByClassName('listNumber')
  heartNode = document.getElementsByClassName('heartSong')
  threeDotsNode = document.getElementsByClassName('threeDotsSong')
  for (let i = 0; i < songNode.length; i++) {
    songNode[i].addEventListener('mouseover', function (e) {
      songNode[i].classList.add('highLighting')
      numNode[i].innerText = ' '
      numNode[i].classList.add('listPlay')
      heartNode[i].classList.remove('hidden')
      threeDotsNode[i].classList.remove('hidden')
    })
    songNode[i].addEventListener('mouseleave', function (e) {
      songNode[i].classList.toggle('highLighting')
      numNode[i].innerText = i + 1
      numNode[i].classList.toggle('listPlay')
      heartNode[i].classList.add('hidden')
      threeDotsNode[i].classList.add('hidden')
    })
  }
}


const expander = function(){
  const seeMoreNode = document.querySelector(".seeMore")
  const hiddenSongNode = document.getElementsByClassName("hiddenSong")

  seeMoreNode.addEventListener("click",function(e){
    for(let i =0;i<hiddenSongNode.length;i++){
      hiddenSongNode[i].classList.remove("hiddenSong")
    }

  })
}
expander()

// could be greater if it creates 5 songs instead unhide 5

//---------------





const fillingData = function(data){

  const artistNode = document.getElementsByClassName("artistName")
  for(let i =0;i<artistNode.length;i++){
    artistNode[i].innerText= data.name
  }

  const artistPickImgNode = document.getElementsByClassName("artistPickImg")
  for(let i =0;i<artistPickImgNode.length;i++){
    artistPickImgNode[i].src= data.picture_small
  }

  const listenersNode = document.getElementById("listeners")
  const artistContainerNode = document.querySelector(".artist-name-container")

  listenersNode.innerText= data.nb_fan
  artistContainerNode.style.backgroundImage = `url(${data.picture_big})`
  
}

const putSongs = function(obj){
  let arr = obj.data;
  const songListNode = document.getElementById("songs-list");
  songListNode.innerHTML = " ";
  
  for(let i = 0; i < arr.length; i++) {
    let duration= Math.floor(arr[i].duration / 60)
    songListNode.innerHTML += ` 

    <div class="row song">
    <div class="col-md-6 d-flex align-items-center">
      <span class="listNumber text-muted">${i+1}</span>
      <img
        src="${arr[i].album.cover_small}"
        alt=""
        class="ml-2"
      />
      <p class="pl-3 m-0 text-white">
        ${arr[i].title}<br />
      </p>
    </div>
    <div
      class="col-md-3 d-flex justify-content-center align-items-center"
    >
      <div>
        <span class="text-muted text-right">${arr[i].rank}</span>
      </div>
    </div>
    <div class="col-md-3 d-flex align-items-center">
      <i class="bi bi-heart hidden heartSong pr-1"></i>
      <span class="text-muted time px-3">${duration}</span>
      <i class="bi bi-three-dots hidden threeDotsSong text-muted"></i>
    </div>
    </div>
    `
  }
 
}


const fetchSongs = (artistID = 413) =>{

  
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistID}/top?limit=50`)
  .then(resp=>resp.json())
  .then(data=>{
    console.log("Fetchsongs:")
    console.log(data)
    putSongs(data);
    
  })
  .catch(err=>console.log(err))
}




const goTo = (artistID = 413) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistID}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      fillingData(data);
    })
    .catch((err) => console.log(err));
};


window.onload = () =>{ 
  
  goTo(artistID);
  fetchSongs(artistID);

  mouseoverSong()
}


