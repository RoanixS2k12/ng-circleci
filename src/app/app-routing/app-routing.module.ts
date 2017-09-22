import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { HeroListComponent }      from '../components/hero-list/hero-list.component';
import { SelectedHeroComponent }  from '../components/selected-hero/selected-hero.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: SelectedHeroComponent },
  { path: 'heroes',     component: HeroListComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}