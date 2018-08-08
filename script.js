function initMap() {
	var centerLatLng = new google.maps.LatLng(32.7811716, -96.802363);
	var mapOptions = {
		center: centerLatLng, //Координатфы определены в переменной centerLatLng
		zoom: 8               
	};
    var map = new google.maps.Map(document.getElementById("map"), mapOptions, marker);
    var marker = new google.maps.Marker({
        position: centerLatLng,
        map: map
      });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);

//Рендер данных
var json = $.getJSON("properties.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

