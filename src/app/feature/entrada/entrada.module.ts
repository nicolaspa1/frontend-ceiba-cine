import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntradaRoutingModule } from './entrada-routing.module';
import { CrearEntradaComponent } from './components/crear-entrada/crear-entrada.component';
import { ListarEntradaComponent } from './components/listar-entrada/listar-entrada.component';

import { EntradaComponent } from './components/entrada/entrada.component';
import { SharedModule } from '@shared/shared.module';
import { EntradaService } from './shared/service/entrada.service';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    CrearEntradaComponent,
    EntradaComponent,
    ListarEntradaComponent,
  ],
  imports: [
    EntradaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EntradaService, DatePipe],
})
export class EntradaModule {}
