import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { CustomValidators } from 'src/assets/shared/custom-validators';
import { InfoModalComponent } from 'src/app/info-modal/info-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-step-confirmation',
  templateUrl: './step-confirmation.component.html',
  styleUrls: ['./step-confirmation.component.css']
})
export class StepConfirmationComponent implements OnInit {

  deliveryMethodsAvailable: string[] = ['Lo antes posible', 'Asignar fecha y hora de entrega'];
  deliveryMethodSelected: string;

  @Input() stepForm: FormGroup;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.controlFecha();
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
        this.dateDelivery.setValue(null);

      } else {
        this.dateDelivery.clearValidators();
        this.dateDelivery.updateValueAndValidity();

      }
    })
  }


  public controlFecha() {

    var fechaHoy = new Date();
    var ban = true;
    this.dateDelivery.valueChanges.subscribe(valor => {

      var fechaIngresada = valor ? new Date(valor): ban = false;
      if (ban && fechaIngresada < fechaHoy) {
        this.dialog.open(InfoModalComponent, {
          width: '250px',
          data: 4
          
        })
        this.dateDelivery.setValue(null);
      }else{
        ban=true;
      }

    });
  }


}
