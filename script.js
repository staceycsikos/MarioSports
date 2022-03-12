const allData = [];
let playerContainer = document.querySelector("#players");
let playerCard = document.querySelector(".player-card")

fetch("https://www.amiiboapi.com/api/amiibo/?gameseries=0x09c")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.amiibo.length; i++) {
      allData.push(data.amiibo[i]);
    }

    let filteredData = allData.filter((data) => {
      return data.name.toLowerCase().includes("soccer");
    });

    filteredData.forEach((char) => {
      let name = char.character.split(" ").join("").split(".").join("");

      let characterName = `
        <p class="each-player" id="${name}" name=${name}>${char.name}</p>
      `;

      playerContainer.insertAdjacentHTML("beforeend", characterName);

      let charContainer = document.querySelector(`#${name}`);

      let characterInfo = `
        <div class="container" name="${char.name}">
          <h2 class="title">${char.name}<h2>
          <div class="pic-div">
            <img src=${char.image} />
          </div>
          <h3>Speed: ${Math.floor(Math.random() * 21)} mph</h3>
          <h3>Goals Made: ${Math.floor(Math.random() * 6)}</h3>
          <h3>Years playing:${Math.floor(Math.random() * 6)} years</h3>
        </div>
      `;

      charContainer.addEventListener("click", () => {
        playerCard.innerHTML=""
        playerContainer.style.display = "none"
        playerCard.insertAdjacentHTML("beforeend", characterInfo);
        
      });
    });
  });

function myFunction() {
  var x = document.getElementById("players");
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
