import { Component,OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})


export class CategoriasListComponent implements OnInit {


  categorias : Categoria[]=[];
  currentCategoria: Categoria = {};
  currentIndex = -1;
  title = '';
  cantidadCategorias : number = 0;

  constructor(private ApiServiceService: ApiServiceService) { }

  ngOnInit(): void {
    this.retrieveCategorias();
  }

  retrieveCategorias() {
    this.ApiServiceService.getAllCategorias()
      .subscribe({
        next: (data) => {
          this.categorias = data;
          this.cantidadCategorias = this.categorias.length;
          console.log(data);
          //console.log("Ingreso en Next");
        },
        error: (e) => {
          console.log("se produjo error");
          //console.error(e)
        }
      });
  }

  refreshList(): void {
    this.retrieveCategorias();
    this.currentCategoria = {};
    this.currentIndex = -1;
  }

  setActiveCategoria(Categoria: Categoria, index: number): void {
    this.currentCategoria = Categoria;
    this.currentIndex = index;
  }

}
