import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GameProvider } from '../../providers/game/game';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the EndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-end',
  templateUrl: 'end.html',
})
export class EndPage {

  results = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private gameProvider: GameProvider,
              private platform: Platform,
              private alerts: AlertController
            ) {
  }

  ionViewDidLoad() {
    this.results = this.gameProvider.getReward();
    let details = {
      reward : this.results,
      token : localStorage.getItem('userToken')
    };
    this.gameProvider.saveReward(details).then((data: any) => {

    });
  }

  exitGame() {
    this.platform.exitApp();
  }

}
