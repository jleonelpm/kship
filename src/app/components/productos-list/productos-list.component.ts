import { Component,OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})


export class ProductosListComponent implements OnInit {


  productos : Producto[]=[];
  currentProducto: Producto = {};
  currentIndex = -1;
  title = '';
  cantidadProductos : number = 0;

  constructor(private ApiServiceService: ApiServiceService) { }

  ngOnInit(): void {
    this.retrieveProductos();
  }

  retrieveProductos() {
    this.ApiServiceService.getAllProductos()
      .subscribe({
        next: (data) => {
          this.productos = data;
          this.cantidadProductos = this.productos.length;
          console.log(data);
          console.log("Ingreso en Next");
        },
        error: (e) => {
          console.log("se produjo error");
          //console.error(e)
        }
      });
  }

  refreshList(): void {
    this.retrieveProductos();
    this.currentProducto = {};
    this.currentIndex = -1;
  }

  setActiveProducto(Producto: Producto, index: number): void {
    this.currentProducto = Producto;
    this.currentIndex = index;
  }

}
