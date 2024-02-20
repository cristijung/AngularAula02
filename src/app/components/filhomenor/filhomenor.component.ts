import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filhomenor',
  standalone: true,
  imports: [],
  templateUrl: './filhomenor.component.html',
  styleUrl: './filhomenor.component.scss'
})
export class FilhomenorComponent {
  //O decorador @Output() é usado para criar um EventEmitter (classe),
  //permitindo que o componente filho emita eventos para o componente pai.
  @Output() mensagemEnviada = new EventEmitter<string>();

  //A propriedade mensagemEnviada é do tipo EventEmitter<string>,
  //indicando que ela emitirá eventos contendo strings.
  enviarMensagem() {
    this.mensagemEnviada.emit(
      'Olá papis!! -- Esta é uma mensagem enviada do filho para o pai'
    );
  }


}
