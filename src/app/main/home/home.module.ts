import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardServicoModule } from 'src/app/shared/components/card-servico/card-servico.module';
import { InfoInicialModule } from 'src/app/shared/components/info-inicial/info-inicial.module';
import { NavModule } from 'src/app/shared/components/nav/nav.module';
import { CardPratosModule } from 'src/app/shared/components/card-pratos/card-pratos.module';
import { FormularioModule } from 'src/app/shared/components/formulario/formulario.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardServicoModule,
    InfoInicialModule,
    NavModule,
    CardPratosModule,
    FormularioModule,
]
})
export class HomeModule { }
