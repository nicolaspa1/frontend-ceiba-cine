import { CommonModule, DatePipe } from '@angular/common';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Entrada } from '../../shared/model/entrada';
import { EntradaService } from '../../shared/service/entrada.service';

import { ListarEntradaComponent } from './listar-entrada.component';

describe('ListarEntradaComponent', () => {
  let component: ListarEntradaComponent;
  let fixture: ComponentFixture<ListarEntradaComponent>;
  let entradaService: EntradaService;
  const listaEntradas: Entrada[] = [
    new Entrada(),
    new Entrada(),
    new Entrada(),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarEntradaComponent],
      imports: [CommonModule, HttpClientModule, RouterTestingModule],
      providers: [EntradaService, HttpService, DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEntradaComponent);
    component = fixture.componentInstance;
    entradaService = TestBed.inject(EntradaService);
    spyOn(entradaService, 'consultar').and.returnValue(of(listaEntradas));
    fixture.detectChanges();
  });

  it('Debe listar entradas create', () => {
    expect(component).toBeTruthy();
    component.listaEntradas.subscribe((resultado) => {
      expect(resultado?.length).toEqual(3);
    });
  });
});
