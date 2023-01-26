import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ArticleComponent } from './components/article/article.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchsComponent } from './components/matchs/matchs.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { MatchsTableComponent } from './components/matchs-table/matchs-table.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayersComponent } from './components/players/players.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import {HttpClientModule } from "@angular/common/http" ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    RankingComponent,
    VideosComponent,
    BlogComponent,
    NewsItemComponent,
    ArticleComponent,
    SignupComponent,
    AddMatchComponent,
    AdminComponent,
    AddTeamComponent,
    BannerComponent,
    MatchsComponent,
    AddPlayerComponent,
    UsersTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    MatchsTableComponent,
    DisplayMatchComponent,
    DisplayUserComponent,
    EditUserComponent,
    DisplayTeamComponent,
    EditTeamComponent,
    AsterixPipe,
    TeamsComponent,
    TeamComponent,
    EditMatchComponent,
    PlayersComponent,
    SinglePlayerComponent,
    DisplayPlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
