import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './entrada-routing.module';
import { CrearEntradaComponent } from './components/crear-entrada/crear-entrada.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SharedModule } from '@shared/shared.module';
import { EntradaService } from './shared/service/entrada.service';


@NgModule({
  declarations: [
    CrearEntradaComponent,
    EntradaComponent,
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule
  ],
  providers: [EntradaService]
})
export class EntradaModule { }
