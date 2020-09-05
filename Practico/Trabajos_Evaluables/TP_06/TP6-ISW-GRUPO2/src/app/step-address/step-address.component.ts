import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-step-address',
  templateUrl: './step-address.component.html',
  styleUrls: ['./step-address.component.css']
})
export class StepAddressComponent implements OnInit {

  @Input() stepForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public get city(): FormControl {
    return this.stepForm.get('city') as FormControl;
  }

  public get neighborhood(): FormControl {
    return this.stepForm.get('neighborhood') as FormControl;
  }

  public get street(): FormControl {
    return this.stepForm.get('street') as FormControl;
  }

  public get number(): FormControl {
    return this.stepForm.get('number') as FormControl;
  }
}
