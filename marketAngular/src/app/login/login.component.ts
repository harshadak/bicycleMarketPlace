import { Component, OnInit } from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';
import { User } from './../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObject = {
    email : '',
    password : ''
  }

  user = new User();
  regalert = false;
  loginalert = false;

  constructor(private _marketservice: MarketService, private _router: Router) { }

  ngOnInit() {
  }

  Login() {
    // this._marketservice.check(user);
    this._marketservice.loginUser(this.loginObject, navigate => {
      this._router.navigate(['/browse']);
    }, alerting => {
      this.loginalert = true;
      alert("Invalid email/password!");
    }); 
  }

  Register() {
    console.log("Inside register", this.user);
    this._marketservice.createUser(this.user, navigate => {
      this._router.navigate(['/browse']);
    }, alerting => {
      this.regalert = true;
      alert("Email already exists!");
    });
  }
}
