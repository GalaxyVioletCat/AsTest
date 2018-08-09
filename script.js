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

var tdcol3 = '<td class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
var tdcol12 = '<td class="col-lg-12 col-md-12 col-xs-12 col-sm-12" colspan="4">';



//Рендер данных
var data = $.getJSON("https://res.cloudinary.com/galaxyvioletcat/raw/upload/v1533770082/Books/data.json", function(data) {
    console.log( "success" );
    document.getElementById('nameP').innerHTML += data.Property.Name;
    document.getElementById('address').innerHTML += data.Property.Address;

    document.getElementById('1').innerHTML += tdcol3 + 'Property Type:'+'</td>'+tdcol3 + data.Property.Property_Type+
        '</td>' +tdcol3 + 'Website:'+'</td>'+ tdcol3 + '<a href="' + data.Property.Website +'">'+ data.Property.Website+ '</a></td>';
    document.getElementById('2').innerHTML += tdcol3 + 'Total Building Area:'+'</td>'+ tdcol3 + data.Property.Total_Building_Area +
        '</td>' + tdcol3 + 'Property Class:' + '</td>'+ tdcol3 +data.Property.Property_Class +'</td>';
    document.getElementById('3').innerHTML += tdcol3 + 'Tenancy:'+'</td>'+tdcol3 + data.Property.Tenancy+
        '</td>' +tdcol3 + 'Year Built:'+'</td>'+ tdcol3 + data.Property.Year_Built+'</td>';
    document.getElementById('4').innerHTML += tdcol3 + 'No.of Tenant:'+'</td>'+ tdcol3 + data.Property.No_of_Tenant +
        '</td>' + tdcol3 + 'Floors:' + '</td>'+ tdcol3 +data.Property.Floors +'</td>';
    document.getElementById('describ').innerHTML += tdcol12 + '<strong> Description:  </strong>' + data.Property.Description + '</td>';
    
    document.getElementById('avai').innerHTML += '<td class="col-lg-1 col-md-1 col-sm-1 col-xs-1"> <div align="right">' + data.Availability.length + '</div>';
    var n = 1;
    for (i=0; i < data.Availability.length; i++){
        let n = String(i+1);
        document.getElementById('avAdd').innerHTML += '<tr class="row">' + '<td class="col-lg-3 col-md-3 col-sm-3 col-xs-3" colspan="2">' + 
            data.Availability[i]["Unit_NameNumber"] + '</td>' + tdcol3 + data.Availability[i]["Record_Type"] + '</td>' + tdcol3 + 
            data.Availability[i]["Available_Area"] +'</td></tr>'
            console.log(data.Availability[i]["Available_Area"])

    }
});

