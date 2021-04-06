export class FormularioModel {
    constructor(
        public data: Date,
        public hora: string,
        public quantidadePessoas: number,
        public nome: string,
        public email: string,
        public telefone?: string,
        public mensagem?: string
    ) { }

    emailValido(): boolean {
        return true;
    }
}
