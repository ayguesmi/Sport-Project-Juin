import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchObjectById } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  match: any;
  id: number;
  url: string;
  constructor(private activateRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.id = + this.activateRoute.snapshot.paramMap.get("id");
    // this.url = this.router.url ;
    this.match = searchObjectById(this.id, "matchs");
  }
}
