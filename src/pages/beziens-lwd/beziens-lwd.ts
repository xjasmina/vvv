import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensLwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens',
  templateUrl: 'beziens-lwd.html',
})
export class BeziensLwdPage {

  diseases = [
    { title: "Oldehove", 
    	picture: ['assets/imgs/vvv-logo.png'],
    	description: 'De Oldehove is een vrijstaande kerktoren in Leeuwarden in de Nederlandse provincie Friesland. De toren staat in het noordwesten van het centrum van de stad. Naast de toren ligt Tresoar. Naast de toren stond vroeger de Sint-Vituskerk'
    },
    { title: "Sint-Bonifatiuskerk", 
    	picture: ['assets/imgs/vvv-logo.png'],
    	description: 'De Sint-Bonifatiuskerk in Leeuwarden is een rooms-katholieke kerk gewijd aan de HH. Bonifatius en Gezellen. Zij vormt een van de hoogtepunten uit de carrière van architect P.J.H. Cuypers.'
    },
    { title: "De Waag", 
		description: "De Waag is over het algemeen het middelpunt van een marktstad. Waar gehandeld wordt, wordt gewogen en gemeten. Voor het bepalen van het juiste gewicht van de handelswaar was een marktkoopman vroeger aangewezen op de waag, een publiek weeghuis. De waag waar in 1483 over gesproken wordt, heeft waarschijnlijk even ten oosten van het huidige gebouw gestaan. De waag die vandaag de dag op het Waagplein staat, is omstreeks 1590 gebouwd."
    },
    { title: "Blokhuispoort", 
		description: "De Blokhuispoort is een gebouwencomplex dat tot december 2007 dienst heeft gedaan als huis van bewaring in Leeuwarden. Het huidige gebouw is in de tweede helft van de negentiende eeuw gebouwd op de plaats waar al rond 1500 een gevangenis stond."
    },
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
