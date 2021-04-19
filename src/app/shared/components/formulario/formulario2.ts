import { ChangeDetectorRef, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioModel } from './formulario.model';


@Injectable()
export class Formulario2 {

    cadastroForm : FormGroup;

    constructor (private formBuilder : FormBuilder){

    }
  
    criarFormulario() : void {
        this.cadastroForm = this.formBuilder.group({
          date: ['', Validators.required],
          name: ['',Validators.required],
          hour: ['', Validators.required],
          email: ['', Validators.required],
          people: ['', Validators.required],
          phone: ['', Validators.required],
          message: ['', Validators.required]
        })
      }

      retornarDados() : FormularioModel {
        const data = this.cadastroForm.getRawValue() as FormularioModel;

        const formularioModel = new FormularioModel
        (data.date, data.name, data.hour, data.email, data.people, data.phone, data.message)

        return formularioModel;
      
      }

      imprimirFormulario() : void { 
        const form2 = new FormularioModel('15/04/2021', 'José', 
        '09:55', 'jose@uol.com.br', '2 people', '37 32221122')
         console.log(form2)
    }
    
}