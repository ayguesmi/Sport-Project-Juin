import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  teamURL: string = "http://localhost:3000/teams";
  constructor(private httpClient: HttpClient) { }
  displayAllTeams() {
    return this.httpClient.get(this.teamURL);
  }
  displayTeamById(id) {
    return this.httpClient.get(`${this.teamURL}/${id}`);
    // return this.httpClient.get(this.teamURL+'/'   +id);
  }
  deleteTeamById(id) {
    return this.httpClient.delete(`${this.teamURL}/${id}`);
  }
  addTeam(teamObj) {
    return this.httpClient.post(this.teamURL,teamObj);
  }
  editTeam(teamObj){
    return this.httpClient.put(`${this.teamURL}/${teamObj.id}`,teamObj);
  }
}
