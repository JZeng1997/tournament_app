import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CompetitorPageComponent } from './competitor-page/competitor-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompetitorListPageComponent } from './competitor-list-page/competitor-list-page.component';
import { JudgingPageComponent } from './judging-page/judging-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'competitor', component: CompetitorPageComponent },
  { path: 'competitors', component: CompetitorListPageComponent },
  { path: 'judging', component: JudgingPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
