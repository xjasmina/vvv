import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-leveling',
  templateUrl: 'leveling.html'
})

export class LevelingPage {


    constructor(public navCtrl: NavController) {
   }


      // start leveling on click
      levelClick(){

          let level = 0;

          //store data
          if(localStorage.level) level = localStorage.getItem('level');
          document.getElementById("level").innerHTML = level;

          // level up when clicked 
          level = Math.min(Math.max(parseInt(level), 0), 10);
          level = level + 1;

          document.getElementById("level").innerHTML = level;
          localStorage.setItem('level', level);

          //localStorage.clear();

      }

}


