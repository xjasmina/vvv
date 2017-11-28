import { Component } from '@angular/core';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage { 

constructor( private facebook: Facebook){ 

    firebase.auth().onAuthStateChanged( user => {
    if (user){
      this.userProfile = user;
      alert("test of je ingelogd bent");
    } else { 
      this.userProfile = null; 
      alert("test of je niet ingelogd bent");
    }
  });

}


  userProfile = firebase.auth().currentUser;

  loginFB(): void {
    this.facebook.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
        });
      }, (error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
      });
  }

  logoutFB() {
   firebase.auth().signOut()
   .then(function() {
      console.log('Signout successful!')
   }, function(error) {
      console.log('Signout failed')
   });
}


} // end class loginpage