import { by, element } from 'protractor';

export class NavbarPage {
  linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
  linkAfiliado = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
  linkCrearAfiliado = element(
    by.xpath('/html/body/app-root/app-navbar/nav/a[3]')
  );
  linkEntrada = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
  linkCrearEntrada = element(
    by.xpath('/html/body/app-root/app-navbar/nav/a[5]')
  );

  async clickBotonCrearAfiliados() {
    await this.linkCrearAfiliado.click();
  }
  async clickBotonAfiliados() {
    await this.linkAfiliado.click();
  }
  async clickBotonEntradas() {
    await this.linkEntrada.click();
  }

  async clickBotonCrearEntradas() {
    await this.linkCrearEntrada.click();
  }
}
