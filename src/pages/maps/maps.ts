import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {


	Destination: any = '53.201132, 5.797696';
	MyLocation: any;
	map :any;
	infoWindow: any;

	  constructor(public navCtrl: NavController, public navParams: NavParams) { 

		let that = this;
			setTimeout(function (){
				that.calculateAndDisplayRoute();
			})
		}

	  	calculateAndDisplayRoute() {
		let that = this;

		var selectedMode = document.getElementById('mode').value;

//		this.map = new google.maps.Map(document.getElementById('map'), {
//          center: {lat: -34.397, lng: 150.644},
//          zoom: 15
//        });

        this.infoWindow = new google.maps.InfoWindow;

		    let directionsService = new google.maps.DirectionsService;
		    let directionsDisplay = new google.maps.DirectionsRenderer;
		    const map = new google.maps.Map(document.getElementById('map'), {
		      zoom: 15,
		      center: {lat: 41.85, lng: -87.65},
		      styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
		      disableDefaultUI: true
		    });
		    
		    directionsDisplay.setMap(map);

		    if (navigator.geolocation) {
		      navigator.geolocation.getCurrentPosition(function(position) {
		        var pos = {
		          lat: position.coords.latitude,
		          lng: position.coords.longitude
		        };
		        map.setCenter(pos);
		        that.MyLocation = new google.maps.LatLng(pos);

		        that.infoWindow.setPosition(pos);
	            that.infoWindow.setContent('U bent nu hier.');
	            that.infoWindow.open(map);

	            map.setCenter(pos);
			      }, function() {

		      });
		    } else {
		      // Browser doesn't support Geolocation
		    }

		    directionsService.route({
		    origin: this.MyLocation,
		    destination: this.Destination,
		    travelMode: google.maps.TravelMode[selectedMode]
		  }, function(response, status) {
		    if (status === 'OK') {
		      directionsDisplay.setDirections(response);
		    } else {
		      window.alert('Directions request failed due to ' + status);
		    }
		  });
		}

}