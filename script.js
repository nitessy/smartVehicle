// Initialize the map
function initMap() {
    const mapOptions = {
        center: { lat: 20.5937, lng: 78.9629 }, 
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
        center: { lat: 20.5937, lng: 78.9629}, 
    });

    // Add a custom marker to the accident-prone area
    var marker = new google.maps.Marker({
        position: { lat: 21.4990, lng: 83.8833 }, 
        map: map,
        title: 'Accident-Prone Area',
    }
    


    );
    var marker = new google.maps.Marker({
        position: { lat: 24.8607, lng: 67.0011 }, 
        map: map,
        title: 'Accident-Prone Area',
    }
    


    );
}