import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NopageComponent } from './components/nopage/nopage.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoriasComponent } from './dashboard/categorias/categorias.component';
import { ProductosComponent } from './dashboard/productos/productos.component';
import { OrdenesComponent } from './dashboard/ordenes/ordenes.component';

@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    CategoriasComponent,
    ProductosComponent,
    OrdenesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
