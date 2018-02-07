function getData() {
  const oReq = newXMLHttpRequest();
  oReq.addEventListener("load", function() {
    const data = JSON.parse(this.responseText);
  });
  oReq.open("GET", "https://swapi.co/api/");
  oReq.send();
}
getData();
