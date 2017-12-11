import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LevelingPage } from '../pages/leveling/leveling';
import { TripplannerPage } from '../pages/tripplanner/tripplanner';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PasswordPage } from '../pages/password/password';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MapsPage } from '../pages/maps/maps';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

// import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



let firebaseAuth = {
    apiKey: "AIzaSyDy3oDBnUdnC-RPjgqjVvTrVRv2vAc_2eA",
    authDomain: "vvv-project.firebaseapp.com",
    databaseURL: "https://vvv-project.firebaseio.com",
    projectId: "vvv-project",
    storageBucket: "vvv-project.appspot.com",
    messagingSenderId: "351107616033"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LevelingPage,
    TripplannerPage,
    ListPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    TutorialPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LevelingPage,
    TripplannerPage,
    ListPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    TutorialPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, IonicStorageModule,
    NativeStorage,
    AuthProvider
  ]
})
export class AppModule {}
