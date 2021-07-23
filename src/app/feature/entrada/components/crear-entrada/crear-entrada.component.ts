import { Component, OnInit } from '@angular/core';
import { EntradaService } from '../../shared/service/entrada.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertaAPI } from '@shared/alertas/alerta-api';
import { Entrada } from '../../shared/model/entrada';

@Component({
  selector: 'app-crear-entrada',
  templateUrl: './crear-entrada.component.html',
  styleUrls: ['./crear-entrada.component.css'],
})
export class CrearEntradaComponent implements OnInit {
  entradaForm: FormGroup;
  entrada: Entrada = new Entrada();
  esAfiliado = false;
  mensaje = 'Usuario afiliado';

  constructor(
    protected entradaService: EntradaService,
    protected formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.construirFormularioEntrada();
  }

  checkValue() {
    if (this.esAfiliado) {
      this.esAfiliado = false;
      this.mensaje = 'Usuario afiliado';
    } else {
      this.esAfiliado = true;
      this.mensaje = 'Usuario no afiliado';
    }
  }

  crear() {
    if (this.entradaForm.valid) {
      this.entrada.fechaFuncion += ' 00:00:00';
      this.entradaService.guardar(this.entrada).subscribe((entrada) => {
        console.log(entrada);
      });

      AlertaAPI.procesoExitoso('Entrada vendida con exito!');
      // Se recarga la pagina al eliminar para que la lista en pantalla se actualice
      // .then(() => {
      // window.location.reload();
      // });
    } else {
      AlertaAPI.error('Error', 'Se debe llenar el formulario correctamente');
    }
  }

  private construirFormularioEntrada() {
    this.entradaForm = this.formBuilder.group({
      numeroFuncion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      nombrePelicula: new FormControl('', [Validators.required]),
      fechaFuncion: new FormControl('', [Validators.required]),
    });
  }
}
