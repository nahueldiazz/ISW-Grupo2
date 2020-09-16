import { Domicilio } from './domicilio';
import { FormaPago } from './forma-de-pago';
import { Entrega } from './entrega';

export class Pedido {
    id: number;
    address: Domicilio;
    payment: FormaPago;
    delivery: Entrega;

    constructor(
        id?: number,
        address?: Domicilio,
        payment?: FormaPago,
        delivery?: Entrega
    ) {
    this.id = id;
    this.address = address;
    this.payment = payment;
    this.delivery = delivery;
        
    }
}