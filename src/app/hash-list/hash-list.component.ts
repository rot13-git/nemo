import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Hash} from '../hash';
import {HashService} from '../hash.service';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-hash-list',
  templateUrl: './hash-list.component.html',
  styleUrls: ['./hash-list.component.css']
})
export class HashListComponent implements OnInit {
  hashes: Hash[];
  constructor(private buyerService:BuyerService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.buyerService.getUserHashes().subscribe(hashes => this.hashes = hashes);
  }

}
