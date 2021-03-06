window.onload = () => {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=madonna', {})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const songs = artist => {
        const song = data.data
        const eminemContainer = document.querySelector('.home-container')
        for (let i = 0; i < 8; i++) {
          eminemContainer.innerHTML += `
          <a class="col" href="">
          <div class="card-container position-relative d-flex justify-content-center">
          <img src="assets/playhoverbtn.png" class="playhover2" alt="" />
          <div>
          <img class="mt-3 img-card" src="${song[i].album.cover}" alt="Card image cap" />
          <div class="d-flex flex-column align-items-start p-0 mt-3 ml-1 justify-content-start">
          <div class="card-title line-clamp2">${song[i].title_short}</div>
          <p class="card-text mt-n2 line-clamp">${song[i].artist.name}</p>
          </div>
          </div>
          </div>
          </a>
          `
        }
      }
      
      songs()

      showTitles = () => {
        const innerModal = document.querySelector('.modal-body')
        console.log(innerModal)
        const song = data.data
        for (let i = 0; i < song.length; i++) {
          innerModal.innerHTML += `<span> ${song[i].title_short} <br></span>`
        }
      }
      
    })
    .catch(err => console.error(err))
    
     }




     
     
        
         