export class Afiliado {
     id:number;
     nombre:string;
     tipoDocumento:string;
     numeroDocumento:string;
     fechaNacimiento:string;
     email:string;
     direccion:string;
     telefono:string;
     fechaRegistro:string;

    constructor(id:number, nombre:string,tipoDocumento:string,numeroDocumento:string,fechaNacimiento:string,
        email:string,direccion:string,telefono:string,fechaRegistro:string,) {
        this.id = id;
        this.nombre = nombre;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaRegistro = fechaRegistro;
    }
}
