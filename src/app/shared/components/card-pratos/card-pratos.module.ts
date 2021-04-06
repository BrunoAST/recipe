import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPratosComponent } from './card-pratos.component';



@NgModule({
  declarations: [CardPratosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardPratosComponent
  ]
})
export class CardPratosModule { }
