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

	// body: string;
  	userId: string;
 //  	dataId: string;
	myInput: '';
	public myPerson = {};

	person: string;

	cities: any;

	constructor( navCtrl: NavController, private fire: AngularFireAuth, public db: AngularFireDatabase) {
     
	     	this.fire.authState.subscribe(user => {
	      		if(user) this.userId = user.uid;
	    	});


     	this.cities = ['Leeuwarden', 'Franeker']; 

 	}


       updateCities(myInput: string) {
    	 const personRef: firebase.database.Reference = firebase.database().ref(`/person/` + this.userId);
		  	personRef.push(myInput).set({

		  })

		  	console.log("test");
  	}




     //subscribe user to database


	 //     	this.fire.authState.subscribe(user => {
	 //      		if(user) this.userId = user.uid;
	 //    	});


 	// 	} //end constructor	

		// createPerson(firstName: string): void{
		//   const personRef: firebase.database.Reference = firebase.database().ref(`/person/` + this.userId);
		//   personRef.push(firstName).set({
		//   	name: firstName
		//   }).then(function() {

		//   	personRef.orderByValue();

		//   })

		// }

		// ionViewDidLoad() {
		//   const personRef: firebase.database.Reference = firebase.database().ref(`/person/` + this.userId);
		//   personRef.on('value', personSnapshot => {
		//     this.myPerson = personSnapshot.val();
		//   });
		// }

}


