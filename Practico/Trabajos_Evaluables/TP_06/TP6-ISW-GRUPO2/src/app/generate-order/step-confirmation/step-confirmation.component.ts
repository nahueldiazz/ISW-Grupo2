import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { CustomValidators } from 'src/assets/shared/custom-validators';

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
  public get dateDelivery(): FormControl {
    return this.stepForm.get('dateDelivery') as FormControl;
  }

  public validacionFormaPago() {
    this.deliveryMethod.valueChanges.subscribe(valor => {
      if (valor == 'Asignar fecha y hora de entrega') {

        this.dateDelivery.setValidators(Validators.compose([Validators.required, CustomValidators.date]));

      } else {
        this.dateDelivery.clearValidators();
        this.dateDelivery.updateValueAndValidity();

      }
    })
  }


}
