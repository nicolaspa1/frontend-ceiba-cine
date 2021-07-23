import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';

import { HomeComponent } from '@home/home.component';

// import { EditarAfiliadoComponent } from './feature/afiliado/components/editar-afiliado/editar-afiliado.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
  { path: 'afiliado',  loadChildren: () => import('./feature/afiliado/afiliado.module').then(mod => mod.AfiliadoModule) },
  { path: 'entrada',  loadChildren: () => import('./feature/entrada/entrada.module').then(mod => mod.EntradaModule)},
  // { path: 'afiliado/listar/editarafiliado/:id', component: EditarAfiliadoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
