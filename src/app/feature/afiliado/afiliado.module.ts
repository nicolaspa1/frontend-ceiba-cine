import { NgModule } from '@angular/core';

// import { ProductoRoutingModule } from './afiliado-routing.module';
// import { BorrarAfiliadoComponent } from './components/borrar-afiliado/borrar-afiliado.component';
// import { ListarAfiliadoComponent } from './components/listar-afiliado/listar-afiliado.component';
import { CrearAfiliadoComponent } from './components/crear-afiliado/crear-afiliado.component';
// import { AfiliadoComponent } from './components/afiliado/afiliado.component';
import { SharedModule } from '@shared/shared.module';
// import { AfiliadoService } from './shared/service/afiliado.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // CrearAfiliadoComponent,
    // AfiliadoComponent
  ],
  imports: [
    // AfiliadoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  // providers: [AfiliadoService]
})
export class AfiliadoModule { }
