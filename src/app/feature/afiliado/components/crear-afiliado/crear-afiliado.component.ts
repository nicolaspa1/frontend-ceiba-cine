import { Component, OnInit } from '@angular/core';

import { AfiliadoService } from '../../shared/service/afiliado.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-crear-afiliado',
  templateUrl: './crear-afiliado.component.html',
  styleUrls: ['./crear-afiliado.component.css']
})
export class CrearAfiliadoComponent implements OnInit {
  afiliadoForm: FormGroup;
  
  constructor(protected afiliadoService: AfiliadoService) { }

  ngOnInit() {
    this.construirFormularioAfiliado();
  }

  crear() {
    this.afiliadoService.guardar(this.afiliadoForm.value).subscribe(afiliado =>{
      console.log(afiliado)
    });
  }

  private construirFormularioAfiliado() {
    this.afiliadoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      tipoDocumento: new FormControl('', [Validators.required]),
      numeroDocumento: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      fechaRegistro:new FormControl('', [Validators.required])
    });
  }


}
