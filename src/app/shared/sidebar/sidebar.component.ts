import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isLoggedIn = false;


  constructor(private _service: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._service.checkCredentials();
  }

}
