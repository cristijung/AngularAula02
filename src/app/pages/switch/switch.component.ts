import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {

  item: { status: StatusItem } = { status: StatusItem.INATIVO };

  constructor() {}
}

interface Usuario {
  tipo: string;
  nome: string;
}

enum StatusItem {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
  PENDENTE = 'PENDENTE',
}
