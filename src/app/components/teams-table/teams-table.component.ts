import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || '[]');
  }
  delete(id) {
    deleteObject(id, "teams");
    this.teams = JSON.parse(localStorage.getItem("teams") || '[]');
  }
  display(id){
    this.router.navigate([`displayTeam/${id}`])
  }
  edit(id){
this.router.navigate([`editTeam/${id}`])
  }
}
