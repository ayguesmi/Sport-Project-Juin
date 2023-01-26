import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
  matchs: any = [];
  constructor() { };

  ngOnInit() {
    // this.matchs = [
    //   { id: 1, stadium: "stadium1", scoreOne: 1, scoreTwo: 2, teamOne: "T1", teamTwo: "T2", imgOne: "", imgTwo: "" },
    //   { id: 2, stadium: "stadium2", scoreOne: 3, scoreTwo: 4, teamOne: "T1", teamTwo: "T2", imgOne: "", imgTwo: "" },
    //   { id: 3, stadium: "stadium3", scoreOne: 5, scoreTwo: 6, teamOne: "T1", teamTwo: "T2", imgOne: "", imgTwo: "" },
    //   { id: 4, stadium: "stadium4", scoreOne: 6, scoreTwo: 5, teamOne: "T1", teamTwo: "T2", imgOne: "", imgTwo: "" },
    // ];
    this.matchs = JSON.parse(localStorage.getItem("matchs" || "[]"));
  };
};
