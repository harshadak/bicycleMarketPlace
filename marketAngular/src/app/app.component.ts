import { Component } from '@angular/core';
import { MarketService } from './market.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bicycle Marketplace';
  private loggedUserID = null;

  constructor(private _marketservice: MarketService) { }

  ngOnInit() {
    
  }

  updateID() {
    this.loggedUserID = this._marketservice.getID();
    console.log("Hiiiiii", this.loggedUserID);
  }

  resetID() {
    this._marketservice.resetID();
  }
}
