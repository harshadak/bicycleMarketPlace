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

  createBike(bikeObject, reset) {
    bikeObject._creator = this.loggedUserID;
    this._http.post('/bicycle', bikeObject).subscribe(
      res => {
        console.log("created bike", res.json());
        reset();
      },
      err => {
        console.log("Unable to create bike", err);
      }
    )
  }

  getMyBikes(callback) {
    this._http.get(`/bicycle/${this.loggedUserID}`).subscribe(
      res => {
        console.log("Got my bikes", res.json());
        callback(res.json());
      },
      err => {
        console.log("Unable to get bikes", err);
      }
    )
  }

  getAllBikes(callback) {
    this._http.get('/bicycles').subscribe(
      res => {
        console.log("Got all the bikes", res.json());
        callback(res.json());
      },
      err => {
        console.log("Unable to get all bikes", err);
      }
    )
  }

  updateMyBike(id, bikeObject) {
    console.log("Bike ID:", id);
    this._http.put(`/bicycle/${id}`, bikeObject).subscribe(
      res => {
        console.log("Updated a bike", bikeObject);
      },
      err => {
        console.log("Unable to update bike", err);
      }
    )
  }

  deleteMyBike(id, callback) {
    console.log("Bike ID:", id);
    console.log("Bicycle URL", "/bicycle/" + id);
    this._http.delete("/bicycle/" + id).subscribe(
      res => {
        console.log("Inside service", res);
        callback();
      },
      err => {
        console.log("Could not delete the bike", err);
      }
    )
  }

  getRandomBike(callback) {
    this._http.get("/bicycle/random").subscribe(
      res => {
        callback(res.json());
      },
      err => {
        console.log("Could not get a random bike");
      }
    )
  }
}
