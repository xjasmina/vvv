import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LevelingPage } from '../pages/leveling/leveling';
import { TripplannerPage } from '../pages/tripplanner/tripplanner';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { NativeStorage } from '@ionic-native/native-storage';

import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public NativeStorage: NativeStorage, private facebook: Facebook) {


    //add facebook on every page
        firebase.auth().onAuthStateChanged( user => {
    if (user){
      this.userProfile = user;
      this.rootPage = HomePage;
      alert("test of je ingelogd bent");
    } else { 
      this.userProfile = null; 
      this.rootPage = LoginPage;
      alert("test of je niet ingelogd bent");
    }
  });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Achievements', component: LevelingPage },
      { title: 'Tripplanner', component: TripplannerPage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage }
    ];

  }


  //if facebook started, check current user
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

  //logout of facebook
  logoutFB() {
   firebase.auth().signOut()
   .then(function() {
      console.log('Signout successful!')
   }, function(error) {
      console.log('Signout failed')
   });
}

  //////////////

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
