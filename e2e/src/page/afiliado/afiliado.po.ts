import { by, element } from "protractor";

export class AfiliadoPage {
  private linkCrearAfiliados = element(by.id("btnCrearAfiliado"));
  private linkIrEditarAfiliado = element(by.id("btnIrEditarAfiliado"));
  private linkEditarAfiliado = element(by.id("btnEditarAfiliado"));
  private inputNombreAfiliado = element(by.id("nombre"));
  private inputTipoDocumentoAfiliado = element(by.id("tipoDocumento"));
  private inputNumeroDocumentoAfiliado = element(by.id("numeroDocumento"));
  private inputFechaNacimientoAfiliado = element(by.id("fechaNacimiento"));
  private inputEmailAfiliado = element(by.id("email"));
  private inputDireccionAfiliado = element(by.id("direccion"));
  private inputTelefonoAfiliado = element(by.id("telefono"));
  private listaAfiliados = element.all(by.css("table.table tr"));
  private tituloAlerta = element(by.id("swal2-title"));
  private botonConfirmacionAlerta = element(by.css("swal2-confirm"));

  async clickBotonCrearAfiliados() {
    await this.linkCrearAfiliados.click();
  }
  async clickBotonIrEditarAfiliado() {
    await this.linkIrEditarAfiliado.click();
  }
  async clickBotonEditarAfiliado() {
    await this.linkEditarAfiliado.click();
  }

  async ingresarNombreAfiliado(nombre) {
    await this.inputNombreAfiliado.sendKeys(nombre);
  }
  async ingresarTipoDocumentoAfiliado(tipoDocumento) {
    await this.inputTipoDocumentoAfiliado.sendKeys(tipoDocumento);
  }
  async ingresarNumeroDocumentoAfiliado(numeroDocumento) {
    await this.inputNumeroDocumentoAfiliado.sendKeys(numeroDocumento);
  }
  async ingresarFechaNacimientoAfiliado(fechaNacimiento) {
    await this.inputFechaNacimientoAfiliado.sendKeys(fechaNacimiento);
  }
  async ingresarEmailAfiliado(email) {
    await this.inputEmailAfiliado.sendKeys(email);
  }
  async ingresarDireccionAfiliado(direccion) {
    await this.inputDireccionAfiliado.sendKeys(direccion);
  }
  async ingresarTelefonoAfiliado(telefono) {
    await this.inputTelefonoAfiliado.sendKeys(telefono);
  }

  async contarAfiliados() {
    return this.listaAfiliados.count();
  }

  async mostrarTituloAlerta() {
    await this.tituloAlerta.getText();
  }
  async clicBotonConfirmacionAlerta() {
    await this.botonConfirmacionAlerta.click();
  }
}
