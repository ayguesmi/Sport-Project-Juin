import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchsComponent } from './components/matchs/matchs.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { TeamsComponent } from './components/teams/teams.component';


const routes: Routes = [
  //http://localhost:4200
  { path: "", component: HomeComponent },
  //http://localhost:4200/login
  { path: "login", component: LoginComponent },
  //http://localhost:4200/signup
  { path: "signup", component: SignupComponent },
  { path: "addmatch", component: AddMatchComponent },
  { path: "addteam", component: AddTeamComponent },
  { path: "admin", component: AdminComponent },
  { path: "matchs", component: MatchsComponent },
  { path: "addplayer", component: AddPlayerComponent },
    //http://localhost:4200/displayMatch/variable
  { path: "displayMatch/:id", component: DisplayMatchComponent },
  { path: "displayUser/:id", component: DisplayUserComponent },
  { path: "editUser/:id", component: EditUserComponent },
  { path: "displayTeam/:id", component: DisplayTeamComponent },
  { path: "editTeam/:id", component: EditTeamComponent },
  { path: "teams", component: TeamsComponent },
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "players", component: PlayersComponent },
  { path: "displayPlayer/:id", component: DisplayPlayerComponent },
  { path: "editPlayer/:id", component: EditPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
