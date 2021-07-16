import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AfiliadoService } from '../../shared/service/afiliado.service';
import { Afiliado } from '../../shared/model/afiliado';
@Component({
  selector: 'app-afiliado',
  templateUrl: './afiliado.component.html',
  styleUrls: ['./afiliado.component.css']
})
export class AfiliadoComponent implements OnInit {
  public listaAfiliados: Observable<Afiliado[]> | undefined;
  
  constructor(private afiliadoService: AfiliadoService) { }

  ngOnInit(): void {
    this.listaAfiliados = this.afiliadoService.consultar();
  }

}
