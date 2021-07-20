import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AfiliadoService } from '../../shared/service/afiliado.service';
import { Afiliado } from '../../shared/model/afiliado';
import {AlertaAPI} from  '@shared/alertas/alerta-api';

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

  confirmacionEliminar(id: number){
    AlertaAPI.confirmacion('Estás seguro?', '¡No podrás revertir esto!', '¡Sí, bórralo!', 'Cancelar')
    .then((result) => {
      if (result.isConfirmed) {
        this.eliminarAfiliado(id);
        AlertaAPI.procesoExitoso('Usuario eliminado con exito!')
        // Se recarga la pagina al eliminar para que la lista en pantalla se actualice
        .then(() => {
            window.location.reload();
        });
      }
    })
  }

  eliminarAfiliado(id: number){
    this.afiliadoService.eliminar(id).subscribe(afiliado =>{
      console.log(afiliado)
    });
  }

  // editarAfiliado(afiliado:Afiliado){
      
  // }


}
