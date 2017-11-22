var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
var LoginPage = /** @class */ (function () {
    // constructor(private fb: Facebook) { }
    // loginFB() {
    // 	this.fb.login(['public_profile', 'user_friends', 'email'])
    // 	  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    // 	  .catch(e => console.log('Error logging into Facebook', e));
    // 	this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    // }
    // logoutFB() {
    //     this.fb.logout().then((response) =>{
    //       alert(JSON.stringify("Logged out"));
    //     }, (error) => {
    //       alert(error);
    //     })
    //  	}
    function LoginPage(facebook) {
        this.facebook = facebook;
    }
    LoginPage.prototype.loginFB = function () {
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = firebase.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            firebase.auth().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) { console.log(error); });
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [Facebook])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map