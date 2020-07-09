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
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
@NgModule({
  declarations: [
    AppComponent,
    HashListComponent,
    HashDetailsComponent,
    BuyerListComponent,
    BuyerDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
