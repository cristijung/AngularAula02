import { Component } from '@angular/core';
import { PaiComponent } from '../../components/pai/pai.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PaiComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
