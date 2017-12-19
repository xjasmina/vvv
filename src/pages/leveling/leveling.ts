import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";

import { MapsPage } from '../maps/maps';


import firebase from 'firebase';

@Component({
  selector: 'page-leveling',
  templateUrl: 'leveling.html'
})


export class LevelingPage {

  	userId: string;
	myInput: '';
	public myCity = [];


	constructor( navCtrl: NavController, private fire: AngularFireAuth, public db: AngularFireDatabase) {
     
	 	this.fire.authState.subscribe(user => {
	  		if(user) this.userId = user.uid;
		});

 	}

	insertCity(cityName: string): void {

	  const cityRef: firebase.database.Reference = firebase.database().ref(`/city/` + this.userId);
	  	cityRef.push({ 
	    	cityName
		});
	}


	ionViewDidLoad() {
	  const cityRef: firebase.database.Reference = firebase.database().ref(`/city/` + this.userId);

	  cityRef.on('value', snapshot => {

	      snapshot.forEach(snap => {
	      	
	      		this.myCity = snapshot.val();
		     	return snapshot.val();

		   });

		    console.log(snapshot.val());

	    	document.getElementById("stad").innerHTML = "De bezochte steden zijn" +  this.myCity + (snapshot.val());

	  });

	}

	checkCity() {

	}

}


