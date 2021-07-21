import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkAfiliado = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkCrearAfiliado = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkEntrada = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));
    linkCrearEntrada = element(by.xpath('/html/body/app-root/app-navbar/nav/a[6]'));


    async clickBotonProductos() {
        await this.linkProducto.click();
    }

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
