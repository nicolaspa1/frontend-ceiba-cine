import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BorrarAfiliadoComponent } from './feature/afiliado/components/borrar-afiliado/borrar-afiliado.component';
import { CrearAfiliadoComponent } from './feature/afiliado/components/crear-afiliado/crear-afiliado.component';
import { ListarAfiliadoComponent } from './feature/afiliado/components/listar-afiliado/listar-afiliado.component';
import { AfiliadoComponent } from './feature/afiliado/components/afiliado/afiliado.component';
import { CrearEntradaComponent } from './feature/entrada/components/crear-entrada/crear-entrada.component';
import { EntradaComponent } from './feature/entrada/components/entrada/entrada.component';
import { BannerComponent } from './feature/home/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BorrarAfiliadoComponent,
    CrearAfiliadoComponent,
    ListarAfiliadoComponent,
    AfiliadoComponent,
    CrearEntradaComponent,
    EntradaComponent,
    BannerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
