function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {
      /*lat: -26.1845227, lng: 28.0994536*/
      lat: -26.184586, lng: 28.134558
    }, zoom: 16
  });
}
