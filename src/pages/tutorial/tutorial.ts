import { Component } from '@angular/core';

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




}
