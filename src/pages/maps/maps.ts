import { Component, ViewChild, ElementRef } from '@angular/core';
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

    @ViewChild('directionsPanel') directionsPanel: ElementRef;


	Destination: any = '53.198133, 5.792123';
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
		



		var selectedMode = (<HTMLInputElement>document.getElementById('mode')).value; //document.getElementById('mode').value;

//		this.map = new google.maps.Map(document.getElementById('map'), {
//          center: {lat: -34.397, lng: 150.644},
//          zoom: 15
//        });

        this.infoWindow = new google.maps.InfoWindow;

		    let directionsService = new google.maps.DirectionsService;
		    let directionsDisplay = new google.maps.DirectionsRenderer;
		    const map = new google.maps.Map(document.getElementById('map'), {
		      zoom: 15,
		      center: {
            lat: 53.201132, 
            lng: 5.797696
          },
		      //styles: ,
		      disableDefaultUI: true
		    });
		    
		    directionsDisplay.setMap(map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);//route display

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