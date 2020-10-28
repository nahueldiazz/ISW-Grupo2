import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


import { Ciudad } from '../../model/ciudad';

@Component({
  selector: 'app-step-address',
  templateUrl: './step-address.component.html',
  styleUrls: ['./step-address.component.css'],

})
export class StepAddressComponent implements OnInit {

  @Input() stepForm: FormGroup;

  public ciudad:Ciudad[]=[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cargarCiudad();
  }

  public cargarCiudad(){
    this.ciudad.push(new Ciudad (0,'Capital'));
    this.ciudad.push(new Ciudad (1,'Marcos Juárez'));
    this.ciudad.push(new Ciudad (2,'Arroyito'));
    this.ciudad.push(new Ciudad (3,'Carlos Paz'));
    this.ciudad.push(new Ciudad (4,'Villa María'));
    this.ciudad.push(new Ciudad (5,'Río Cuarto'));
    this.ciudad.push(new Ciudad (6,'Cruz del Eje'));
    this.ciudad.push(new Ciudad (7,'Deán Funes'));
    this.ciudad.push(new Ciudad (8,'San Francisco'));
    this.ciudad.push(new Ciudad (9,'Cosquín'));
  }

  public get city(): FormControl {
    return this.stepForm.get('city') as FormControl;
  }

  public get street(): FormControl {
    return this.stepForm.get('street') as FormControl;
  }

  public get number(): FormControl {
    return this.stepForm.get('number') as FormControl;
  }
  public get reference(): FormControl {
    return this.stepForm.get('reference') as FormControl;
  }

}
