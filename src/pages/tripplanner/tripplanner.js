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
import { NavController } from 'ionic-angular';
var TripplannerPage = /** @class */ (function () {
    function TripplannerPage(navCtrl) {
        this.navCtrl = navCtrl;
        var that = this;
        setTimeout(function () {
            that.googleMap();
        }, 2000);
    }
    TripplannerPage.prototype.googleMap = function () {
        var that = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 6
        });
        this.infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                that.infoWindow.setPosition(pos);
                that.infoWindow.setContent('Location found.');
                that.infoWindow.open(that.map);
                that.map.setCenter(pos);
            }, function () {
                this.handleLocationError(true, that.infoWindow, that.map.getCenter(), that.map);
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, that.infoWindow, that.map.getCenter(), that.map);
        }
    };
    TripplannerPage.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos, map) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    };
    TripplannerPage = __decorate([
        Component({
            selector: 'page-tripplanner',
            templateUrl: 'tripplanner.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], TripplannerPage);
    return TripplannerPage;
}());
export { TripplannerPage };
//# sourceMappingURL=tripplanner.js.map