import { Component, OnInit } from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';
import { User } from './../user';
import { Bicycle } from './../bicycle';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  bicycle = new Bicycle();
  bikes = [];

  constructor(private _marketservice: MarketService, private _router: Router) { }

  ngOnInit() {
    if (!this._marketservice.getID()) {
      this._router.navigate(['']);
    }
    this.getMyBikes();
  }

  getMyBikes() {
      this._marketservice.getMyBikes(callBikes => {
      console.log(this.bikes);
      this.bikes = callBikes;
    });
  }

  createBike() {
    console.log(this.bicycle);
    this._marketservice.createBike(this.bicycle, reset => {
      this.bicycle = new Bicycle();
      this.getMyBikes();
    });
  }

  updateBike(id, bike) {
    console.log("Bike Index", bike);
    this._marketservice.updateMyBike(id, bike);
  }

  deleteBike(id, index) {
    this._marketservice.deleteMyBike(id, deletedata => {
      this.bikes.splice(index, 1);
    })
  }

}
