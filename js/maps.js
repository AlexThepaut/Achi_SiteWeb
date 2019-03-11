/* ---------------------------------------------------------------------------------------------- */
// Google map init

function myMap()
{
myCenter=new google.maps.LatLng(44.796172805670, -0.6721615791321);
var mapOptions= {
    center:myCenter,
    zoom:16, scrollwheel: true, draggable: true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

var marker = new google.maps.Marker({
    position: myCenter,
});
marker.setMap(map);
}
