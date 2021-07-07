import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: NewDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
