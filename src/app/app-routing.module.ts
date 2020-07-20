import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HashListComponent} from './hash-list/hash-list.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  { path: '',component:HomeComponentComponent},
  { path: 'user', component: UserdashboardComponent},
  { path: 'admin',component: AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
