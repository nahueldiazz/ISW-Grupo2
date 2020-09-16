import { Producto } from './producto';

export class Cart{
    public productos: Producto[];

    constructor() {
        this.productos = [];
    }
}

