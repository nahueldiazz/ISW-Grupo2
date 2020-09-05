import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Moment } from 'moment';
import * as moment from 'moment';


@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css']
})
export class GenerateOrderComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) { 
    this.firstFormGroup = this._formBuilder.group({
      city: [null, Validators.required],
      neighborhood: [null, Validators.required],
      street: [null, Validators.required],
      number: [null, Validators.required],
      floor: [null],
      appartament: [null],
      reference: [null]
    });

    this.secondFormGroup = this._formBuilder.group({
      paymentMethod: ['', Validators.required],
      paymentAmount: [''],
      cardNumber: [''],
      nameLastName:[''],
      expiredDate:[''],
      cvc:['']
    });

    this.thirdFormGroup = this._formBuilder.group({
      deliveryMethod: ['', Validators.required],
      dateDelivery: [''],
      hourDelivery: ['']

    });
  }

  ngOnInit() {
    
  }

}
