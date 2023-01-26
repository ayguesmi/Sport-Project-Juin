import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  playerURL: string = "http://localhost:3000/players";
  constructor(private httpClient: HttpClient) { }
  displayAllPlayers() {
    return this.httpClient.get(this.playerURL);
  }
  displayPlayersById(id) {
    return this.httpClient.get(`${this.playerURL}/${id}`);
    // return this.httpClient.get(this.playerURL+'/'   +id);
  }
  deletePlayersById(id) {
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
  addPlayer(teamObj) {
    return this.httpClient.post(this.playerURL,teamObj);
  }
  editPlayer(teamObj){
    return this.httpClient.put(`${this.playerURL}/${teamObj.id}`,teamObj);
  }
}