import { AboutComponent } from './about/about.component';
import { TravelComponent } from './travel-info/travel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'travel', component:TravelComponent},
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo: '/travel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
