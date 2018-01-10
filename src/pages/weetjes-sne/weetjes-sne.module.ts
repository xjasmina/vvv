import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeetjesSnePage } from './weetjes-sne';

@NgModule({
  declarations: [
    WeetjesSnePage,
  ],
  imports: [
    IonicPageModule.forChild(WeetjesSnePage),
  ],
})
export class WeetjesSnePageModule {}
