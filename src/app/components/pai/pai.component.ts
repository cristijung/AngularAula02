import { Component, Input, Optional } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';
import { FilhomenorComponent } from '../filhomenor/filhomenor.component';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [FilhoComponent, FilhomenorComponent, CardComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent {
  mensagemParaFilho = '';

  //hook para o ciclo de vida
  ngOnInit() {
    this.mensagemParaFilho = 'Olá, meu filho! Vc é um componente bb!';
  }

  //para receber mensagme do componente filho menor
  mensagemRecebidaDoFilho: string = '';
  receberMensagem(mensagem: string) {
    this.mensagemRecebidaDoFilho = mensagem;
  }

  @Input() nome: string = '';
  @Input() @Optional() idade: number = 25;

}

// decorator @Input - vai ser responsável por fazer a alteração do pai para o filho
// hook ngOnInit() -- responsável por inicializar o ciclo de vida de um componente no Angular

