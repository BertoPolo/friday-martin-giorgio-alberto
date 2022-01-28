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
mouseoverSong()

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


/* 
artistNode.addEventListener("click",function(){
  gotTo()
}) */

//change dynamically :
//artist name id="artistName"
//monthly listeners "nb_fan"   id="listeners"
//background artist,,, 
//artist pick img  id . artistPickImg
//songs


const fillingData = function(data){
  const artistNode = document.getElementById("artistName")
  const listenersNode = document.getElementById("listeners")
  const artistContainerNode = document.querySelector(".artist-name-container")
  const artistPickImgNode = document.getElementById("artistPickImg")
  artistNode.innerText= data.name
  listenersNode.innerText= data.nb_fan
  artistContainerNode.style.backgroundImage = `url(${data.picture_big})`
  artistPickImgNode.src= data.picture_small
  const songNode = document.getElementsByClassName("song")
  songNode.innerHTML = ` 

  <div class="row song hiddenSong">
  <div class="col-md-6 d-flex align-items-center">
    <span class="listNumber text-muted">10</span>
    <img
      src="${data.picture_small}"
      alt=""
      class="ml-2"
    />
    <p class="pl-3 m-0 text-white">
      ${data.}<br />
    </p>
  </div>
  <div
    class="col-md-3 d-flex justify-content-center align-items-center"
  >
    <div>
      <span class="text-muted text-right">705,225,721</span>
    </div>
  </div>
  <div class="col-md-3 d-flex align-items-center">
    <i class="bi bi-heart hidden heartSong pr-1"></i>
    <span class="text-muted time px-3">2:02</span>
    <i class="bi bi-three-dots hidden threeDotsSong text-muted"></i>
  </div>
  </div>
  `




}


/* const artistIntroducer = function(){

} */

const goTo = (artistID) =>{

  
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistID}`)
  .then(resp=>resp.json())
  .then(data=>{
    console.log(data)
    fillingData(data)
    
  })
  .catch(err=>console.log(err))
}

window.onload = () =>{
  goTo(412);
}

