import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../providers/game/game';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  details = {
    name : '',
    email : '',
    mobile : ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameProvider: GameProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  submitDetails() {
    this.gameProvider.submitDetails();
  }

}
