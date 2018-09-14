import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormSubmitComponent } from '../components/form-submit/form-submit.component';
import { FormCancelComponent } from '../components/form-cancel/form-cancel.component';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormHiddenComponent } from '../components/form-hidden/form-hidden.component';
import { FormSelectComponent } from '../components/form-select/form-select.component';

const components = {
  submit: FormSubmitComponent,
  cancel: FormCancelComponent,
  input: FormInputComponent,
  hidden: FormHiddenComponent,
  select: FormSelectComponent
};


@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() config;

  @Input() group: FormGroup;

  component;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
