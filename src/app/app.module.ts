import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { EditarAfiliadoComponent } from './feature/afiliado/components/editar-afiliado/editar-afiliado.component';
import { CrearAfiliadoComponent } from './feature/afiliado/components/crear-afiliado/crear-afiliado.component';
import { AfiliadoComponent } from './feature/afiliado/components/afiliado/afiliado.component';
import { CrearEntradaComponent } from './feature/entrada/components/crear-entrada/crear-entrada.component';
import { EntradaComponent } from './feature/entrada/components/entrada/entrada.component';
import { BannerComponent } from './feature/home/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditarAfiliadoComponent,
    CrearAfiliadoComponent,
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
  providers: [CookieService,DatePipe],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
