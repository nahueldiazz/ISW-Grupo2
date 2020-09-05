import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Moment } from 'moment';
import * as moment from 'moment';
import { Pedido } from '../model/pedido';
import { CustomValidators } from 'src/assets/shared/custom-validators';



@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css']
})
export class GenerateOrderComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public pedido = new Pedido();
  


  constructor(private _formBuilder: FormBuilder) { 
    this.firstFormGroup = this._formBuilder.group({
      city: [null, Validators.compose([ Validators.required])],
      neighborhood: [null,  Validators.compose([ Validators.required, CustomValidators.validText])],
      street: [null, Validators.compose([ Validators.required, CustomValidators.validText])],
      number: [null, Validators.compose([ Validators.required, CustomValidators.number])],
      floor: [null],
      appartament: [null],
      reference: [null, Validators.compose([ Validators.required, CustomValidators.validText])]
    });

    this.secondFormGroup = this._formBuilder.group({
      paymentMethod: ['', Validators.required],
      paymentAmount: [''],
      cardNumber: ['', Validators.compose([ CustomValidators.number, Validators.pattern("^4[0-9]{12}(?:[0-9]{3})?$")])],
      nameLastName:['', Validators.compose([ CustomValidators.validText])],
      expiredDate:[''],
      cvc:['', Validators.compose([ CustomValidators.number])]
    });

    this.thirdFormGroup = this._formBuilder.group({
      deliveryMethod: ['', Validators.required],
      dateDelivery: [''],
      hourDelivery: ['']

    });
  }

  ngOnInit() {
    
  }

  public confirmarCompra(){
    
  }

}
