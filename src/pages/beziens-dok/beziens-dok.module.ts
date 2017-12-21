import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeziensDokPage } from './beziens-dok';

@NgModule({
  declarations: [
    BeziensDokPage,
  ],
  imports: [
    IonicPageModule.forChild(BeziensDokPage),
  ],
})
export class BeziensDokPageModule {}
