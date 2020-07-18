import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {

    const reg = "^(http:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";

    this.form = fb.group({
      url: ['', [Validators.required, Validators.pattern(reg)]]
    })
  }



  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }

}
