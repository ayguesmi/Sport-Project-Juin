import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm: FormGroup;
  player: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addPlayer() {
    var players = JSON.parse(localStorage.getItem("players") || "[]");
    this.player.id = generateId(players) + 1
    players.push(this.player)
    localStorage.setItem("players", JSON.stringify(players))
    this.router.navigate(["admin"]);
  };

}

