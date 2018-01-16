var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var LevelingPage = /** @class */ (function () {
    function LevelingPage() {
    }
    LevelingPage.prototype.levelClick = function () {
        var level = "0";
        if (typeof (Storage) !== "undefined") {
            localStorage.level = Number(localStorage.level) + 1;
            localStorage.level = Math.min(Math.max(parseInt(localStorage.level), 0), 200);
            localStorage.setItem('current-level', level);
        }
        else {
        }
        document.getElementById("current-level").innerHTML = "You have clicked the button " + localStorage.level + " time(s).";
    };
    LevelingPage = __decorate([
        Component({
            selector: 'page-leveling',
            templateUrl: 'leveling.html'
        })
    ], LevelingPage);
    return LevelingPage;
}());
export { LevelingPage };
//# sourceMappingURL=leveling.js.map

