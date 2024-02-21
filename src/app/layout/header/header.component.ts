import { Component } from '@angular/core';
import { DestaqueDirective } from './diretivaEstilo/destaque.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DestaqueDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'Angular 17';
  legend = 'Algum estilo';

}
