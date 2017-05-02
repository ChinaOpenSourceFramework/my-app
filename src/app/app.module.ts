import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerodetailComponent } from './herodetail/herodetail.component';

@NgModule({
  declarations: [
    AppComponent ,
    HeroesComponent,
    DashboardComponent,
    HerodetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
        {
            path:'heroes',
            component:HeroesComponent
        },
        {
            path:'dashboard',
            component:DashboardComponent
        },
        {
            path: 'detail/:id',
            component: HerodetailComponent
        },
        {
            path:'',
            redirectTo:'/dashboard',
            pathMatch:'full'
        }
    ])
  ],
  providers: [
    HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
