import { CommonModule, DatePipe } from '@angular/common';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Afiliado } from '../../shared/model/afiliado';
import { AfiliadoService } from '../../shared/service/afiliado.service';

import { ListarAfiliadoComponent } from './listar-afiliado.component';

describe('ListarAfiliadoComponent', () => {
  let component: ListarAfiliadoComponent;
  let fixture: ComponentFixture<ListarAfiliadoComponent>;
  let afiliadoService: AfiliadoService;
  const listaAfiliados: Afiliado[] = [
    new Afiliado(),
    new Afiliado(),
    new Afiliado(),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAfiliadoComponent],
      imports: [CommonModule, HttpClientModule, RouterTestingModule],
      providers: [AfiliadoService, HttpService, DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAfiliadoComponent);
    component = fixture.componentInstance;
    afiliadoService = TestBed.inject(AfiliadoService);
    spyOn(afiliadoService, 'consultar').and.returnValue(of(listaAfiliados));
    fixture.detectChanges();
  });

  it('Debe listar afiliados create', () => {
    expect(component).toBeTruthy();
    component.listaAfiliados.subscribe((resultado) => {
      expect(resultado?.length).toEqual(3);
    });
  });
});
