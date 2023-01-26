import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject } from 'src/app/ganeralFunction/generateid';
import { DisplayMatchComponent } from '../display-match/display-match.component';

@Component({
  selector: 'app-matchs-table',
  templateUrl: './matchs-table.component.html',
  styleUrls: ['./matchs-table.component.css']
})
export class MatchsTableComponent implements OnInit {
  matchs: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.matchs = JSON.parse(localStorage.getItem("matchs") || '[]');
  }
  display(id) {
    this.router.navigate([`displayMatch/${id}`]);
    // this.router.navigate(["displayMatch/" + id]);
  };
  edit(id) {
    this.router.navigate([`editMatch/${id}`])
  }
  delete(id) {
    deleteObject(id, "matchs");
    this.matchs = JSON.parse(localStorage.getItem("matchs") || '[]');
  };
}
