export class Producto{
    idVendedor: number;
    descripcion: string;

    constructor(idVendedor: number, descripcion: string) {
        this.idVendedor = idVendedor;
        this.descripcion = descripcion;
    }
}