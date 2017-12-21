import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensHinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens-hin',
  templateUrl: 'beziens-hin.html',
})
export class BeziensHinPage {

    diseases = [
    { title: "Schaatsmuseum", 
    	picture: ['assets/imgs/vvv-logo.png'],
    	description: 'Het Eerste Friese Schaatsmuseum is een cultuurhistorisch museum in Hindeloopen in de Nederlandse provincie Friesland.'
    },
     { title: "Sluishuis", 
      picture: ['assets/imgs/vvv-logo.png'],
      description: 'Het Sylhús is de monumentale sluiswachterswoning gelegen aan t Oost 12 in Hindeloopen.'
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
