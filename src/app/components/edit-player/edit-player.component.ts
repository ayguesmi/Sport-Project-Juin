import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm: FormGroup;
  player: any = {};
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get("id");
    this.player = searchObjectById(this.id, "players")
  }
  validateEdit() {
    let players = JSON.parse(localStorage.getItem("players") || "[]")
    for (let i = 0; i < players.length; i++) {
      if (players[i].id == this.id) {
        players[i] = this.player
      }
    }
    localStorage.setItem("players", JSON.stringify(players))
    this.router.navigate(["admin"]);
  }
}
