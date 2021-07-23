import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEntradaComponent } from './components/crear-entrada/crear-entrada.component';
import { ListarEntradaComponent } from './components/listar-entrada/listar-entrada.component';

import { EntradaComponent } from './components/entrada/entrada.component';


const routes: Routes = [
  {
    path: '',
    component: EntradaComponent,
    children: [
      {
        path: 'crear',
        component: CrearEntradaComponent
      },
      {
        path: 'listar',
        component: ListarEntradaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradaRoutingModule { }
