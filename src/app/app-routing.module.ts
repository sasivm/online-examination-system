import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LeftTempComponent } from './login/left-temp/left-temp.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, to view working scr
  { path: 'login', component: LeftTempComponent },
  { path: 'singup', component: LeftTempComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent }
  // { path: '**', component: LeftTempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
  LeftTempComponent, LeftTempComponent, ProfileComponent, DashboardComponent,
  CoursesComponent
];
