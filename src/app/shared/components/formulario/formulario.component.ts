import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Formulario2 } from './formulario2';
import { FormularioHttpService } from './formulario.http.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [ Formulario2, FormularioHttpService ]
})
export class FormularioComponent implements OnInit {

  constructor(private formularioHttpService: FormularioHttpService, public form2 : Formulario2) { }

  ngOnInit(): void {
    this.form2.criarFormulario();
    this.imprimirForm2();    
  }

  enviarFormulario() : void {
    this.formularioHttpService.enviarForm(this.form2.retornarDados())  
    .subscribe(() => {
      console.log(this.form2.cadastroForm.value)
    }, err => (console.log('Erro', err)))
    
  }

  
  imprimirForm2() {
    this.form2.imprimirFormulario();
  }
 

}
