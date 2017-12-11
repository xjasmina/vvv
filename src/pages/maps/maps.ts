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

	Destination: any = '';
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

		this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 11
        });

        this.infoWindow = new google.maps.InfoWindow;

		    let directionsService = new google.maps.DirectionsService;
		    let directionsDisplay = new google.maps.DirectionsRenderer;
		    const map = new google.maps.Map(document.getElementById('map'), {
		      zoom: 7,
		      center: {lat: 41.85, lng: -87.65},
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
		    travelMode: 'DRIVING'
		  }, function(response, status) {
		    if (status === 'OK') {
		      directionsDisplay.setDirections(response);
		    } else {
		      window.alert('Directions request failed due to ' + status);
		    }
		  });
		}

}
