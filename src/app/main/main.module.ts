import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MainRoutesModule } from "./main.routes.module";

@NgModule({
  imports: [
    CommonModule,
    MainRoutesModule
  ]
})
export class MainModule { }
