import { Component } from '@angular/core';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage { 

constructor( private facebook: Facebook, private google: GooglePlus){ 

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

//facebook
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

// google login

loginUser(): void {
  this.google.login({
    'webClientId': '351107616033-mi4upnobeom629n99im9ne7hj1ge801s.apps.googleusercontent.com',
    'offline': true
  }).then( res => {
          const googleCredential = firebase.auth.GoogleAuthProvider
              .credential(res.idToken);
 
          firebase.auth().signInWithCredential(googleCredential)
        .then( response => {
            console.log("Firebase success: " + JSON.stringify(response));
            this.userProfile = response;
        });
  }, (error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
      });
}
  


} // end class loginpage