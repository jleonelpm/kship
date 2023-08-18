export class Producto {
  id? : string;
  codigo? : string;
  nombre? : string; // string is shorthand for {type: string}
  descripcion? : string;
  precio_costo? : Number;
  precio_mayoreo? : Number;
  precio? : Number; /* Precio de Venta */
}
