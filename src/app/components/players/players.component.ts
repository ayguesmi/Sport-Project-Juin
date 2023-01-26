import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
palyers: any = [];
  constructor() { }
  players = JSON.parse(localStorage.getItem("players") || "[]")
  ngOnInit() {
  }

}
