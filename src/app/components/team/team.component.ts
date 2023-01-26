import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() teamInput: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  diplayTeam() {
    this.router.navigate([`displayTeam/${this.teamInput.id}`]);
  }
}
