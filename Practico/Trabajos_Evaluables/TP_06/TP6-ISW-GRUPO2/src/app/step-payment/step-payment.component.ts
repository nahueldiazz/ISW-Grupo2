import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-step-payment',
  templateUrl: './step-payment.component.html',
  styleUrls: ['./step-payment.component.css']
})
export class StepPaymentComponent implements OnInit {

  @Input() stepForm: FormGroup;

  paymentMethodsAvailable: string[] = ['Efectivo', 'Visa'];
  paymentMethodSelected: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onPaymentMethodChange(event: MatRadioChange): void {
    this.paymentMethodSelected = event.value;
    this.paymentMethod.setValue(event.value);
  }

  public get paymentMethod(): FormControl {
    return this.stepForm.get('paymentMethod') as FormControl;
  }

}
