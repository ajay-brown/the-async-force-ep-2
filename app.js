window.addEventListener("load", startup);
function startup() {
  document.getElementById("requestResourceButton").addEventListener(
    "click",
    function() {
      document.querySelectorAll(
        "select[name='resourceType']"
      ).onchange = changeEventHandler();
    },
    false
  );
}
var resources = document.getElementById("resourceType");
function changeEventHandler() {
  if (resources.value == "people") {
    let peopleId = document.getElementById("resourceId");
    console.log(peopleId);
    console.log("people");
    const oReq1 = new XMLHttpRequest();
    let URLhost = "https://swap.co/api/";
    oReq1.addEventListener("onclick", person4Listener);
    oReq1.open("GET", "https://swapi.co/api/people/4/");
    oReq1.send();
  }
  if (resources.value === "planets") {
    console.log("planets");
    const oReq2 = new XMLHttpRequest();
    let URLhost = "https://swap.co/api/";
    oReq2.addEventListener("onclick", person4Listener);
    oReq2.open("GET", "https://swapi.co/api/people/4/");
    oReq2.send();
  }
  if (resources.value === "starships") {
    console.log("starships");
    const oReq3 = new XMLHttpRequest();
    let URLhost = "https://swap.co/api/";
    oReq3.addEventListener("onclick", person4Listener);
    oReq3.open("GET", "https://swapi.co/api/people/4/");
    oReq3.send();
  }
}
