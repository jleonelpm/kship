import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriasComponent } from "../dashboard/categorias/categorias.component";
import { OrdenesComponent } from "../dashboard/ordenes/ordenes.component";
import { ProductosComponent } from "../dashboard/productos/productos.component";
import { authGuard } from "../helpers/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { ProductosListComponent } from "../components/productos-list/productos-list.component";
import { CategoriasListComponent } from "../components/categorias-list/categorias-list.component";
import { OrdenesListComponent } from "../components/ordenes-list/ordenes-list.component";

//Routes to assign on dashboard template
const routes: Routes = [{

    path: 'dashboard', component: PagesComponent,canActivate:[authGuard],

    children: [
        { path: '', component: DashboardComponent },
        { path: 'categorias', component: CategoriasListComponent },
        { path: 'productos', component: ProductosListComponent },
        { path: 'ordenes', component:OrdenesListComponent},
    ]

}];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
