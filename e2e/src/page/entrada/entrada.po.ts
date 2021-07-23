import { by, element } from 'protractor';

export class EntradaPage {
  private linkCrearEntradas = element(by.id('btnCrearEntrada'));
  private inputNumeroFuncionEntrada = element(by.id('numeroFuncion'));
  private inputPrecioEntrada = element(by.id('precio'));
  private inputNombrePeliculaEntrada = element(by.id('nombrePelicula'));
  private inputFechaFuncionEntrada = element(by.id('fechaFuncion'));
  private listaEntradas = element.all(by.css('table.table tr'));
  private botonConfirmacionAlerta = element(by.css('swal2-confirm'));
  private tituloAlerta = element(by.id('swal2-title'));

  async clickBotonCrearEntradas() {
    await this.linkCrearEntradas.click();
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
    await this.listaEntradas.count();
  }

 capturaTitulo() {
    return this.tituloAlerta;
  }

  async clicBotonConfirmacionAlerta() {
    await this.botonConfirmacionAlerta.click();
  }
}
