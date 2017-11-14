import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripplannerPage } from './tripplanner';

@NgModule({
  declarations: [
    TripplannerPage,
  ],
  imports: [
    IonicPageModule.forChild(TripplannerPage),
  ],
})
export class TripplannerPageModule {}
