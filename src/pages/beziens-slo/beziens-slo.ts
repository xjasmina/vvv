import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensSloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens-slo',
  templateUrl: 'beziens-slo.html',
})
export class BeziensSloPage {

   diseases = [
    { title: "Korenmolen De Kaai", 
    	picture: ['assets/imgs/vvv-logo.png'],
        description: 'De Kaai (tot 2005 slechts aangeduid met de Korenmolen) is een korenmolen in Sloten, in de Nederlandse provincie Friesland. In deze molen wordt graan gemalen als er voldoende wind is. De windmolen is een stellingmolen en werd gebouwd in 1755.'
    },
    { title: "17e eeuwse kerk", 
      picture: ['assets/imgs/vvv-logo.png'],
        description: 'De hervormde laatgotische kerk van Sloten werd in 1647 gebouwd op plaats waar daarvoor de Sint-Janskapel heeft gestaan. De dakruiter werd ongeveer tweehonderd jaar later, in 1843, vernieuwd.'
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
