import { Component } from '@angular/core';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';


@Component({
  selector: 'page-leveling',
  templateUrl: 'leveling.html'
})

export class LevelingPage {


 levelClick() {


    var level = "0";

    if(typeof(Storage) !== "undefined") {


          localStorage.level = Number(localStorage.level) + 1;
          localStorage.level = Math.min(Math.max(parseInt(localStorage.level), 0), 200);

          localStorage.setItem('current-level', level);
     
      }
        else {
           
        }
          document.getElementById("current-level").innerHTML = "You have clicked the button " + localStorage.level + " time(s).";
      }



}


