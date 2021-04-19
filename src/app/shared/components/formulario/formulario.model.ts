import { FormControl } from '@angular/forms';

export class FormularioModel {
    constructor(
        public date: string,public name: string, public hour: string, public email: string,
        public people:string,public phone: string, public message?: string) { 
            // this.validarSeMensagemVazia();
        }   

        // validarSeMensagemVazia() : void{
        //     if (!this.message){
        //         throw Error('Obrigatório a mensagem')
        //     }
        // }
}

