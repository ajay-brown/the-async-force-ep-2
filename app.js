window.addEventListener("load", startup);

function startup() {
  document
    .getElementById("requestResourceButton")
    .addEventListener("click", function(e) {
      if (resourceType === "people") {
        getPeople(resourceId);
      } else if ((resourceType = "planets")) {
        getPlanets(resourceId);
      } else {
        getStarships(resourceId);
      }
    });
  let resourceType = document.getElementById("resourceType").value;
  let resourceId = document.getElementById("resourceId").value;
  console.log(resourceId);
  function getPeople(resourceId) {
    let newReq = new XMLHttpRequest();
    newReq.addEventListener("load", function(e) {
      let peopleData = JSON.parse(e.target.responseText);
      console.log(peopleData); //showing array of all people
    });
    newReq.open("GET", "https://swapi.co/api/people/?page=" + resourceId);
    newReq.send();
  }
  function getPlanets(resourceId) {}
  function getStarships(resourceId) {}
}
