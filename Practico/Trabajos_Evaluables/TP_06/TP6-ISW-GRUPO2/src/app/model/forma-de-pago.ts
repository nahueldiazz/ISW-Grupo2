import { Card } from "./card";

export class FormaPago {
    paymentCash: boolean;
    paymentCard: boolean;
    paymentAmount: string;
    car: Card;
    

    constructor(
        paymentCash?:boolean,
        paymentCard?:boolean,
        paymentAmount?:string,
        car?:Card
    ) {
    this.paymentCash = paymentCash;
    this.paymentCard = paymentCard;
    this.paymentAmount = paymentAmount;
    this.car = car;
        
    }
}