import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { deleteObject, searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  signupForm: FormGroup;
  id: number;
  user: any = {};
  constructor(private formBilder: FormBuilder, private activatedroute: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.id = + this.activatedroute.snapshot.paramMap.get("id");
    this.user = searchObjectById(this.id, "users");

    // this.signupForm = this.formBilder.group({
    //   firstName: [`${this.user.firstName}`, [Validators.required, Validators.minLength(3)]],
    //   lastName: [`${this.user.lastName}`, [Validators.required, Validators.minLength(5)]],
    //   email: [`${this.user.email}`, [Validators.required, Validators.email]],
    //   pwd: [`${this.user.pwd}`, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[!@#\$&*~]).{6,12}')]],
    //   confirmPwd: [`${this.user.confirmPwd}`, Validators.required]
    // })
    this.signupForm = this.formBilder.group(this.user);
  }
  validateEdit() {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    this.user = this.signupForm.value;
   for (let i = 0; i < users.length; i++) {
      if (users[i].id == this.id) {
        users[i] = this.user;
        break;
      }
   }
    localStorage.setItem("users", JSON.stringify(users));
    this.router.navigate(['admin']);
  }
}
