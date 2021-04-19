import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormularioModel } from './formulario.model';
import { delay } from 'rxjs/operators'

@Injectable()
export class FormularioHttpService {
 
  constructor(private http: HttpClient) { }

  enviarForm (param : FormularioModel) : Observable <any>  {
    // return this.http.post<FormularioModel>('http://jsontest.com', param)
    return new Observable (observer => {
      observer.next('Mensagem teste')
      observer.complete()
    }).pipe(delay(1000))
  }
}
