// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {

//         zoom: 7,
//         center: { lat: 28.417831662, lng: -81.575331032 },

//     });
//     var marker = new google.maps.Marker({
//         position: { lat: 28.417831662, lng: -81.575331032 },
//         map: map,
//         title: "Hello Mickey Mouse!"
//     });

//     var marker = new google.maps.Marker({
//         position: { lat: 28.5729, lng: -80.6490 },
//         map: map,
//         title: "Space Shuttle!"
//     });
// }


import {GoogleApiWrapper} from "google-maps-react"




export default GoogleApiWrapper({
    apiKey: (AIzaSyA7UZmTHAMl9HcH5nUwa7kJixTYgwWKr4Q)
}) (MapContainer)
