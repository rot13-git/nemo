import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HashListComponent} from './hash-list/hash-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
