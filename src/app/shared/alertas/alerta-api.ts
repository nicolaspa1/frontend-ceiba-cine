import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

export class AlertaAPI {

	static procesoExitoso(titulo: string): Promise<SweetAlertResult> {
		return Swal.fire({
			title:titulo,
			width: 600,
			padding: '3em',
			background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
			backdrop: `
			  rgba(0,0,123,0.4)
			  url(https://sweetalert2.github.io/images/nyan-cat.gif)
			  left top
			  no-repeat
			`
		  })
	}

	static alerta(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('warning', titulo, texto, textoConfirmacion);
	}

	static error(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('error', titulo, texto, textoConfirmacion);
	}

	static informativo(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('info', titulo, texto, textoConfirmacion);
	}

	static interrogacion(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('question', titulo, texto, textoConfirmacion);
	}

	static confirmacion(titulo: string, texto?: string, textoConfirmacion?: string, textoCancelacion?: string): Promise<SweetAlertResult> {
		return Swal.fire({
		title: titulo,
		text: texto,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: textoConfirmacion,
		cancelButtonText: textoCancelacion
		});
	}

	private static generate(icon:SweetAlertIcon ,titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return Swal.fire({
			icon,
			title: titulo,
			text: texto,
			confirmButtonText: textoConfirmacion || 'Aceptar'
		});
	}
}