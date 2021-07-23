import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Afiliado } from '../model/afiliado';
import { HttpResponse } from '@angular/common/http';
import { AfiliadoService } from './afiliado.service';

describe('AfiliadoService', () => {
  let httpMock: HttpTestingController;
  let service: AfiliadoService;
  const apiEndpointAfiliados = `${environment.endpoint}/afiliados`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AfiliadoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AfiliadoService);
  });

  it('should be created', () => {
    const productService: AfiliadoService = TestBed.inject(AfiliadoService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar afiliados', () => {
    const dummyAfiliados = [
      new Afiliado(), new Afiliado()
    ];
    service.consultar().subscribe(afiliados => {
      expect(afiliados.length).toBe(2);
      expect(afiliados).toEqual(dummyAfiliados);
    });
    const req = httpMock.expectOne(apiEndpointAfiliados);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAfiliados);
  });

  it('deberia crear un afiliado', () => {
    const dummyAfiliado = new Afiliado();
    service.guardar(dummyAfiliado).subscribe((resultado) => {
      expect(resultado).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointAfiliados);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un afiliado', () => {
    const dummyAfiliadoId = 1;
    service.eliminar(dummyAfiliadoId).subscribe((resultado) => {
      expect(resultado).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointAfiliados}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
