import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  player: any = {};
  id: number;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get("id");
    this.player = searchObjectById(this.id, "players");
  }
}
