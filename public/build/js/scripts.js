let isPause = false;

function  downloadData() {
    $.ajax({url: "/ajax/api", success: function(result){
        let json = result;

        let i = 0;
        while(i < json.length)
        {
            let long = json[i].longitude;
            let lat = json[i].latitude;
            let latlng = {"lat": parseFloat(lat), "lng": parseFloat(long)};
            let product = json[i].product;
            let location = json[i].country;
            //console.log(latlng);

            if(!isPause) createMarker(latlng, product, location);

            i++;
        }


    }});
}

let map = new google.maps.Map(document.getElementById('someMeaningfulId'), {
    center: {lat: 52, lng: 10},
    scrollwheel: false,
    zoom: 5
});

function  startTimer() {
    setTimeout(function(){ downloadData(); startTimer(); }, 1000);
}


let image = {
    url: '/images/favicon.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};

let image_dollar = {
    url: '/images/dollar_1.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};

let image_dollar2 = {
    url: '/images/dollar_2.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};

let markers = [];

function createMarker(myLatLng, product, location) {
    let marker = new google.maps.Marker({
        position: myLatLng,
        map: null,
        icon: (Math.random() < 0.5 ? image_dollar : image_dollar2)
    });

    let infowindow = new google.maps.InfoWindow({
        content: `<p>Product: ${product}</p><p>Location: ${location}</p>`
    });

    marker.addListener('mouseover', function() {
        infowindow.open(map, this);
    });

    marker.addListener('mouseout', function() {
        infowindow.close();
    });

    markers.push(marker);

    setTimeout(function(){

        if(isPause === false)
            marker.setMap(map);

        marker.setAnimation(google.maps.Animation.BOUNCE);

        setTimeout(function()
        {
            if(isPause === false)
                marker.setMap(null);

        }, Math.random() * 300 * sliderValue);
    }, Math.random() * 2000);
}

let sliderValue = 1;

$(document).ready(function () {
    $('#ex1').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    }).on('slide', function (val) {
        sliderValue = val.value;
    });

    startTimer();
});

function togglePause() {
    if (isPause) {
        isPause = false;
        $('#pauseBtn').val('Pause');

        // resets markers
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    } else {
        isPause = true;
        $('#pauseBtn').val('Unpause');
    }
}