import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class GameProvider {


  API_URL = 'http://localhost/eventwheel-game-api/';
  private reward = null;

  constructor(public http: HttpClient) {
    
  }


  submitDetails (params) {
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL ,params).subscribe((data) => {
        resolve(data);
      });
    });

  }

  setReward (item) {
    this.reward = item;
  }

  getReward () {
    return this.reward;
  }

  saveReward (params) {
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL ,params).subscribe((data) => {
        resolve(data);
      });
    });
  }

}
