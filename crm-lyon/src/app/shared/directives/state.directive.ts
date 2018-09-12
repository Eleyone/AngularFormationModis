import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: State;
  @HostBinding('class') nameclass;

  constructor() { }

  ngOnChanges() {
    this.nameclass = this.formatClassName(this.appState);
  }

  protected formatClassName(toFormat: string): string {
    return'state-' + toFormat.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s]/g, '-').toLowerCase().trim();
  }

}
