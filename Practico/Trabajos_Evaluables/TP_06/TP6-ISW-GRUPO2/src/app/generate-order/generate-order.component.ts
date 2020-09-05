import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      floor: [null, Validators.required],
      appartament: [null, Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      paymentMethod: ['', Validators.required],
      paymentAmount: [''],
      cardNumber: [''],
      cardSecurityCode: ['']
    });

    this.thirdFormGroup = this._formBuilder.group({
      deliveryMethod: ['', Validators.required],
      time: [''],
    });
  }

  ngOnInit() {
    
  }

}
