import { Component } from '@angular/core';
import { WeetjesPage } from '../weetjes/weetjes';
import { WeetjesLwdPage } from '../weetjes-lwd/weetjes-lwd';
import { WeetjesSloPage } from '../weetjes-slo/weetjes-slo';


import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})


export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToFacts() {
		this.navCtrl.push(WeetjesPage);
	}

  goToFactsLwd() {
		this.navCtrl.push(WeetjesLwdPage);
	}

  goToFactsSlo() {
    this.navCtrl.push(WeetjesSloPage);
  }

}
