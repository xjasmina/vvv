import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(private navParams: NavParams, private view: ViewController, private modal: ModalController) {
  }


  presentModal() {
    let modalCreate = this.modal.create(ModalPage);
    modalCreate.present();
  }

   closeModal() {
    this.view.dismiss();
  }



}
