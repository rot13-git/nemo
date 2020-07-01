import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Buyer} from '../buyer';
import {BuyerService} from '../buyer.service';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {
  buyers: Buyer[];
  constructor(private buyerService:BuyerService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.buyerService.getBuyersList().subscribe(buyers => this.buyers = buyers);
  }

}
