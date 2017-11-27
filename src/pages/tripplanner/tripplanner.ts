import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;




@Component({
  selector: 'page-tripplanner',
  templateUrl: 'tripplanner.html'
})
export class TripplannerPage {

	map :any;
	infoWindow: any;

	constructor(public navCtrl: NavController){
		let that = this;
		setTimeout(function (){
			that.googleMap();
		},2000)

	}

	googleMap(){

		let that = this;

		this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 11
        });
        this.infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            that.infoWindow.setPosition(pos);
            that.infoWindow.setContent('Location found.');
            that.infoWindow.open(that.map);
            that.map.setCenter(pos);
          }, function() {
            this.handleLocationError(true, that.infoWindow, that.map.getCenter(),that.map);
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, that.infoWindow, that.map.getCenter(),that.map);
        }

	}

	

	 handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

}
