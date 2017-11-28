import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LevelingPage } from '../pages/leveling/leveling';
import { TripplannerPage } from '../pages/tripplanner/tripplanner';
import { ListPage, } from '../pages/list/list';
import { LoginPage, } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';


let firebaseConfig = {
    apiKey: "AIzaSyDy3oDBnUdnC-RPjgqjVvTrVRv2vAc_2eA",
    authDomain: "vvv-project.firebaseapp.com",
    databaseURL: "https://vvv-project.firebaseio.com",
    projectId: "vvv-project",
    storageBucket: "vvv-project.appspot.com",
    messagingSenderId: "351107616033"
};

firebase.initializeApp(firebaseConfig);  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LevelingPage,
    TripplannerPage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LevelingPage,
    TripplannerPage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, IonicStorageModule,
    Facebook,
    GooglePlus,
    NativeStorage
  ]
})
export class AppModule {}
