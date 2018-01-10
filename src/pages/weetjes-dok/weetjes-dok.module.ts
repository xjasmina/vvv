import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeetjesDokPage } from './weetjes-dok';

@NgModule({
  declarations: [
    WeetjesDokPage,
  ],
  imports: [
    IonicPageModule.forChild(WeetjesDokPage),
  ],
})
export class WeetjesDokPageModule {}
