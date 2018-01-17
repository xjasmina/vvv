import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';

import { ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',

})



export class TutorialPage {


  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

	goToHome() {
		this.navCtrl.setRoot(HomePage);
	}

	goToRegister() {
		this.navCtrl.push(RegisterPage);
	}

	goToLogin() {
    	this.navCtrl.push(LoginPage);
  	}

  	goToSlide() {
    	this.slides.slideTo(1, 500);
  	}

    goToSlide1() {
      this.slides.slideTo(2, 500);
    }

    goToSlide2() {
      this.slides.slideTo(3, 500);
    }

}
