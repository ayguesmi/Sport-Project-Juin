import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchForm: FormGroup;
  match: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addMatch() {
    var matchs = JSON.parse(localStorage.getItem("matchs") || '[]');
    this.match.id = generateId(matchs) + 1
    matchs.push(this.match);
    localStorage.setItem("matchs", JSON.stringify(matchs));
    this.router.navigate(["admin"]);
  }

}