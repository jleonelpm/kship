import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriasComponent } from "../dashboard/categorias/categorias.component";
import { OrdenesComponent } from "../dashboard/ordenes/ordenes.component";
import { ProductosComponent } from "../dashboard/productos/productos.component";
import { authGuard } from "../helpers/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [{

    path: 'dashboard', component: PagesComponent,canActivate:[authGuard],

    children: [
        { path: '', component: DashboardComponent },
        {path:'categorias', component:CategoriasComponent},
        {path:'productos', component:ProductosComponent},
        {path:'ordenes', component:OrdenesComponent},
    ]

}];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }