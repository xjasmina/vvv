import { Component } from '@angular/core';

@Component({
  selector: 'page-leveling',
  templateUrl: 'leveling.html'
})

export class LevelingPage {


      // start leveling on click
      levelClick() {

          let level:string = 0;

          //store data
          if(localStorage.level) level = localStorage.getItem('level');
          document.getElementById('level').innerHTML = String(level);

          // level up when clicked 
          level = Math.min(Math.max(parseInt(level), 0), 10);
          level = level + 1;

          document.getElementById('level').innerHTML = String(level);
          localStorage.setItem('level', level);

          if (level = 1) {
            console.log("wow nog maar level 1");
          }

          // localStorage.clear();

      }

}


