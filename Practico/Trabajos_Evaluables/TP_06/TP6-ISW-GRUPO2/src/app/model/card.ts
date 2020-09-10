export class Card {
    numberCard: number;
    nameCard: string;
    expiredCar: string;
    cvc: number;
    constructor(
        numberCard?: number,
        nameCard?:string,
        expiredCar?:string,
        cvc?: number
        ) {
    this.numberCard = numberCard;
    this.nameCard = nameCard;
    this.expiredCar = expiredCar;
    this.cvc = cvc;
        
    }
}