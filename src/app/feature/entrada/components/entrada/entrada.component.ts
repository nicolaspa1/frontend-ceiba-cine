import { Component, OnInit } from '@angular/core';
import { AlertaAPI } from '@shared/alertas/alerta-api';
import { Observable } from 'rxjs';

import { Entrada } from '../../shared/model/entrada';
import { EntradaService } from '../../shared/service/entrada.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  public listaEntradas: Observable<Entrada[]> | undefined;

  constructor(private entradaService: EntradaService) { }

  ngOnInit(): void {
    this.listaEntradas = this.entradaService.consultar();
  }

  confirmacionEliminar(id: number){
    AlertaAPI.confirmacion('Estás seguro?', '¡No podrás revertir esto!', '¡Sí, bórralo!', 'Cancelar')
    .then((result) => {
      if (result.isConfirmed) {
        this.eliminarAfiliado(id);
        AlertaAPI.procesoExitoso('Entrada eliminada con exito!')
        // Se recarga la pagina al eliminar para que la lista en pantalla se actualice
        .then(() => {
            window.location.reload();
        });
      }
    })
  }

  eliminarAfiliado(id: number){
    this.entradaService.eliminar(id).subscribe(entrada =>{
      console.log(entrada)
    });
  }


}
