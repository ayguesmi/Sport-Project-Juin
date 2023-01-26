import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matchs: any[];
  constructor() { }

  ngOnInit() {
    this.matchs = JSON.parse(localStorage.getItem("matchs") || "[]");
  }
}
