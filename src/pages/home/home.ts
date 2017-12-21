import { Component } from '@angular/core';

//weetjes
import { WeetjesPage } from '../weetjes/weetjes';
import { WeetjesLwdPage } from '../weetjes-lwd/weetjes-lwd';
import { WeetjesSloPage } from '../weetjes-slo/weetjes-slo';

//beziens
import { BeziensLwdPage } from '../beziens-lwd/beziens-lwd';
import { BeziensIjlPage } from '../beziens-ijl/beziens-ijl';
import { BeziensStaPage } from '../beziens-sta/beziens-sta';
import { BeziensDokPage } from '../beziens-dok/beziens-dok';
import { BeziensFraPage } from '../beziens-fra/beziens-fra';
import { BeziensBolPage } from '../beziens-bol/beziens-bol';
import { BeziensHarPage } from '../beziens-har/beziens-har';
import { BeziensSloPage } from '../beziens-slo/beziens-slo';
import { BeziensSnePage } from '../beziens-sne/beziens-sne';
import { BeziensHinPage } from '../beziens-hin/beziens-hin';
import { BeziensWorPage } from '../beziens-wor/beziens-wor';


import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})


export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //weetjes
  goToFacts() {
		this.navCtrl.push(WeetjesPage);
	}

  goToFactsLwd() {
		this.navCtrl.push(WeetjesLwdPage);
	}

  goToFactsSlo() {
    this.navCtrl.push(WeetjesSloPage);
  }


  // bezienswaardigheden
   goToBeziensLwd() {
    this.navCtrl.push(BeziensLwdPage);
  }

   goToBeziensIjl() {
    this.navCtrl.push(BeziensIjlPage);
  }

  goToBeziensSta() {
    this.navCtrl.push(BeziensStaPage);
  }

  goToBeziensDok() {
    this.navCtrl.push(BeziensDokPage);
  }


  goToBeziensFra() {
    this.navCtrl.push(BeziensFraPage);
  }

  goToBeziensBol() {
    this.navCtrl.push(BeziensBolPage);
  }

  goToBeziensHar() {
     this.navCtrl.push(BeziensHarPage);
  }

  goToBeziensSlo() {
     this.navCtrl.push(BeziensSloPage);
  }

  goToBeziensSne() {
     this.navCtrl.push(BeziensSnePage);
  }

  goToBeziensHin() {
     this.navCtrl.push(BeziensHinPage);
  }

  goToBeziensWor() {
     this.navCtrl.push(BeziensWorPage);
  }


}
