import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LevelingPage } from '../pages/leveling/leveling';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PasswordPage } from '../pages/password/password';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MapsPage } from '../pages/maps/maps';
import { InfoPage } from '../pages/info/info';


//all facts pages
import { WeetjesPage } from '../pages/weetjes/weetjes';
import { WeetjesLwdPage } from '../pages/weetjes-lwd/weetjes-lwd';
import { WeetjesSloPage } from '../pages/weetjes-slo/weetjes-slo';
import { WeetjesIjlPage } from '../pages/weetjes-ijl/weetjes-ijl';
import { WeetjesStaPage } from '../pages/weetjes-sta/weetjes-sta';
import { WeetjesDokPage } from '../pages/weetjes-dok/weetjes-dok';
import { WeetjesFraPage } from '../pages/weetjes-fra/weetjes-fra';
import { WeetjesBolPage } from '../pages/weetjes-bol/weetjes-bol';
import { WeetjesHarPage } from '../pages/weetjes-har/weetjes-har';
import { WeetjesSnePage } from '../pages/weetjes-sne/weetjes-sne';
import { WeetjesHinPage } from '../pages/weetjes-hin/weetjes-hin';
import { WeetjesWorPage } from '../pages/weetjes-wor/weetjes-wor';

//end 

//all beziens pages
import { BeziensLwdPage } from '../pages/beziens-lwd/beziens-lwd';
import { BeziensIjlPage } from '../pages/beziens-ijl/beziens-ijl';
import { BeziensStaPage } from '../pages/beziens-sta/beziens-sta';
import { BeziensDokPage } from '../pages/beziens-dok/beziens-dok';
import { BeziensFraPage } from '../pages/beziens-fra/beziens-fra';
import { BeziensBolPage } from '../pages/beziens-bol/beziens-bol';
import { BeziensHarPage } from '../pages/beziens-har/beziens-har';
import { BeziensSloPage } from '../pages/beziens-slo/beziens-slo';
import { BeziensSnePage } from '../pages/beziens-sne/beziens-sne';
import { BeziensHinPage } from '../pages/beziens-hin/beziens-hin';
import { BeziensWorPage } from '../pages/beziens-wor/beziens-wor';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

// import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from '../providers/firebase/firebase';


import { Geofence } from '@ionic-native/geofence';

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
    ListPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    TutorialPage,
    MapsPage,
    InfoPage,
    WeetjesPage,
    WeetjesLwdPage,
    WeetjesSloPage,
    WeetjesIjlPage,
    WeetjesStaPage,
    WeetjesDokPage,
    WeetjesFraPage,
    WeetjesBolPage,
    WeetjesHarPage,
    WeetjesSnePage,
    WeetjesHinPage,
    WeetjesWorPage,
    BeziensLwdPage,
    BeziensIjlPage,
    BeziensStaPage,
    BeziensDokPage,
    BeziensFraPage,
    BeziensBolPage,
    BeziensHarPage,
    BeziensSloPage,
    BeziensSnePage,
    BeziensHinPage,
    BeziensWorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LevelingPage,
    ListPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    TutorialPage,
    MapsPage,
    InfoPage,
    WeetjesPage,
    WeetjesLwdPage,
    WeetjesSloPage,
    WeetjesIjlPage,
    WeetjesStaPage,
    WeetjesDokPage,
    WeetjesFraPage,
    WeetjesBolPage,
    WeetjesHarPage,
    WeetjesSnePage,
    WeetjesHinPage,
    WeetjesWorPage,
    BeziensLwdPage,
    BeziensIjlPage,
    BeziensStaPage,
    BeziensDokPage,
    BeziensFraPage,
    BeziensBolPage,
    BeziensHarPage,
    BeziensSloPage,
    BeziensSnePage,
    BeziensHinPage,
    BeziensWorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, IonicStorageModule,
    NativeStorage,
    AuthProvider,
    FirebaseProvider,
    Geofence
  ]
})
export class AppModule {}
