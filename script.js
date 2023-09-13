// Initialize the map
function initMap() {
    const mapOptions = {
        center: { lat: 20.5937, lng: 78.9629 }, //the coordinates of  area
        zoom: 14, // zoom level 
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Define the accident-prone area
    const accidentProneArea = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: { lat: 20.5937, lng: 78.9629 }, // area's coordinates
        radius: 1000, //  the radius in meters 
    });

    // custom marker to the accident-prone area
    const marker = new google.maps.Marker({
        position: { lat: 21.4990, lng: 83.8833 }, // marker's coordinates
        map: map,
        title: 'Accident-Prone Area',
    });
}