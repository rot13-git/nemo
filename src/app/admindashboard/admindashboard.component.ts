import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HashService } from '../hash.service';
import { Hash } from '../hash';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  hashes: Hash[];
  hash:Hash;
  public isLoggedIn = false;

  ngOnInit(): void {
  }

}
