import { Component, OnInit } from "@angular/core";
import { EntradaService } from "../../shared/service/entrada.service";

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AlertaAPI } from "@shared/alertas/alerta-api";
import { Entrada } from "../../shared/model/entrada";

@Component({
  selector: "app-crear-entrada",
  templateUrl: "./crear-entrada.component.html",
  styleUrls: ["./crear-entrada.component.css"],
})
export class CrearEntradaComponent implements OnInit {
  entradaForm: FormGroup;
  entrada:Entrada = new Entrada();
  esAfiliado: boolean = false;


  constructor(
    protected entradaService: EntradaService,
    protected formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.construirFormularioEntrada();
  }

  crear() {
    //TODO: Modificar el manejo de errores para que muestre un error al registrar dos afiliados con el mismo numero y tipo de documento
    if (this.entradaForm.valid) {
      this.entrada.fechaFuncion += " 00:00:00";
        this.entradaService
          .guardar(this.entrada)
          .subscribe((entrada) => {
            console.log(entrada);
          });

        AlertaAPI.procesoExitoso("Entrada vendida con exito!");
        // Se recarga la pagina al eliminar para que la lista en pantalla se actualice
        // .then(() => {
        //     window.location.reload();
        // });

    } else {
      AlertaAPI.error("Error", "Se debe llenar el formulario correctamente");
    }
  }

  private construirFormularioEntrada() {
    //TODO: HACER VALIDACIONES DE LOS CAMPOS CON PARRAFOS ROJOS EN EL HTML
    this.entradaForm = this.formBuilder.group({
      numeroFuncion: new FormControl("", [Validators.required]),
      precio: new FormControl("", [Validators.required]),
      nombrePelicula: new FormControl("", [Validators.required]),
      fechaFuncion: new FormControl("", [Validators.required]),
    });
  }
}
