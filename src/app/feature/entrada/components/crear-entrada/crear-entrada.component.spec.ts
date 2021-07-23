import { CommonModule, DatePipe } from '@angular/common';
import { of } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Entrada } from '../../shared/model/entrada';
import { EntradaService } from '../../shared/service/entrada.service';

import { CrearEntradaComponent } from './crear-entrada.component';

describe('CrearEntradaComponent', () => {
  let component: CrearEntradaComponent;
  let fixture: ComponentFixture<CrearEntradaComponent>;
  let entradaService: EntradaService;
  let entradaPrueba: Entrada;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearEntradaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [EntradaService, HttpService, DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEntradaComponent);
    component = fixture.componentInstance;
    entradaService = TestBed.inject(EntradaService);
    spyOn(entradaService, 'guardar').and.returnValue(of(true));
    entradaPrueba = new Entrada();
    entradaPrueba.id = 1;
    entradaPrueba.nombrePelicula = 'Luis Miguel la pelicula';
    entradaPrueba.fechaFuncion = '2021-09-09';
    entradaPrueba.precio = 10000;
    entradaPrueba.numeroFuncion = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido', () => {
    expect(component.entradaForm.valid).toBeFalsy();
  });

  it('se debe crear un entrada', () => {
    component.entradaForm.controls.nombrePelicula.setValue(
      entradaPrueba.nombrePelicula
    );
    component.entradaForm.controls.fechaFuncion.setValue(
      entradaPrueba.fechaFuncion
    );
    component.entradaForm.controls.precio.setValue(entradaPrueba.precio);
    component.entradaForm.controls.numeroFuncion.setValue(
      entradaPrueba.numeroFuncion
    );
    expect(component.entradaForm.valid).toBeTruthy();
    component.crear();
  });
});
