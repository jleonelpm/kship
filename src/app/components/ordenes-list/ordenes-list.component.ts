import { Component,OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-ordenes-list',
  templateUrl: './ordenes-list.component.html',
  styleUrls: ['./ordenes-list.component.scss']
})

export class OrdenesListComponent {

  ordenes : Orden[]=[];
  currentOrden: Orden = {};
  currentIndex = -1;
  title = '';
  cantidadOrdenes : number = 0;

  constructor(private ApiServiceService: ApiServiceService) { }

  ngOnInit(): void {
    this.retrieveOrdenes();
  }

  retrieveOrdenes() {
    this.ApiServiceService.getAllOrdenes()
      .subscribe({
        next: (data) => {
          this.ordenes = data;
          this.cantidadOrdenes = this.ordenes.length;
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
    this.retrieveOrdenes();
    this.currentOrden = {};
    this.currentIndex = -1;
  }

  setActiveProducto(Orden: Orden, index: number): void {
    this.currentOrden = Orden;
    this.currentIndex = index;
  }

}
