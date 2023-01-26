import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  userURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }

  //user: firstName , lastName , email ,...etc
  signup(user) {
    return this.httpClient.post(`${this.userURL}/signup`,user);
  }
    //obj: email , pwd
  login(obj) {
    return this.httpClient.post(`${this.userURL}/login`,obj);
  }
  displayProfile(id) {
    return this.httpClient.get(`${this.userURL}/${id}`);
  }
  editProfile(user){
    return this.httpClient.put(`${this.userURL}/${user.id}`,user);
  }
}
