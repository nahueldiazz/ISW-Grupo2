import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AppDateAdapter } from '../../model/format';
import { Moment} from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validacionFecha();
    
  }
  public validacionFecha(){
    var fechaComparacion = new Date();

    this.expiredDate.valueChanges.subscribe(valor =>{
      if (valor.date() < fechaComparacion.getDate()) {
        this.expiredDate.setValue(null);
      }else{
        
      }
    });
  }

  onPaymentMethodChange(event: MatRadioChange): void {
    this.paymentMethodSelected = event.value;
    this.paymentMethod.setValue(event.value);
  }

  public get paymentMethod(): FormControl {
    return this.stepForm.get('paymentMethod') as FormControl;
  }

  
  public get expiredDate(): FormControl {
    return this.stepForm.get('expiredDate') as FormControl;
  }
  public get cardNumber(): FormControl {
    return this.stepForm.get('cardNumber') as FormControl;
  }



  chosenYearHandler(normalizedYear: Moment) {
    const val = this.moment();
    this.expiredDate.setValue(this.moment());
    const ctrlValue = this.expiredDate.value;
    ctrlValue.year(normalizedYear.year());
    this.expiredDate.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    this.expiredDate.setValue(this.moment());
    const ctrlValue = this.expiredDate.value;
    ctrlValue.month(normalizedMonth.month());
    this.expiredDate.setValue(ctrlValue);
    datepicker.close();
    var fecha = this.expiredDate.value;
    var mes =fecha.month();
    var anio = fecha.year();
  }

}
