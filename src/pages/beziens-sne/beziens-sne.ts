import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensSnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens-sne',
  templateUrl: 'beziens-sne.html',
})
export class BeziensSnePage {

   diseases = [
    { title: "Modelspoor Museum", 
    	picture: ['assets/imgs/vvv-logo.png'],
      description: 'Het Nationaal Modelspoor Museum is een museum in Sneek. Het museum, gevestigd in het gerestaureerde station van Sneek, bezit naast een grote collectie modellen van zowel Nederlandse als buitenlandse modeltreinen ook een aantal banen, waaronder twee zogenaamde fabrieksbanen van Märklin en Fleischmann.'
      },
    { title: "Martinikerk", 
      picture: ['assets/imgs/vvv-logo.png'],
      description:'De Grote of Martinikerk is de meest centrale kerk in Sneek. Zij dankt haar naam aan Sint-Maarten, de schutspatroon van Sneek.'
     },
     { title: "Waterpoort", 
      picture: ['assets/imgs/vvv-logo.png'],
      description: 'De Sneeker Waterpoort is een waterpoort over de Hoogendsterpijp in Sneek. De poort bestaat uit twee achtkantige torens, met daartussen een brug over de vaarroute tussen de De Kolk en de Stadsgracht aan het stadscentrum, en boven de brug een poortwachterswoning. [...] Dit symbool is onder meer terug te vinden in het grootzeil van het Sneeker skûtsje Sneker Pan, en in de zeilen en kleding van de Sneeker zeilmakerij Gaastra.'
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
