import { FormGroup } from "@angular/forms";

export interface FormularioBase<ModeloFormulario> {
    form: FormGroup;
    formularioValido(): boolean;
    desabilitarInputs(): void;
    habilitarInputs(): void;
    dadosFormulario(): ModeloFormulario;
    construirFormulario(): void;
}
