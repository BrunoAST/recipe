import { Component, OnInit } from '@angular/core';

import { FormularioService } from './services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [FormularioService]
})
export class FormularioComponent implements OnInit {

  constructor(public formularioService: FormularioService) { }

  ngOnInit(): void {
    this._inicializarFormulario();

    this.formularioService.form.valueChanges.subscribe((ABC) => {
      console.log('ABC', ABC);
    });
  }
  
  private _inicializarFormulario(): void {
    this.formularioService.construirFormulario();
  }
}
