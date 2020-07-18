import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HashService } from '../hash.service';
import { Hash } from '../hash';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent implements OnInit {
  hash:Hash;
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private HashService:HashService) {

    const reg = "^(http:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";

    this.form = fb.group({
      url: ['', [Validators.required, Validators.pattern(reg)]]
    })
  }



  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value.url);
    this.HashService.createNewHash(this.form.value.url).subscribe(hash => this.hash = hash);
  }

  ngOnInit(): void {
  }

}
