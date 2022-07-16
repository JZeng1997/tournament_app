import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompetitorPageComponent } from './competitor-page/competitor-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompetitorListPageComponent } from './competitor-list-page/competitor-list-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { JudgingPageComponent } from './judging-page/judging-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CompetitorPageComponent,
    PageNotFoundComponent,
    CompetitorListPageComponent,
    AdminPageComponent,
    JudgingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
