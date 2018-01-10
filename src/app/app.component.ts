import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from "angularfire2/database";
// import { FirebaseListObservable } from "angularfire2/database-deprecated";


import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LevelingPage } from '../pages/leveling/leveling';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MapsPage } from '../pages/maps/maps';
import { InfoPage } from '../pages/info/info';


// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
// import { PasswordPage } from '../pages/password/password';
import { NativeStorage } from '@ionic-native/native-storage';

import { Geofence } from '@ionic-native/geofence';

import { BeziensFraPage } from '../pages/beziens-fra/beziens-fra';
import { BeziensBolPage } from '../pages/beziens-bol/beziens-bol';
import { BeziensDokPage } from '../pages/beziens-dok/beziens-dok';
import { BeziensHarPage } from '../pages/beziens-har/beziens-har';
import { BeziensHinPage } from '../pages/beziens-hin/beziens-hin';
import { BeziensIjlPage } from '../pages/beziens-ijl/beziens-ijl';
import { BeziensLwdPage } from '../pages/beziens-lwd/beziens-lwd';
import { BeziensSloPage } from '../pages/beziens-slo/beziens-slo';
import { BeziensSnePage } from '../pages/beziens-sne/beziens-sne';
import { BeziensStaPage } from '../pages/beziens-sta/beziens-sta';
import { BeziensWorPage } from '../pages/beziens-wor/beziens-wor';








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
    // private db: AngularFireDatabase, 
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
    this.initializeApp();
 

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
      { title: 'De Elfsteden', component: HomePage },
      { title: 'Achievements', component: LevelingPage },
      { title: 'Tripplanner', component: MapsPage },
       { title: 'Info', component: InfoPage }
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
        () => this.addGeofence(),//() => this.addGeofence(),//console.log('Geofence Plugin Ready' ),
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

 
 //open menu list de elfsteden
 

  private addGeofence() {
  //options describing geofence
  let fra = {
    id: 'Franeker', //any unique ID
    latitude:       53.187165,  //center of geofence radius
    longitude:      5.541883,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 1,
        title: 'Welkom in Franeker',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensFraPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

  let wor = {
    id: 'Workum', //any unique ID
    latitude:       52.979278,   //center of geofence radius
    longitude:      5.447921,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 2,
        title: 'Welkom in Workum',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensWorPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let bol = {
    id: 'Bolsward', //any unique ID
    latitude:       53.060325,   //center of geofence radius
    longitude:      5.511188,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 3,
        title: 'Welkom in Bolsward',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensBolPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let dok = {
    id: 'Dokkum', //any unique ID
    latitude:       53.323866,   //center of geofence radius
    longitude:      5.999071,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 4,
        title: 'Welkom in Dokkum',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensDokPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let har = {
    id: 'Harlingen', //any unique ID
    latitude:       53.175036,   //center of geofence radius
    longitude:      5.417202,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 5,
        title: 'Welkom in Harlingen',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensHarPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let hin = {
    id: 'Hindeloopen', //any unique ID
    latitude:       52.942507,   //center of geofence radius
    longitude:      5.401493,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 6,
        title: 'Welkom in Hindeloopen',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensHinPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let ijl = {
    id: 'IJlst', //any unique ID
    latitude:       53.013519, //center of geofence radius
    longitude:      5.620156,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 7,
        title: 'Welkom in IJlst',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensIjlPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let lwd = {
    id: 'Leeuwarden', //any unique ID
    latitude:       53.201818,   //center of geofence radius
    longitude:      5.797812,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 8,
        title: 'Welkom in Leeuwarden',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensLwdPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let slo = {
    id: 'Sloten', //any unique ID
    latitude:       52.894799,   //center of geofence radius
    longitude:      5.648220,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 9,
        title: 'Welkom in Sloten',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensSloPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let sne = {
    id: 'Sneek', //any unique ID
    latitude:       53.033607,   //center of geofence radius
    longitude:      5.657307,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 10,
        title: 'Welkom in Sneek',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensSnePage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    let sta = {
    id: 'Stavoren', //any unique ID
    latitude:       52.884154,   //center of geofence radius
    longitude:      5.361135,
    radius:         500, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    onNotificationClicked(){
      this.localNotifications.schedule({
        id: 11,
        title: 'Welkom in Stavoren',
        text: 'Benieuwd wat er te zien is? ',

        data: this.navCtrl.push(BeziensStaPage),
        //at: new Date(new Date().getTime() + 5 * 1000)
      });



    }
  }

    this.geofence.addOrUpdate(fra).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(bol).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(dok).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(har).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(hin).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(ijl).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(lwd).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(slo).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(sne).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(sta).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    this.geofence.addOrUpdate(wor).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

     

  }



}
