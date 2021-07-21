import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { AfiliadoPage } from '../page/afiliado/afiliado.po';

describe('workspace-project Afiliado', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let afiliado: AfiliadoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        afiliado = new AfiliadoPage();
    });

    it('Deberia crear afiliado', () => {

        //Arrange
        const NOMBRE_AFILIADO = 'Nicolas Pinzon Aparicio';
        const TIPO_DOCUMENTO_AFILIADO = 'CC';
        const NUMERO_DOCUMENTO_AFILIADO = '1006428654';
        const FECHA_NACIMIENTO_AFILIADO = '10-05-2000';
        const EMAIL_AFILIADO = 'nicolaspa@gmail.com';
        const DIRECCION_AFILIADO = 'Calle 3 # 3 -3';
        const TELEFONO_AFILIADO = '320455761';

        //Act
        page.navigateTo();
        navBar.clickBotonCrearAfiliados();
        afiliado.ingresarNombreAfiliado(NOMBRE_AFILIADO);
        afiliado.ingresarTipoDocumentoAfiliado(TIPO_DOCUMENTO_AFILIADO);
        afiliado.ingresarNumeroDocumentoAfiliado(NUMERO_DOCUMENTO_AFILIADO);
        afiliado.ingresarFechaNacimientoAfiliado(FECHA_NACIMIENTO_AFILIADO);
        afiliado.ingresarEmailAfiliado(EMAIL_AFILIADO);
        afiliado.ingresarDireccionAfiliado(DIRECCION_AFILIADO);
        afiliado.ingresarTelefonoAfiliado(TELEFONO_AFILIADO);
        afiliado.clickBotonCrearAfiliados();

        //Assert
        expect(afiliado.mostrarTituloAlerta()).toEqual('Usuario creado con exito!');
        afiliado.clicBotonConfirmacionAlerta();
    });

    it('Deberia listar afiliados', () => {
        //Arrange-Act
        page.navigateTo();
        navBar.clickBotonAfiliados();
        //Assert
        expect(4).toBe(afiliado.contarAfiliados());
    });

    it('Deberia editar afiliado', () => {
        //Arrange
        const NOMBRE_AFILIADO_EDITADO = 'Jairo Espinoza';
        //Act
        page.navigateTo();
        navBar.clickBotonAfiliados();
        afiliado.clickBotonIrEditarAfiliado();
        afiliado.ingresarNombreAfiliado(NOMBRE_AFILIADO_EDITADO);
        afiliado.clickBotonEditarAfiliado();
        //Assert
        expect(afiliado.clicBotonConfirmacionAlerta()).toEqual('Usuario actualizado con exito!');
        afiliado.clicBotonConfirmacionAlerta();
    });
});
