import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';


import { HomePage } from '../pages/home/home';
import { LevelingPage } from '../pages/leveling/leveling';
import { TripplannerPage } from '../pages/tripplanner/tripplanner';
// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
// import { PasswordPage } from '../pages/password/password';

import { NativeStorage } from '@ionic-native/native-storage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('username') user;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;



  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public NativeStorage: NativeStorage, private fire: AngularFireAuth) {

    let name, email, photoUrl, uid, emailVerified;

    this.fire.auth.onAuthStateChanged( user => {
      if (user){
        this.rootPage = HomePage;
        alert("test of je ingelogd bent");

        // name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;

       document.getElementById("username").innerHTML = "Ingelogd als" + email;

      } else { 
        this.rootPage = LoginPage;
        alert("test of je niet ingelogd bent");
      }
    });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Achievements', component: LevelingPage },
      { title: 'Tripplanner', component: TripplannerPage },
      // { title: 'List', component: ListPage },
      // { title: 'Login', component: LoginPage }
      // { title: 'Register', component: RegisterPage },
      // { title: 'Password', component: PasswordPage }
    ];

  }

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

}
