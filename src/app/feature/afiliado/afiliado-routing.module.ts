import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearAfiliadoComponent } from './components/crear-afiliado/crear-afiliado.component';
import { ListarAfiliadoComponent } from './components/listar-afiliado/listar-afiliado.component';
import { EditarAfiliadoComponent } from './components/editar-afiliado/editar-afiliado.component';

import { AfiliadoComponent } from './components/afiliado/afiliado.component';


const routes: Routes = [
  {
    path: '',
    component: AfiliadoComponent,
    children: [
      {
        path: 'crear',
        component: CrearAfiliadoComponent
      },
      {
        path: 'listar',
        component: ListarAfiliadoComponent
      },
      { path: 'listar/editarafiliado/:id', component: EditarAfiliadoComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliadoRoutingModule { }
