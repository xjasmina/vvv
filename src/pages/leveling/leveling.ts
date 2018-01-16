import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
// // import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabase } from "angularfire2/database";
// import { Geofence } from '@ionic-native/geofence';


// import firebase from 'firebase';

declare var google;


@Component({
  selector: 'page-leveling',
  templateUrl: 'leveling.html'
})



export class LevelingPage {


	  constructor(public navCtrl: NavController, public navParams: NavParams) {}

	  	calculateAndDisplayRoute() {

       	if(localStorage) {

                navigator.geolocation.getCurrentPosition(this.savePosition);

            } else {
                alert("Geolocation wordt niet ondersteund. Bekijk uw privacy instellingen.");
            }
        }

     	savePosition(position) {

        	document.getElementById("result").innerHTML = position.coords.latitude + " " + position.coords.longitude;

    	}



}


