export class Entrega {
    inmmediaty: boolean;
    dateHour: boolean;
    date: string;
    hours: string;
    constructor(
        inmmediaty?: boolean,
        dateHour?: boolean,
        date?: string,
        hours?: string
    ) {
    this.inmmediaty = inmmediaty;
    this.dateHour = dateHour;
    this.hours = hours;
    this.date = date        
    }
}