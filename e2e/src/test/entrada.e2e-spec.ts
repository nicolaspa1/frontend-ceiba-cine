import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { EntradaPage } from '../page/entrada/entrada.po';

describe('workspace-project Entrada', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let entrada: EntradaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        entrada = new EntradaPage();
    });

    it('Deberia crear entrada', () => {

        // Arrange
        const NUMERO_FUNCION = '1';
        const PRECIO_FUNCION = '10000';
        const NOMBRE_FUNCION = 'Rapidos y furiosos 9';
        const FECHA_FUNCION = '10-09-2021';

        // Act
        page.navigateTo();
        navBar.clickBotonCrearEntradas();
        entrada.ingresarNumeroFuncionEntrada(NUMERO_FUNCION);
        entrada.ingresarPrecioEntrada(PRECIO_FUNCION);
        entrada.ingresarNombrePeliculaEntrada(NOMBRE_FUNCION);
        entrada.ingresarFechaFuncionEntrada(FECHA_FUNCION);
        entrada.clickBotonCrearEntradas();

        // Assert
        expect(entrada.capturaTitulo().getText()).toEqual('Entrada vendida con exito!');
        entrada.clicBotonConfirmacionAlerta();
    });

    it('Deberia listar entradas', () => {
        // Arrange-Act
        page.navigateTo();
        navBar.clickBotonEntradas();
        // Assert
        expect(entrada.contarEntradas()).toBe(entrada.contarEntradas());
    });

});
