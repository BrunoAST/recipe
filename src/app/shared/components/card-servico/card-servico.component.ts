import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.scss']
})
export class CardServicoComponent implements OnInit {

  imagens = [
  {
  nome: 'Best Dishes',
  imagem: "../../../../assets/dish.svg"
  },
  {
  nome: 'Chicken Burger',
  imagem: "../../../../assets/turkey.svg"
  },
  {
  nome: 'Pan Pizza',
  imagem: "../../../../assets/pizza.svg"
  },
  {
  nome: 'Fish',
  imagem: "../../../../assets/fish.svg"
  },
  {
  nome: 'Drinks & Bar',
  imagem: "../../../../assets/cocktail.svg"
  },


]


  constructor() { }

  ngOnInit(): void {
  }

}
