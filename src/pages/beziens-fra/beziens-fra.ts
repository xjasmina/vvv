import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensFraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens-fra',
  templateUrl: 'beziens-fra.html',
})
export class BeziensFraPage {

   diseases = [
    { title: "Oldehove", 
    	picture: ['assets/imgs/vvv-logo.png'],
    	description: 'De Oldehove is een vrijstaande kerktoren in Leeuwarden in de Nederlandse provincie Friesland. De toren staat in het noordwesten van het centrum van de stad. Naast de toren ligt Tresoar. Naast de toren stond vroeger de Sint-Vituskerk'
    }
  ];

  shownGroup = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


   toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };

}
