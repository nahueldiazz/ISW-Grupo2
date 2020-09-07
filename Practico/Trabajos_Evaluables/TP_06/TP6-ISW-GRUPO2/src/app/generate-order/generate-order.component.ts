import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Moment } from 'moment';
import * as moment from 'moment';
import { Pedido } from '../model/pedido';
import { CustomValidators } from 'src/assets/shared/custom-validators';
import { MatDialog } from '@angular/material/dialog';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { Cart } from '../model/cart';
import { MatStep, MatStepper } from '@angular/material/stepper';



@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css']
})
export class GenerateOrderComponent implements OnInit {

  @ViewChild(MatStepper) stepper: MatStepper;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public noConfirmo = true;
  @Input() carrito: Cart;

  constructor(private _formBuilder: FormBuilder,
              private dialog: MatDialog) { 
    this.firstFormGroup = this._formBuilder.group({
      city: [null, Validators.compose([ Validators.required])],
      neighborhood: [null,  Validators.compose([ Validators.required, CustomValidators.validText])],
      street: [null, Validators.compose([ Validators.required, CustomValidators.validText])],
      number: [null, Validators.compose([ Validators.required, CustomValidators.number])],
      floor: [null],
      appartament: [null],
      reference: [null, Validators.compose([ CustomValidators.validTextAndNumbers])]
    });

    this.secondFormGroup = this._formBuilder.group({
      paymentMethod: ['', Validators.required],
      paymentAmount: ['', Validators.required],
      cardNumber: ['', Validators.compose([ Validators.required, CustomValidators.number, CustomValidators.validVisa])],
      nameLastName:['', Validators.compose([ CustomValidators.validText])],
      expiredDate:[''],
      cvc:['', Validators.compose([ CustomValidators.number, Validators.maxLength(3)])]
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
    const hayItemsVendedor1 = this.carrito.productos.some(i => i.idVendedor === 1);
    const hayItemsVendedor2 = this.carrito.productos.some(i => i.idVendedor === 2);
    let cantidadDeVendedores: number;

    if (hayItemsVendedor1 && hayItemsVendedor2) {cantidadDeVendedores = 2; }
    else if (hayItemsVendedor1 || hayItemsVendedor2) {cantidadDeVendedores = 1; }
    else {cantidadDeVendedores = 0; }

    if (cantidadDeVendedores === 2 || cantidadDeVendedores === 0) {
      const dialogRef = this.dialog.open(InfoModalComponent, {
        width: '250px',
        data: cantidadDeVendedores
      });
      this.noConfirmo = true;
    } else {
      this.noConfirmo = false;
      this.stepper.next();
    }
  }

}
