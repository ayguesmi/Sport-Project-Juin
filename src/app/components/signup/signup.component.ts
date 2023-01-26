import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Form ID
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[!@#\$&*~]).{6,12}')]],
      confirmPwd: ["", Validators.required]
    })
  }
  signup() {
    var users = JSON.parse(localStorage.getItem("users") || '[]');
    this.signupForm.value.id = generateId(users) + 1
    users.push(this.signupForm.value);
    localStorage.setItem("users", JSON.stringify(users));
    this.router.navigate(["admin"]);
  }
}
