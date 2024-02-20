import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {
  //decorator responsável por receber os dados do componente pai
  @Input() mensagemDoPai: string = '';

}
