import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeetjesPage } from './weetjes';

@NgModule({
  declarations: [
    WeetjesPage,
  ],
  imports: [
    IonicPageModule.forChild(WeetjesPage),
  ],
})
export class WeetjesPageModule {}
