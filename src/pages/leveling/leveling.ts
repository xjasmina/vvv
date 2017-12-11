import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@Component({
  selector: 'page-leveling',
  templateUrl: 'leveling.html'
})

export class LevelingPage {

	  items: FirebaseListObservable<LevelingPage[]> = null;
	  userId: string;
	  dataLeveling = []

	  myInput: string;
	
	  constructor( private fire: AngularFireAuth, private db: AngularFireDatabase) {

	     //subscribe to database
     	this.fire.authState.subscribe(user => {
      		if(user) this.userId = user.uid;
    	})
    	//end

 	} //end constructor	

	 // reach database
	  getItemsList(): FirebaseListObservable<LevelingPage[]> {

	    if (!this.userId) return;
	      let items = this.db.list(`items/${this.userId}`);

	      return this.items;

	    }

	  createItem() {
	     this.db.list(`items/${this.userId}`).push(this.myInput);
	  }
//end database


 // levelClick() {

 //    var level = "0";

 //    if(typeof(Storage) !== "undefined") {

 //          localStorage.level = Number(localStorage.level) + 1;
 //          localStorage.level = Math.min(Math.max(parseInt(localStorage.level), 0), 200);

 //          localStorage.setItem('current-level', level);
     
 //      }
 //        else {
           
 //        }
 //          document.getElementById("current-level").innerHTML = "You have clicked the button " + localStorage.level + " time(s).";
 //      }


}


