import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AfiliadoRoutingModule } from './afiliado-routing.module';
import { CrearAfiliadoComponent } from './components/crear-afiliado/crear-afiliado.component';
import { ListarAfiliadoComponent } from './components/listar-afiliado/listar-afiliado.component';
import { EditarAfiliadoComponent } from './components/editar-afiliado/editar-afiliado.component';

import { AfiliadoComponent } from './components/afiliado/afiliado.component';
import { SharedModule } from '@shared/shared.module';
import { AfiliadoService } from './shared/service/afiliado.service';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    CrearAfiliadoComponent,
    AfiliadoComponent,
    ListarAfiliadoComponent,
    EditarAfiliadoComponent,
  ],
  imports: [
    AfiliadoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AfiliadoService, DatePipe],
})
export class AfiliadoModule {}
