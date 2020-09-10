import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AppDateAdapter } from '../../model/format';
import { Moment} from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { InfoModalComponent } from 'src/app/info-modal/info-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CustomValidators } from 'src/assets/shared/custom-validators';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-step-payment',
  templateUrl: './step-payment.component.html',
  styleUrls: ['./step-payment.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class StepPaymentComponent implements OnInit {

  @Input() stepForm: FormGroup;

  paymentMethodsAvailable: string[] = ['Efectivo', 'Visa'];
  paymentMethodSelected: string;
   public moment = _moment;

   public mes = 0;
   public anio = 0;
  constructor(private fb: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.validacionFormaPago();
    
  }

  public validacionFormaPago(){
    this.paymentMethod.valueChanges.subscribe(valor=>{
      if (valor == 'Efectivo'){
        this.paymentAmount.setValidators([Validators.required, CustomValidators.decimalNumberWithTwoDigits]);
  
        this.cardNumber.clearValidators();
        this.cardNumber.updateValueAndValidity();
        this.nameLastName.clearValidators();
        this.nameLastName.updateValueAndValidity();
        this.cvc.clearValidators();
        this.cvc.updateValueAndValidity();
        this.expiredDate.clearValidators();
        this.expiredDate.updateValueAndValidity();


      }else{
        this.paymentAmount.clearValidators();
        this.paymentAmount.updateValueAndValidity();
        this.cardNumber.setValidators(Validators.compose([Validators.required, CustomValidators.validVisa,  Validators.maxLength(16)]));
        this.nameLastName.setValidators([Validators.required, CustomValidators.validText]);
        this.cvc.setValidators([Validators.required, CustomValidators.number, Validators.maxLength(3), Validators.minLength(3)]);
        this.expiredDate.setValidators(Validators.required);

      }
    })
  }


  onPaymentMethodChange(event: MatRadioChange): void {
    this.paymentMethodSelected = event.value;
    this.paymentMethod.setValue(event.value);
  }

  public get paymentMethod(): FormControl {
    return this.stepForm.get('paymentMethod') as FormControl;
  }

  public get paymentAmount(): FormControl {
    return this.stepForm.get('paymentAmount') as FormControl;
  }
  
  public get expiredDate(): FormControl {
    return this.stepForm.get('expiredDate') as FormControl;
  }
  public get cardNumber(): FormControl {
    return this.stepForm.get('cardNumber') as FormControl;
  }
  public get nameLastName(): FormControl {
    return this.stepForm.get('nameLastName') as FormControl;
  }
  public get cvc(): FormControl {
    return this.stepForm.get('cvc') as FormControl;
  }



  chosenYearHandler(normalizedYear: Moment) {
    const val = this.moment();
    this.expiredDate.setValue(this.moment());
    const ctrlValue = this.expiredDate.value;
    ctrlValue.year(normalizedYear.year());
    this.expiredDate.setValue(ctrlValue);
    var fecha= this.expiredDate.value;
    this.anio = fecha.year();
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    this.expiredDate.setValue(this.moment());
    const ctrlValue = this.expiredDate.value;
    ctrlValue.month(normalizedMonth.month());
    ctrlValue.year(normalizedMonth.year());

    this.expiredDate.setValue(ctrlValue);
    datepicker.close();

    var fecha = this.expiredDate.value;
    this.mes = fecha.month();
    
    var fechaVencimiento = new Date();
    var fechaHoy = new Date();
    fechaVencimiento.setFullYear(this.anio,this.mes,1);
    if (fechaVencimiento < fechaHoy) {
      this.dialog.open(InfoModalComponent, {
        width: '250px',
        data: 3
      });
      this.expiredDate.setValue(null);
    }

  }

}
