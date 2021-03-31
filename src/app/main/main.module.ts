import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeModule } from './home/home.module';
import { MainRoutesModule } from "./main.routes.module";

@NgModule({
  imports: [
    CommonModule,
    MainRoutesModule,
    HomeModule
  ]
})
export class MainModule { }
