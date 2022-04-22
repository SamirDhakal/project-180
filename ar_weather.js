let cordinates = {}

$(document).ready(function() {
    get_cordinates();
})

function get_cordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has("source") && searchParams.has("destination")) {
        let source = searchParams.get("source")
        let destination = searchParams.get("destination")
        cordinates.source_lat = source.split(";")[0]
        cordinates.source_lon = source.split(";")[1]
        cordinates.destination_lat = destination.split(";")[0]
        cordinates.destination_lon = destination.split(";")[1]
        
    } else {
        alert("Coordinates are not selected")
        window.history.back
    }
}

$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${cordinates.destination_lat}&lon=${cordinates.destination_lon}&appid=94212e971d0ca977303f8ae892224bbd`,
    type: "get",
    success: function(response) {
        let name = response.name
        let weather = response.weather[0].main
        $("#scene_container").append(
            `
                <a-entity gps-entity-place="latitude: ${steps[i].meneuver.location[1]}; longitude: ${steps[i].meneuver.location[0]};">
                    <a-entity>
                        <a-text height="50" value="Weather forcast is ${weather} at ${name}"></a-text>
                    </a-entity>
                <a-entity>
            `
        )
    }
})
