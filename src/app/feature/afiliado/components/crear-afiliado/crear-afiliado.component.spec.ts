import { CommonModule, DatePipe } from '@angular/common';
import { of } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Afiliado } from '../../shared/model/afiliado';
import { AfiliadoService } from '../../shared/service/afiliado.service';

import { CrearAfiliadoComponent } from './crear-afiliado.component';

describe('CrearAfiliadoComponent', () => {
  let component: CrearAfiliadoComponent;
  let fixture: ComponentFixture<CrearAfiliadoComponent>;
  let afiliadoService: AfiliadoService;
  let afiliadoPrueba: Afiliado;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearAfiliadoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [AfiliadoService, HttpService, DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAfiliadoComponent);
    component = fixture.componentInstance;
    afiliadoService = TestBed.inject(AfiliadoService);
    spyOn(afiliadoService, 'guardar').and.returnValue(of(true));
    afiliadoPrueba = new Afiliado();
    afiliadoPrueba.id = 1;
    afiliadoPrueba.nombre = 'Luis Miguel';
    afiliadoPrueba.tipoDocumento = 'CC';
    afiliadoPrueba.numeroDocumento = '10093837498';
    afiliadoPrueba.fechaNacimiento = '2000-05-05';
    afiliadoPrueba.email = 'luismi@gmail.com';
    afiliadoPrueba.direccion = 'carrera 7';
    afiliadoPrueba.telefono = '30004545412';
    afiliadoPrueba.fechaRegistro = '2021-05-05';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido', () => {
    expect(component.afiliadoForm.valid).toBeFalsy();
  });

  it('se debe crear un afiliado', () => {
    component.afiliadoForm.controls.nombre.setValue(afiliadoPrueba.nombre);
    component.afiliadoForm.controls.tipoDocumento.setValue(
      afiliadoPrueba.tipoDocumento
    );
    component.afiliadoForm.controls.numeroDocumento.setValue(
      afiliadoPrueba.numeroDocumento
    );
    component.afiliadoForm.controls.fechaNacimiento.setValue(
      afiliadoPrueba.fechaNacimiento
    );
    component.afiliadoForm.controls.email.setValue(afiliadoPrueba.email);
    component.afiliadoForm.controls.direccion.setValue(
      afiliadoPrueba.direccion
    );
    component.afiliadoForm.controls.telefono.setValue(afiliadoPrueba.telefono);
    expect(component.afiliadoForm.valid).toBeTruthy();
    component.crear();
  });
});
