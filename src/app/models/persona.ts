export class Persona{
    // PARA realizar el binding automatico
    // las propiedades deben llamarse como el JSON
    //    url = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
    constructor(
        public IdPersona: number,
        public Nombre: string,
        public Email: string,
        public Edad: number,
    ) {
    }
}