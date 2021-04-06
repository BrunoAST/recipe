import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FormularioBase } from "src/app/shared/form/formulario-base";
import { FormularioModel } from "../models/formulario.model";

@Injectable()
export class FormularioService implements FormularioBase<FormularioModel> {
    public form: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    public formularioValido(): boolean {
        return this.form.valid;
    }

    public desabilitarInputs(): void {
        this.form.disable();
    }

    public habilitarInputs(): void {
        this.form.enable();
    }

    public dadosFormulario(): FormularioModel {
        const formulario = this.form.getRawValue();

        return new FormularioModel(
            formulario.data,
            formulario.hora,
            formulario.quantidadePessoas,
            formulario.nome,
            formulario.email,
            formulario.telefone,
            formulario.mensagem,
        );
    }

    public construirFormulario(): void {
        this.form = this._formBuilder.group({
            data: [null, [Validators.required]],
            hora: [null, [Validators.required]],
            quantidadePessoas: [2, [Validators.required]],
            nome: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            telefone: [null],
            mensagem: [null, [Validators.maxLength(200)]]
        });
    }
}
