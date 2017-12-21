import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensWorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens-wor',
  templateUrl: 'beziens-wor.html',
})
export class BeziensWorPage {

    diseases = [
    { title: "Gertrudiskerk", 
    	picture: ['assets/imgs/vvv-logo.png'],
    	description: 'De laatgotische kerk van Workum ontstond eind 15e eeuw (1480) door uitbreiding met een koor van de eenbeukige voorganger van deze kerk. Deze kerk was gewijd aan de heilige Gertrudis, dochter van Pepijn de Oudere.'
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
