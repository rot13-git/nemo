import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Hash} from '../hash';
import {HashService} from '../hash.service';

@Component({
  selector: 'app-hash-list',
  templateUrl: './hash-list.component.html',
  styleUrls: ['./hash-list.component.css']
})
export class HashListComponent implements OnInit {
  hashes: Hash[];
  constructor(private hashService:HashService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.hashService.getHashesList().subscribe(hashes => this.hashes = hashes);
  }

}
