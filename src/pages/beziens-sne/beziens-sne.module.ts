import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeziensSnePage } from './beziens-sne';

@NgModule({
  declarations: [
    BeziensSnePage,
  ],
  imports: [
    IonicPageModule.forChild(BeziensSnePage),
  ],
})
export class BeziensSnePageModule {}
