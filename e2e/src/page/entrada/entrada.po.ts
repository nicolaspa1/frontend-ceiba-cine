import { by, element } from "protractor";

export class EntradaPage {
  private linkCrearEntradas = element(by.id("btnCrearEntrada"));
  private linkIrEditarEntrada = element(by.id("btnIrEditarEntrada"));
  private linkEditarEntrada = element(by.id("btnEditarEntrada"));
  private inputNumeroFuncionEntrada = element(by.id("numeroFuncion"));
  private inputPrecioEntrada = element(by.id("precio"));
  private inputNombrePeliculaEntrada = element(by.id("nombrePelicula"));
  private inputFechaFuncionEntrada = element(by.id("fechaFuncion"));
  private listaEntradas = element.all(by.css("table.table tr"));
  private botonConfirmacionAlerta = element(by.css("swal2-confirm"));

  async clickBotonCrearEntradas() {
    await this.linkCrearEntradas.click();
  }
  async clickBotonIrEditarEntrada() {
    await this.linkIrEditarEntrada.click();
  }
  async clickBotonEditarEntrada() {
    await this.linkEditarEntrada.click();
  }

  async ingresarNumeroFuncionEntrada(numeroFuncion) {
    await this.inputNumeroFuncionEntrada.sendKeys(numeroFuncion);
  }
  async ingresarPrecioEntrada(precio) {
    await this.inputPrecioEntrada.sendKeys(precio);
  }
  async ingresarNombrePeliculaEntrada(nombrePelicula) {
    await this.inputNombrePeliculaEntrada.sendKeys(nombrePelicula);
  }
  async ingresarFechaFuncionEntrada(fechaFuncion) {
    await this.inputFechaFuncionEntrada.sendKeys(fechaFuncion);
  }

  async contarEntradas() {
    return this.listaEntradas.count();
  }

  async clicBotonConfirmacionAlerta() {
    await this.botonConfirmacionAlerta.click();
  }
}
