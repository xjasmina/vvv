import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})

export class PasswordPage {


	@ViewChild('username') user;
	@ViewChild('password') password;


	constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) { }

	alert(message: string) {
	   this.alertCtrl.create({
	      title: 'Info!',
	      subTitle: message,
	      buttons: ['OK']
	   }).present();
	}

	resetPW() {
		this.fire.auth.sendPasswordResetEmail(this.user.value)
        .then( resp =>  {
        	console.log('sent!') 
        	this.alert('Zie uw email voor instructies');
        })
        .catch( error => {
        	console.log('failed to send', error)
        	this.alert('Email incorrect of bestaat niet');
        })
	}

}
