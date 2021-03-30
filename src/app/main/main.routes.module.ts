import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const ROTAS: Routes = [
  // TODO: CARREGAR A PAGINA PRINCIPAL
  // {
  //   path: '',
  //   component:
  // }
];

@NgModule({
  imports: [RouterModule.forChild(ROTAS)],
  exports: [RouterModule]
})
export class MainRoutesModule { }
