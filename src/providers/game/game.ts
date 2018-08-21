import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class GameProvider {

  API_URL = 'http://localhost:8000/';

  constructor(public http: HttpClient) {
    console.log('Hello GameProvider Provider');
  }


  submitDetails () {
    this.http.get(this.API_URL).subscribe((data) => {
      console.log(data);
    });
  }

}
