import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MarketService {

  constructor(private _http: Http) { }

  private loggedUserID = null;
  private loggedUser = null;

  createUser(user, nav, alert) {
    this.loggedUser = user.firstName;
    this._http.post('/user', user).subscribe(
      (res) => {
        if(res.json()) {
          console.log(res.json());
          this.loggedUserID = res.json()._id;
          nav();
        } else {
          alert();
        }  
      },
      (error) => {
        console.log("Could not retrieve all data");
      }
    )
  }

  loginUser(loginObject, nav, alert) {
    this._http.post('/userlogin', loginObject).subscribe(
      (res) => {
        if(res.json()) {
          console.log(res.json());
          this.loggedUserID = res.json()._id;
          nav();
        } else {
          alert();
        }
      },
      (error) => {
        console.log("Could not retrieve all data");
      }
    )
  }

  getID() {
    return this.loggedUserID;
  }

  resetID() {
    this.loggedUserID = null;
  }
}
