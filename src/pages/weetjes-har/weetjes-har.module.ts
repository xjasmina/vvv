import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeetjesHarPage } from './weetjes-har';

@NgModule({
  declarations: [
    WeetjesHarPage,
  ],
  imports: [
    IonicPageModule.forChild(WeetjesHarPage),
  ],
})
export class WeetjesHarPageModule {}
