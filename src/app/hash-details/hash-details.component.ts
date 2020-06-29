import { Component, OnInit, Input } from '@angular/core';

import {Hash} from '../hash';
import {HashService} from '../hash.service';

import { HashListComponent } from '../hash-list/hash-list.component';

@Component({
  selector: 'app-hash-details',
  templateUrl: './hash-details.component.html',
  styleUrls: ['./hash-details.component.css']
})

export class HashDetailsComponent implements OnInit {

  @Input() hash:Hash;

  constructor(private hashService:HashService, private listHash:HashListComponent) { }

  ngOnInit(): void {
  }



}
