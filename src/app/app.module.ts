import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { AppRoutingModule }     from './app-routing.module';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent ,
    HeroesComponent,
    DashboardComponent,
    HerodetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
