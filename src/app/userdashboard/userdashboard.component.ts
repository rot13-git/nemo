import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HashService } from '../hash.service';
import { Hash } from '../hash';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  hash:Hash;
  public isLoggedIn = false;
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private hashService:HashService,private _service: LoginService,private userService:BuyerService) {
    const reg = "^(http(s)?:\/\/(www\.)?)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";

    this.form = fb.group({
      url: ['', [Validators.required, Validators.pattern(reg)]],
      short:['',[]]
    })
  }
  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value)
    if(this.form.value.short != ""){
      this.userService.createNewHashCustom(this.form.value.url,this.form.value.short).subscribe(hash => this.hash=hash);
    }
    else{
      this.userService.createNewHash(this.form.value.url).subscribe(hash => this.hash = hash);
    }
  }
  ngOnInit(): void {
    this.isLoggedIn = this._service.checkCredentials();
    let i = window.location.href.indexOf('code');
    if(!this.isLoggedIn && i != -1) {
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }
  login() {
    window.location.href =
      "http://localhost:8080/auth/realms/Nemo-Realme/protocol/openid-connect/auth?response_type=code&scope=openid&client_id=" +
         this._service.clientId + '&redirect_uri='+ this._service.redirectUri;
  }

}
