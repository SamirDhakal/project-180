let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaXJzYW1pciIsImEiOiJjbDBuM3Vmd2oxY3Z1M2pzNWd1M2cyZDg5In0.wXxhHB0uWTKqVfha5wHKMw';

var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 4
})

var img1 = document.querySelector("#amber");

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547]).addTo(map);

map.addControl(
    new MapboxGenerator({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }).on('result', function(e) {
        destination = e.result.center
    })
);

$(function() {
    $("#navigate-button").click(function() {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})
