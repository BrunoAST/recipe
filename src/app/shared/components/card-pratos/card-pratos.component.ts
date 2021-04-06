import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-pratos',
  templateUrl: './card-pratos.component.html',
  styleUrls: ['./card-pratos.component.scss']
})
export class CardPratosComponent implements OnInit {

  constructor() { }

  imagens = [
    {
    nome: 'Salad',
    price: 'R$ 30,00',
    imagem: "../../../../assets/Prato1.PNG",
    text: '25% offer',
    stars: [1,2,3]
    },
    {
    nome: 'Rib',
    price: 'R$ 30,00',
    imagem: "../../../../assets/Prato2.PNG",
    text: '25% offer',
    stars: [1,2,3,4,5]
    },
    {
    nome: 'Food',
    price: 'R$ 30,00',
    imagem: "../../../../assets/Prato3.PNG",
    text: '25% offer',
    stars: [1,2,3,4]
    },
    {
    nome: 'Meat',
    price: 'R$ 30,00',
    imagem: "../../../../assets/Prato4.PNG",
    text: '25% offer',
    stars: [1,2,3]
    },
    {
    nome: 'Meat',
    price: 'R$ 30,00',
    imagem: "../../../../assets/Prato4.PNG",
    text: '25% offer',
    stars: [1,2,3]
    },
    {
    nome: 'Meat',
    price: 'R$ 30,00',
    imagem: "../../../../assets/Prato4.PNG",
    text: '25% offer',
    stars: [1,2,3]
    }
  ]

  @ViewChild('imagensContainer',{read:ElementRef}) imagem:ElementRef<any>;

  ngOnInit(): void {
  }

  voltar(event: Event): void{
    (this.imagem.nativeElement as HTMLElement)
    .scrollTo({left:(this.imagem.nativeElement.scrollLeft - 200),behavior:'smooth'})
  }

  avancar (event: Event) : void {
    (this.imagem.nativeElement as HTMLElement)
    .scrollTo({left:(this.imagem.nativeElement.scrollLeft + 200),behavior:'smooth'})
    
  }

}
