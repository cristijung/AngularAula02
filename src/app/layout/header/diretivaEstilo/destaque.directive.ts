import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  standalone: true
})
export class DestaqueDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#f00';
    this.el.nativeElement.style.color = '#fff';
  }

}
