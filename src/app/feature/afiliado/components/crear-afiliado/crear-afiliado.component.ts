import { Component, OnInit } from '@angular/core';

import { AfiliadoService } from '../../shared/service/afiliado.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { DatePipe } from '@angular/common';
import { AlertaAPI } from '@shared/alertas/alerta-api';
import { Afiliado } from '../../shared/model/afiliado';

@Component({
  selector: 'app-crear-afiliado',
  templateUrl: './crear-afiliado.component.html',
  styleUrls: ['./crear-afiliado.component.css'],
})
export class CrearAfiliadoComponent implements OnInit {
  afiliadoForm: FormGroup;
  now = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  afiliado: Afiliado = new Afiliado();

  constructor(
    protected afiliadoService: AfiliadoService,
    protected formBuilder: FormBuilder,
    protected datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.construirFormularioAfiliado();
  }

  crear() {
    if (this.afiliadoForm.valid) {
      this.afiliado.fechaRegistro = this.now + ' 00:00:00';
      this.afiliado.fechaNacimiento += ' 00:00:00';
      this.afiliadoService.guardar(this.afiliado).subscribe((afiliado) => {
        console.log(afiliado);
      });

      AlertaAPI.procesoExitoso('Usuario creado con exito!')
      // Se recarga la pagina al eliminar para que la lista en pantalla se actualice
      .then(() => {
          window.location.reload();
      });
    } else {
      AlertaAPI.error('Error', 'Se debe llenar el formulario correctamente');
    }
  }

  private construirFormularioAfiliado() {
    this.afiliadoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipoDocumento: new FormControl('', [Validators.required]),
      numeroDocumento: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      fechaRegistro: this.now,
    });
  }
}
