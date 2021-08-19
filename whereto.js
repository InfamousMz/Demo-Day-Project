// Initialize and add the map
function initMap() {
    // The location of New York
    const newYork = { lat: 40.730610, lng: -73.935242 };
    // The map, centered at New York
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: newYork, // centers the map at selected placed (name of the const)
    });

    // The marker, positioned at [New York]
    const marker = new google.maps.Marker({
      position: newYork, 
      map: map,
    });
  }


const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
  
let options = new URLSearchParams({
    key: "AIzaSyD5TYxI5yg7zRiJKWGyqm7P3a7ubq2ngUg",
    radius: 16094, // 10 miles
    type: "gaming cafe",
    location: "40.730610, -73.935242", // not hardcode
});


fetch(proxy + 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
});


// Deyby's code (lines 18-44)
let getUserLocation = function () {
    return new Promise(function (resolve, reject){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            });
        } else {
            reject('Geolocation is not supported by this browser.');
        }
    });
}
    

let userLocation = getUserLocation().then(function (position) {
    console.log(position);
    return position;
});

const geocodingApi = "https://maps.googleapis.com/maps/api/geocode/json?"


function transformZipCode(zip) {
    console.log(zip)
    const options = new URLSearchParams({
        key: "AIzaSyD5TYxI5yg7zRiJKWGyqm7P3a7ubq2ngUg",
        address: zip
    })

    return fetch(proxy + geocodingApi + options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            //Do stuff here
            //Do more stuff & logic, call functions, etc
        })
}

//console.log(transformZipCode("10001"));
