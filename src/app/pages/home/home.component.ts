import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Projeto de Angular';
  legend = 'Estudo de estrutura e Fluxo de Dados';
  photo = '../../../assets/angular.png';
  alt = 'Novo Logotipo do Angular 17';
  printscr = '../../../assets/1.png';
  altscr = 'Exemplo de Data Binding';
}
