import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Afiliado } from '../model/afiliado';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  constructor(private http: HttpService) {}

  public consultar() {
    return this.http.doGet<Afiliado[]>(`${environment.endpoint}/afiliados`, this.http.optsName('consultar afiliados'));
  }

  public guardar(afiliado: Afiliado) {
    return this.http.doPost<Afiliado, boolean>(`${environment.endpoint}/afiliados`, afiliado,
                                                this.http.optsName('crear/actualizar afiliados'));
  }

  public eliminar(afiliado: Afiliado) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/afiliados/${afiliado.id}`,
                                                 this.http.optsName('eliminar afiliados'));
  }
}
