import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseListObservable } from "angularfire2/database-deprecated";


import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LevelingPage } from '../pages/leveling/leveling';
import { TripplannerPage } from '../pages/tripplanner/tripplanner';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MapsPage } from '../pages/maps/maps';


// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
// import { PasswordPage } from '../pages/password/password';
import { NativeStorage } from '@ionic-native/native-storage';

import { Geofence } from '@ionic-native/geofence';


@Component({
  templateUrl: 'app.html'
})



export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild('username') user;

  rootPage: any = LoginPage;
  loader: any;

  pages: Array<{title: string, component: any}>;

  constructor(

    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public NativeStorage: NativeStorage, 
    private fire: AngularFireAuth, 
    private db: AngularFireDatabase, 
    public storage: Storage ,
    private geofence: Geofence

    ) {

    this.storage.get('tutorialShown').then((result) => {
 
        if(result){
          this.user;
        } else {
          this.nav.setRoot(TutorialPage);
          this.storage.set('tutorialShown', true);
        }
  
    });
 

    //check if user is logged in or not
    let email;

    this.fire.auth.onAuthStateChanged( user => {
      if (user){
        this.rootPage = HomePage;

        email = user.email;

        document.getElementById("username").innerHTML = "Ingelogd als " + email;
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";

      } else { 
        this.rootPage = LoginPage;
        document.getElementById("username").innerHTML = "Niet ingelogd";
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";


      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Achievements', component: LevelingPage },
      { title: 'Tripplanner', component: TripplannerPage },
      { title: 'Map', component: MapsPage },
      // { title: 'List', component: ListPage },
      // { title: 'Login', component: LoginPage }
      // { title: 'Register', component: RegisterPage },
      // { title: 'Password', component: PasswordPage }
    ];

  } //end constructor


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.geofence.initialize().then(
        // resolved promise does not return a value
        () => console.log('Geofence Plugin Ready' ),//() => this.addGeofence(),//console.log('Geofence Plugin Ready' ),
        (err) => console.log(err)
      )

    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToLogin() {
    this.nav.setRoot(LoginPage);
  }

  logOut() {
    this.fire.auth.signOut().then(function() {
    // Sign-out successful.
    }, function(error) {
      console.log(error);
    });
  }



  private addGeofence() {
  //options describing geofence
  let fence = {
    id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
    latitude:       53.211690, //center of geofence radius
    longitude:      5.798568,
    radius:         50, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    notification: { //notification settings
        id:             1, //any unique ID
        title:          'You crossed a fence', //notification title
        text:           'You just arrived to Gliwice city center.', //notification body
        openAppOnClick: true //open app when notification is tapped


    }
  }

  let fence1 = {
    id: '19ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
    latitude:       53.208834, //center of geofence radius
    longitude:      5.798174,
    radius:         100, //radius to edge of geofence in meters
    transitionType: 3, //see 'Transition Types' below
    notification: { //notification settings
        id:             2, //any unique ID
        title:          'bjffddfgkd', //notification title
        text:           'You just arrived to Gliwice city center.', //notification body
        openAppOnClick: true //open app when notification is tapped

    }
  }

   let fence3 = {
    id: '69ca1b88-6fbe-4e80-a4d4-ff4d3740acdbdf', //any unique ID
    latitude:       53.211282, //center of geofence radius
    longitude:      5.799528,
    radius:         50, //radius to edge of geofence in meters
    transitionType: 3, //see 'Transition Types' below
    notification: { //notification settings
        vibrate: [1000],
        id:             1, //any unique ID
        title:          'dddddddddddfdfdf', //notification title
        text:           'You just arrived to Gliwice city center.', //notification body
        openAppOnClick: true //open app when notification is tapped


    }
  }

    this.geofence.addOrUpdate(fence).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

     this.geofence.addOrUpdate(fence1).then(
       () => console.log('Geofence1!!!!! added'),
       (err) => console.log('Geofence failed to add')
     );

     this.geofence.addOrUpdate(fence3).then(
       () => console.log('dfjksdfjslf!!!!! added'),
       (err) => console.log('Geofence failed to add')
     );

  }



}
