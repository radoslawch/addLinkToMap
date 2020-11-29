function addLinkToMap(){
  var hotelName = document.getElementById("hp_hotel_name").innerText;
  var map = document.getElementById("hotel_sidebar_static_map");
  var geoLoc = map.dataset.atlasLatlng
  var geoLocArray = map.dataset.atlasLatlng.split(",");
  var geoLocX = geoLocArray[0];
  var geoLocY = geoLocArray[1];
    
  var googleLink = document.createElement("a");
  googleLink.href = "http://maps.google.com/maps?q=" + hotelName + "&ll=" + geoLoc + "&z=17";
  googleLink.innerText = "=> See in Google Maps";
  googleLink.target = "_blank";
  map.parentElement.appendChild(googleLink);   
  
  map.parentElement.appendChild(document.createElement("br"));  
  
  var omsLink = document.createElement("a");
  omsLink.href = "https://www.openstreetmap.org/?mlat=" + geoLocX + "&mlon=" + geoLocY + "&zoom=17";
  omsLink.innerText = "=> See in Open Street Maps";
  omsLink.target = "_blank";
  map.parentElement.appendChild(omsLink);
}

if(document.readyState != "loading"){
  addLinkToMap;
}else{
  document.addEventListener("DOMContentLoaded", addLinkToMap);
}