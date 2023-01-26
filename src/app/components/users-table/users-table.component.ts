import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { deleteObject } from 'src/app/ganeralFunction/generateid';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: any = [];
  constructor(private router: Router) { }
  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }
  displayUser(id){
    this.router.navigate([`displayUser/${id}`]);
  } 
  delete(id) {
    deleteObject(id, "users");
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  };
  editUser(id){
    this.router.navigate([`editUser/${id}`]);
  }
};
