window.onload = () => {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=madonna', {})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const songs = artist => {
        const song = data.data
        const madonnaContainer = document.querySelector('.home-container')
          for (let i = 0; i < 8; i++) {
          madonnaContainer.innerHTML += `
          <a  href="">
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

      
      
    })
    .catch(err => console.error(err))

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem', {})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const songs2 = artist => {
        const song = data.data
        const eminemContainer = document.querySelector('.home-container2')
          for (let i = 0; i < 8; i++) {
          eminemContainer.innerHTML += `
          <a  href="">
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

      
      
      songs2()

      
      
    })
    .catch(err => console.error(err))

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen', {})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const songs3 = artist => {
        const song = data.data
        const queenContainer = document.querySelector('.home-container3')
          for (let i = 0; i < 8; i++) {
          queenContainer.innerHTML += `
          <a  href="">
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

      
      
      songs3()

      
      
    })
    .catch(err => console.error(err))
    
     }




     
     
        
         