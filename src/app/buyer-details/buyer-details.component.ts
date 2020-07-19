import { Component, OnInit, Input } from '@angular/core';

import {Buyer} from '../buyer';
import {BuyerService} from '../buyer.service';



@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})

export class BuyerDetailsComponent implements OnInit {

  buyer:Buyer;

  constructor(private buyerService:BuyerService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.buyerService.getBuyer().subscribe(buyer => this.buyer = buyer);
  }
}
