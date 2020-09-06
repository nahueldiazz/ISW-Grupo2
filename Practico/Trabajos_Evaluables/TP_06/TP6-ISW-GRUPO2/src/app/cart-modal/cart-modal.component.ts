import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Cart } from '../model/cart';

export interface CartItem {
  description: string;
  id: string;
}

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {

  public vendedor1 = [];
  public vendedor2 = [];

  constructor(
    public dialogRef: MatDialogRef<CartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cart) {
      this.vendedor1 = data.productos.filter(i => i.idVendedor === 1);
      this.vendedor2 = data.productos.filter(i => i.idVendedor === 2);
    }

  closeModal(): void {
    this.data.productos = this.vendedor1;
    this.vendedor2.forEach(i => this.data.productos.push(i));
    this.dialogRef.close(this.data);
  }

  public deleteItem(itemId: number, numeroVendedor: number): void {
    if (numeroVendedor === 1) {this.vendedor1 = this.vendedor1.filter((i) => i.descripcion !== itemId); }
    else {this.vendedor2 = this.vendedor2.filter((i) => i.descripcion !== itemId); }
  }
}
