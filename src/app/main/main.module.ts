import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { Formulario2 } from '../shared/components/formulario/formulario2';
import { HomeModule } from './home/home.module';
import { MainRoutesModule } from "./main.routes.module";

@NgModule({
  imports: [
    CommonModule,
    MainRoutesModule,
    HomeModule,
    HttpClientModule
  ]  
})
export class MainModule { }
