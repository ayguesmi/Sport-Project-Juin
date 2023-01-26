import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute, private router: Router) { }
  teamForm: NgForm;
  team: any = {};
  id: number;

  ngOnInit() {
    this.id = + this.activatedroute.snapshot.paramMap.get("id");
    this.team = searchObjectById(this.id, "teams")
  }
  validateAddTeam() {
    let teams = JSON.parse(localStorage.getItem("teams") || "[]");
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id == this.id) {
        teams[i] = this.team
        break;
      }
    }
    localStorage.setItem("teams", JSON.stringify(teams));
    this.router.navigate(['admin']);
  }
}
