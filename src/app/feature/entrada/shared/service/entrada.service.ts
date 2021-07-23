import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Entrada } from '../model/entrada';
// import { Afiliado } from '../../../afiliado/shared/model/afiliado';


@Injectable()
export class EntradaService {

  constructor(private http: HttpService) {}

  public consultar() {
    return this.http.doGet<Entrada[]>(`${environment.endpoint}/entradas`, this.http.optsName('consultar entradas'));
  }

  public guardar(entrada: Entrada) {
    return this.http.doPost<Entrada, boolean>(`${environment.endpoint}/entradas`, entrada,
                                                this.http.optsName('crear entradas'));
  }
  // public guardarConDescuento(entrada: Entrada , afiliado:Afiliado) {
  //   return this.http.doPost<Entrada, boolean>(`${environment.endpoint}/entradasA`, entrada,afiliado,
  //                                               this.http.optsName('crear entradas'));
  // }

  public eliminar(id: number){
    return this.http.doDelete<boolean>(`${environment.endpoint}/entradas/${id}`,
                                                 this.http.optsName('eliminar entradas'));
  }
}
