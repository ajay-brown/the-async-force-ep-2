const container = document.getElementById("contentContainer");
function userInput(resourceType, id) {
  const oReq1 = new XMLHttpRequest();

  if (resourceType === `people`) {
    oReq1.addEventListener("load", function() {
      let peopleMetaData = JSON.parse(this.responseText);
      console.log(peopleMetaData);
      let peopleName = peopleMetaData.name;
      let peopleGender = peopleMetaData.gender;
      let peopleSpecies = peopleMetaData.species; //only display first species if multiple
      let name = document.createElement("h2");
      name.innerHTML = peopleName;
      container.appendChild(name);
      let gender = document.createElement("p");
      gender.innerHTML = peopleGender;
      name.appendChild(gender);
    });
  }
  if (resourceType === `planets`) {
    oReq1.addEventListener("load", function() {
      let planetMetaData = JSON.parse(this.responseText);
      console.log(planetMetaData);
      let planetName = planetMetaData.name;
      let planetTerrain = planetMetaData.terrain;
      let planetPop = planetMetaData.population;
      let planetFilms = planetMetaData.films; //need to display planets in list
      console.log(planetFilms);
      let name = document.createElement("h2");
      name.innerHTML = planetName;
      container.appendChild(name);
      let terrain = document.createElement("p");
      terrain.innerHTML = planetTerrain;
      name.appendChild(terrain);
      let population = document.createElement("p");
      population.innerHTML = planetPop;
      name.appendChild(population);
    });
  }
  if (resourceType === `starships`) {
    oReq1.addEventListener("load", function() {
      let starshipMetaData = JSON.parse(this.responseText);
      console.log(starshipMetaData);
      let starshipName = starshipMetaData.name;
      let starshipManu = starshipMetaData.manufacturer;
      let starshipClass = starshipMetaData.starship_class;
      let starshipFilms = starshipMetaData.films; //need to get a list
      console.log(starshipFilms);
      let name = document.createElement("h2");
      name.innerHTML = starshipName;
      container.appendChild(name);
      let manufacturer = document.createElement("p");
      manufacturer.innerHTML = starshipManu;
      name.appendChild(manufacturer);
      let starClass = document.createElement("p");
      starClass.innerHTML = starshipClass;
      name.appendChild(starClass);
    });
  }
  oReq1.open("GET", `https://swapi.co/api/${resourceType}/${id}/`);
  oReq1.send();
}
let reqButton = document.getElementById("requestResourceButton");
reqButton.addEventListener("click", function() {
  let resourceType = document.querySelector("#resourceType").value;
  let id = document.getElementById("resourceId").value;
  console.log(id);
  console.log(resourceType);
  if (!id) {
    console.log("error");
  }
  userInput(resourceType, id);
});
