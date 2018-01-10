import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeetjesStaPage } from './weetjes-sta';

@NgModule({
  declarations: [
    WeetjesStaPage,
  ],
  imports: [
    IonicPageModule.forChild(WeetjesStaPage),
  ],
})
export class WeetjesStaPageModule {}
