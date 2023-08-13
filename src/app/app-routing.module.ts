import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { NopageComponent } from './components/nopage/nopage.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [{
  path: '', redirectTo: '/login', pathMatch: 'full',
  //loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule),
},
{
  path: '**', component: NopageComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule, 
    AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
