import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardServicoModule } from 'src/app/shared/components/card-servico/card-servico.module';
import { InfoInicialModule } from 'src/app/shared/components/info-inicial/info-inicial.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardServicoModule,
    InfoInicialModule
  ]
})
export class HomeModule { }
