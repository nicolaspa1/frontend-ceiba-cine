import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Afiliado } from '../model/afiliado';
import { Observable } from 'rxjs';


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
                                                this.http.optsName('crear afiliados'));
  }

  public actualizar(afiliado: Afiliado): Observable<void> {
    return this.http.doPut<Afiliado, void>(`${environment.endpoint}/afiliados/${afiliado.id}`, afiliado,
                                                 this.http.optsName('Actualizar afiliados'));
  }

  public eliminar(id: number){
    return this.http.doDelete<boolean>(`${environment.endpoint}/afiliados/${id}`,
                                                 this.http.optsName('eliminar afiliados'));
  }
}
