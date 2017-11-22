import { Component } from '@angular/core';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage { 

constructor(public facebook: Facebook){}

	userData = null;

	loginFB(): Promise<any> {

	  return this.facebook.login(['public_profile', 'email'])
	    .then( response => {

	      const facebookCredential = firebase.auth.FacebookAuthProvider
	        .credential(response.authResponse.accessToken);

	      firebase.auth().signInWithCredential(facebookCredential)
	        .then( success => {  	
	          alert("het werkt");
	        });
	        
	    }).catch((error) => { 
	    	console.log(error) 
	    });


	}

	logoutFB() {
	    this.facebook.logout().then((response) => {
	      alert(JSON.stringify("U bent uitgelogd."));
	    }, (error) => {
	      alert("U bent niet ingelogd.");
	    })
	}


} // end class loginpage