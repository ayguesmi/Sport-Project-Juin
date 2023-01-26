import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  id: number;
  user: any = {};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get("id");
    this.user = searchObjectById(this.id, "users");
  }
}
