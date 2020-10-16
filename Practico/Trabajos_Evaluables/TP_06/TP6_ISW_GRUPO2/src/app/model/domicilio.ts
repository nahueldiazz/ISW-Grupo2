export class Domicilio{
    city: number;
    neighborhood: string;
    street: string;
    number: string;
    floor: string;
    appartament: string;

    constructor(city?:number,
                neighborhood?:string,
                street?:string,
                number?:string,
                floor?:string,
                appartament?:string){

    this.city = city;
    this.neighborhood = neighborhood;
    this.street = street;
    this.number = number;
    this.floor = floor;
    this.appartament = appartament;
     }
}