import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Entrada } from '../model/entrada';
import { HttpResponse } from '@angular/common/http';
import { EntradaService } from './entrada.service';

describe('EntradaService', () => {
  let httpMock: HttpTestingController;
  let service: EntradaService;
  const apiEndpointEntradas = `${environment.endpoint}/entradas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EntradaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EntradaService);
  });

  it('should be created', () => {
    const productService: EntradaService = TestBed.inject(EntradaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar entradas', () => {
    const dummyEntradas = [
      new Entrada(), new Entrada()
    ];
    service.consultar().subscribe(entradas => {
      expect(entradas.length).toBe(2);
      expect(entradas).toEqual(dummyEntradas);
    });
    const req = httpMock.expectOne(apiEndpointEntradas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEntradas);
  });

  it('deberia crear un entrada', () => {
    const dummyEntrada = new Entrada();
    service.guardar(dummyEntrada).subscribe((resultado) => {
      expect(resultado).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointEntradas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un entrada', () => {
    const dummyEntradaId = 1;
    service.eliminar(dummyEntradaId).subscribe((resultado) => {
      expect(resultado).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointEntradas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
