import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
user: any = {};
Login : string="Login";
  constructor() { }

  ngOnInit() {
  }
login(){
console.log("here into login",this.user);
}
}
