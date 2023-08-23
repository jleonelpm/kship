import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosListComponent } from '../components/productos-list/productos-list.component';
import { CategoriasListComponent } from '../components/categorias-list/categorias-list.component';
import { OrdenesListComponent } from '../components/ordenes-list/ordenes-list.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProductosListComponent,
    CategoriasListComponent,
    OrdenesListComponent,
  ],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  exports: [DashboardComponent],
})
export class PagesModule {}
