import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-step-confirmation',
  templateUrl: './step-confirmation.component.html',
  styleUrls: ['./step-confirmation.component.css']
})
export class StepConfirmationComponent implements OnInit {

  deliveryMethodsAvailable: string[] = ['Lo antes posible', 'Asignar fecha y hora de entrega'];
  deliveryMethodSelected: string;

  @Input() stepForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDeliveryMethodChange(event: MatRadioChange): void {
    this.deliveryMethodSelected = event.value;
    this.deliveryMethod.setValue(event.value);
  }

  public get deliveryMethod(): FormControl {
    return this.stepForm.get('deliveryMethod') as FormControl;
  }

}
