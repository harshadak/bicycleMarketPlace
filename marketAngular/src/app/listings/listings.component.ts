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

  constructor(private _marketservice: MarketService, private _router: Router) { }

  ngOnInit() {
    // if (!this._marketservice.getID()) {
    //   this._router.navigate(['']);
    // }
  }

}
