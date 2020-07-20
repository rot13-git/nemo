import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import {Hash} from '../hash';
import {HashService} from '../hash.service';
import { BuyerService } from '../buyer.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-hash-list',
  templateUrl: './hash-list.component.html',
  styleUrls: ['./hash-list.component.css']
})
export class HashListComponent implements OnInit {
  hashes: Hash[];
  @Input() utente:boolean;
  public datasource: any;
  public pageIndex=0;
  public pageSize=10;
  public length=100;
  public pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private buyerService:BuyerService) { }

  refresh(): void{
    this.getResource();
  }
  ngOnInit(): void {
    this.getResource();
  }
  reloadData(event?:PageEvent): void{
      console.log(event);
      this.pageSize=event.pageSize;
      this.pageIndex=event.pageIndex;
      this.getResource();
  }
  getResource(){
    console.log(this.pageSize);
    this.buyerService.getUserHashes(this.pageSize,this.pageIndex).subscribe(hashes => this.hashes = hashes);
    this.datasource=this.hashes;
  }
}
