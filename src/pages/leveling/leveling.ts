import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

import firebase from 'firebase';

@Component({
  selector: 'page-leveling',
  templateUrl: 'leveling.html'
})


export class LevelingPage {

  	userId: string;
	myInput: '';
	public myPerson = {};

	person: string;

	cities: any;

	constructor( navCtrl: NavController, private fire: AngularFireAuth, public db: AngularFireDatabase) {
     
	 	this.fire.authState.subscribe(user => {
	  		if(user) this.userId = user.uid;
		});

 	}

	createPerson(firstName: string): void {
	  const personRef: firebase.database.Reference = firebase.database().ref(`/person/` + this.userId);
	  	personRef.push({ 
	    firstName
		})
	}

	ionViewDidLoad() {
	  const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
	  personRef.on('value', personSnapshot => {
	    this.myPerson = personSnapshot.val();
	  });
	}

}


