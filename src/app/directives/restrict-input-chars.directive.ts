import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[restrictChars]'
})
export class RestrictCharsDirective {

  constructor(private elementRef?: ElementRef) { }
  @Input() restrictChars: string;

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    if (this.restrictChars === 'special') {
      this.restrictSpecialCharacters(event);
    }

  }

  restrictSpecialCharacters(event) {
    const e = <KeyboardEvent>event;
    if (e.key === 'Tab' || e.key === 'TAB')
      return;
    const k = event.keyCode;
    // other than special characters
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57))
      return;
    e.preventDefault();
  }

}
