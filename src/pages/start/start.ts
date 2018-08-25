import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../providers/game/game';
import { AlertController } from 'ionic-angular';
import { GamePage } from '../game/game';

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
    mobile : '',
    action : 'start'
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public gameProvider: GameProvider,
              private alerts: AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  submitDetails() {
    this.gameProvider.submitDetails(this.details).then((data: any) => {
      if(data.status == 'success') {
        localStorage.setItem('userToken', data.token);
        this.gameProvider.setReward(data.value);
        this.navCtrl.setRoot(GamePage);
      }
      else {
        let alert = this.alerts.create({
          title: data.status,
          subTitle: data.message,
          buttons: ['Dismiss']
        });
        alert.present();
      }
    });

  }

}
