import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchForm: FormGroup;
  match: any = [];
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get("id");
    this.match = searchObjectById(this.id, "matchs");
  }
  validateEdit() {
    let matchs = JSON.parse(localStorage.getItem("matchs") || "[]");
    matchs.push(this.match);
    localStorage.setItem("matchs", JSON.stringify(matchs));
    this.router.navigate(["admin"]);
  }
}
