export class Producto {
  producto? : string;
  precio? : string;
  cantidad? : string;
}

export class Cliente {
  nombre? : string;
  apellido? : string;
  email? : string;
  calle? : string;
  numero? : string;
  telefono? : string;
  latitud? : number;
  longitu? : number;
}

export class Orden {
  id? : string;
  fecha? : string; // string is shorthand for {type: string}
  importe_total? : number;
  cliente? : Cliente;
  productos? : Producto[];
}
