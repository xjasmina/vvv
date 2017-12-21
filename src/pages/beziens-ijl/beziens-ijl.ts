import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensIjlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens',
  templateUrl: 'beziens-ijl.html',
})
export class BeziensIjlPage {

  diseases = [
    { title: "Houtzaagmolen de Rat", 
    	picture: ['assets/imgs/vvv-logo.png'],
      description: 'De Rat is een achtkante stellingmolen in IJlst en werd gebouwd in 1828. Naast de windmolen staat de molenaarswoning. De Rat is een van de drie houtzaagmolens in Friesland. De anderen zijn de De Jager in Woudsend en De Zwaluw in Birdaard.'
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
