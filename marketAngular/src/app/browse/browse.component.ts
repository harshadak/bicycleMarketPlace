import { Component, OnInit } from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private _marketservice: MarketService, private _router: Router) { }

  ngOnInit() {
    // if (!this._marketservice.getID()) {
    //   this._router.navigate(['']);
    // }
  }

}
