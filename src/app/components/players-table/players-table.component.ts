import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem("players") || '[]');
  }
  display(id) {
    this.router.navigate([`displayPlayer/${id}`])
  }
  edit(id) {
    this.router.navigate([`editPlayer/${id}`])
  }
  delete(id) {
    deleteObject(id, "players");
    this.players = JSON.parse(localStorage.getItem("players") || "[]");
  }
}
