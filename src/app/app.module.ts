import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashListComponent } from './hash-list/hash-list.component';
import { HashDetailsComponent } from './hash-details/hash-details.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { LoginService } from './login.service';
@NgModule({
  declarations: [
    AppComponent,
    HashListComponent,
    HashDetailsComponent,
    BuyerListComponent,
    BuyerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
