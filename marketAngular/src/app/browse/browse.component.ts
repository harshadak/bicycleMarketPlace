import { Component, OnInit } from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  allBikes = [];
  loggedUserID;

  constructor(private _marketservice: MarketService, private _router: Router) { }

  ngOnInit() {
    this.loggedUserID =this._marketservice.getID();
    if (!this._marketservice.getID()) {
      this._router.navigate(['']);
    }
    this._marketservice.getAllBikes(callAllBikes => {
      this.allBikes = callAllBikes;
      console.log(this.allBikes[0]);
    });
  }
  deleteBike(id, index) {
    this._marketservice.deleteMyBike(id, deletedata => {
      this.allBikes.splice(index, 1);
    })
  }

  contact(name, email) {
    alert("Name: " + name + "\nEmail: " + email);
  }
}
