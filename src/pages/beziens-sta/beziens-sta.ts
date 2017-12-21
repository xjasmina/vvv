import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeziensStaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beziens-sta',
  templateUrl: 'beziens-sta.html',
})
export class BeziensStaPage {


  diseases = [
    { title: "De J.W. Frisosluis", 
    	picture: ['assets/imgs/vvv-logo.png'],
        description: 'De Johan Frisosluis is een schutsluis in Stavoren. De sluis met brug uit 1966 vormt de verbinding tussen het Johan Frisokanaal en het IJsselmeer. Op het oude bedieningsgebouw bij de sluis stond een windwijzer met een vis en een gouden ring, als een verwijzing naar de legende van het Vrouwtje van Stavoren.'
    },
    { title: "Vrouwtje van Stavoren", 
      picture: ['assets/imgs/vvv-logo.png'],
      description: 'Een van de versies van de sage vertelt van een rijke koopmansweduwe in Stavoren die woonde in een huis met gouden vloeren en zilveren muren. Ze bezat meer schepen dan alle kooplieden van de stad tezamen en werd met de dag rijker.'
    },
    { title: "Hooglandgemaal", 
      picture: ['assets/imgs/vvv-logo.png'],
      description: 'Het J.L. Hooglandgemaal is een elektrisch gemaal in Stavoren in de Nederlandse provincie Friesland. Het bouwwerk uit 1966 met een gebogen dak werd gebouwd naar ontwerp van architect Piet de Vries. In de hal staan vier schroefpompen. Het gemaal loost het water vanuit de Friese boezem op het IJsselmeer.'
    },
    { title: "Vuurtoren van Stavoren", 
      picture: ['assets/imgs/vvv-logo.png'],
        description: 'De Vuurtoren van Stavoren is een gietijzeren vuurtoren of lichtopstand aan het IJsselmeer bij de haven van Stavoren. Op de twee havenpieren staan twee bijbehorende havenlichten, een groene en een rode.'
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
