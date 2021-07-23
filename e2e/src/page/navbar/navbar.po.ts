import { by, element } from 'protractor';

export class NavbarPage {
  linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
  linkAfiliado = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
  linkEntrada = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

  async clickBotonAfiliados() {
    await this.linkAfiliado.click();
  }
  async clickBotonEntradas() {
    await this.linkEntrada.click();
  }
}
