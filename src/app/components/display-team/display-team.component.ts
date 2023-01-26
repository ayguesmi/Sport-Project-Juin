import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
  team: any = {};
  id: number;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get("id");
    this.team = searchObjectById(this.id, "teams");
  }
}
