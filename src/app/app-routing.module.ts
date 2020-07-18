import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HashListComponent} from './hash-list/hash-list.component';
import {BuyerListComponent} from './buyer-list/buyer-list.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: '',component:HomeComponentComponent},
  { path: 'user', component: BuyerDetailsComponent},
  { path: 'hash', component: HashListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
