import { by, element } from 'protractor';

export class AfiliadoPage {
  private btnCrearAfiliado = element(by.id('btnCrearAfiliado'));
  private btnIrAlRegistroAfiliado = element(by.id('linkCrearAfiliado'));
  private btnIrAlListadoAfiliado = element(by.id('linkListarAfiliado'));
  private linkIrEditarAfiliado = element(by.id('btnIrEditarAfiliado'));
  private linkEditarAfiliado = element(by.id('btnEditarAfiliado'));
  private inputNombreAfiliado = element(by.id('nombre'));
  private inputTipoDocumentoAfiliado = element(by.id('tipoDocumento'));
  private inputNumeroDocumentoAfiliado = element(by.id('numeroDocumento'));
  private inputFechaNacimientoAfiliado = element(by.id('fechaNacimiento'));
  private inputEmailAfiliado = element(by.id('email'));
  private inputDireccionAfiliado = element(by.id('direccion'));
  private inputTelefonoAfiliado = element(by.id('telefono'));
  private listaAfiliados = element.all(by.css('table.table tr'));
  private tituloAlerta = element(by.id('swal2-title'));
  private botonConfirmacionAlerta = element(by.css('swal2-confirm'));

  async clickBotonCrearAfiliado() {
    await this.btnCrearAfiliado.click();
  }
  async clickBotonIrAlRegistroAfiliado() {
    await this.btnIrAlRegistroAfiliado.click();
  }
  async clickBotonIrAlListadoAfiliado() {
    await this.btnIrAlListadoAfiliado.click();
  }
  async clickBotonIrEditarAfiliado() {
    await this.linkIrEditarAfiliado.click();
  }
  async clickBotonEditarAfiliado() {
    await this.linkEditarAfiliado.click();
  }

   ingresarNombreAfiliado(nombre) {
    return this.inputNombreAfiliado.sendKeys(nombre);
  }
   ingresarTipoDocumentoAfiliado(tipoDocumento) {
    return this.inputTipoDocumentoAfiliado.sendKeys(tipoDocumento);
  }
   ingresarNumeroDocumentoAfiliado(numeroDocumento) {
    return this.inputNumeroDocumentoAfiliado.sendKeys(numeroDocumento);
  }
   ingresarFechaNacimientoAfiliado(fechaNacimiento) {
    return this.inputFechaNacimientoAfiliado.sendKeys(fechaNacimiento);
  }
   ingresarEmailAfiliado(email) {
    return this.inputEmailAfiliado.sendKeys(email);
  }
   ingresarDireccionAfiliado(direccion) {
    return this.inputDireccionAfiliado.sendKeys(direccion);
  }
   ingresarTelefonoAfiliado(telefono) {
    return this.inputTelefonoAfiliado.sendKeys(telefono);
  }

   contarAfiliados() {
    return this.listaAfiliados.count();
  }

  mostrarTituloAlerta() {
    return this.tituloAlerta;
  }
  async clicBotonConfirmacionAlerta() {
    await this.botonConfirmacionAlerta.click();
  }
}
