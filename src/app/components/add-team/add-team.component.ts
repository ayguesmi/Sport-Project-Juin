import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { generateId } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm : FormGroup;
  team : any = {};
  constructor(private router:Router) { }

  ngOnInit() {
  }

  addTeam(){
var teams = JSON.parse(localStorage.getItem("teams") || '[]');
this.team.id = generateId(teams)+1
teams.push(this.team);
localStorage.setItem("teams",JSON.stringify(teams));
this.router.navigate(["admin"]);
  }
}
