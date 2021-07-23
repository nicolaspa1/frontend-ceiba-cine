import { Component, OnInit } from '@angular/core';

import { AfiliadoService } from '../../shared/service/afiliado.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { DatePipe } from '@angular/common';
import { AlertaAPI } from '@shared/alertas/alerta-api';
import { Afiliado } from '../../shared/model/afiliado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-afiliado',
  templateUrl: './editar-afiliado.component.html',
  styleUrls: ['./editar-afiliado.component.css'],
})
export class EditarAfiliadoComponent implements OnInit {
  public listaAfiliados: Observable<Afiliado[]> | undefined;
  afiliadoForm: FormGroup;
  now = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  afiliado: Afiliado = new Afiliado();
  id:string;

  constructor(
    protected afiliadoService: AfiliadoService,
    protected formBuilder: FormBuilder,
    protected datePipe: DatePipe,
    private router:Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.afiliadoService.getAfiliado(this.id).subscribe((afiliado) => {
        this.afiliadoForm.patchValue({
          id:this.id,
          direccion: afiliado.direccion,
          email: afiliado.email,
          nombre: afiliado.nombre,
          tipoDocumento: afiliado.tipoDocumento,
          numeroDocumento: afiliado.numeroDocumento,
          fechaNacimiento: afiliado.fechaNacimiento,
          telefono: afiliado.telefono,
          fechaRegistro: afiliado.fechaRegistro,
        });
      });
    });
  }

  crear() {
    if (this.afiliadoForm.valid) {
       const afiliado = this.afiliadoForm.value;
      this.afiliadoService.actualizar(afiliado).subscribe((afiliado) => {
        console.log(afiliado);
      });

      AlertaAPI.procesoExitoso('Usuario actualizado con exito!')
      //Se navega a la pagina de vista de afiliados
      .then(() => {
          this.router.navigate(['./afiliado']);
      });
    } else {
      AlertaAPI.error('Error', 'Se debe llenar el formulario correctamente');
    }
  }

  private buildForm() {
    //TODO: HACER VALIDACIONES DE LOS CAMPOS CON PARRAFOS ROJOS EN EL HTML
    this.afiliadoForm = this.formBuilder.group({
      id:this.id,
      nombre: ['', [Validators.required]],
      tipoDocumento: new FormControl('', [Validators.required]),
      numeroDocumento: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      fechaRegistro: new FormControl('', [Validators.required])
    });
  }
}
