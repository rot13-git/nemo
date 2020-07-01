import { Component, OnInit, Input } from '@angular/core';

import {Buyer} from '../buyer';
import {BuyerService} from '../buyer.service';

import { BuyerListComponent } from '../buyer-list/buyer-list.component';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})

export class BuyerDetailsComponent implements OnInit {

  @Input() buyer:Buyer;

  constructor(private buyerService:BuyerService, private listBuyer:BuyerListComponent) { }

  ngOnInit(): void {
  }
}
