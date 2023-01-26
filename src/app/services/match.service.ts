import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL: string = "http://localhost:3000/matches";
  constructor(private httpClient: HttpClient) { }
  displayAllMatches() {
    return this.httpClient.get(this.matchURL);
  }
  displayMatchById(id) {
    return this.httpClient.get(`${this.matchURL}/${id}`);
    // return this.httpClient.get(this.matchURL+'/'   +id);
  }
  deleteMatchById(id) {
    return this.httpClient.delete(`${this.matchURL}/${id}`);
  }
  addMatch(matchObj) {
    return this.httpClient.post(this.matchURL,matchObj);
  }
  editMatch(matchObj){
    return this.httpClient.put(`${this.matchURL}/${matchObj.id}`,matchObj);
  }
}

