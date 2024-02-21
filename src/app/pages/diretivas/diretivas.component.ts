import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
//import { Data } from '../../services/'

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.scss'
})
export class DiretivasComponent {
  title = 'Renderizando Condicionais no Angular';
  //exemplo simples usando para renderização de diretivas estruturais
  //diretiva condicional
  stitle = 'Meu Login';
  isLoggedIn = false;

  constructor() {}
  ngOnInit() {}

  list = 'Lista de Ingredientes'

  ingredientList = [
    { nome: 'Ovos', quantidade: '12 unidades de '},
    { nome: 'Banana', quantidade: '8 cachos de '},
    { nome: 'Melância', quantidade: '4 unidades de '},
    { nome: 'Uvas', quantidade: '22 cachos de '},
    { nome: 'Iogurte', quantidade: '2 bandejas de '},
  ];

}
