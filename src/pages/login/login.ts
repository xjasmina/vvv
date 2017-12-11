import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { RegisterPage } from '../register/register';
import { PasswordPage } from '../password/password';


import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage { 


	//show login screen
	@ViewChild('username') user;
	@ViewChild('password') password;

	constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

	}

	//login system

	  alert(message: string) {
	    this.alertCtrl.create({
	      title: 'Info!',
	      subTitle: message,
	      buttons: ['OK']
	    }).present();
	  }



	signInUser () {
		this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
		.then(data => {
			console.log('got some data', this.fire.auth.currentUser);
			this.alert('Je bent ingelogd');

			window.localStorage.setItem('username', this.user.value);
        	window.localStorage.setItem('password',this.password.value);
        	
		})
		.catch(error =>  {
			console.log('got error, error');
			this.alert('Email of wachtwoord incorrect (of mogelijk heeft u geen internet verbinding)');
		})
		console.log('Would log in with ', this.user.value, this.password.value);
	}


	goToReset() {
		this.navCtrl.push(PasswordPage);
	}

	goToRegister() {
		this.navCtrl.push(RegisterPage);
	}

} // end class loginpage