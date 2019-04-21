import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {


  @Input() options: RadioOption[]

  value: any
  onChange: any
  onTouched: () => void;

  constructor() { }

  ngOnInit() {
  }
  // o angular mandou eu por isso obrigatoriamente:
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void{
    this.value = obj
  }
  // passa uma função pra gente que a gente tem que chamar sempre que o valor interno do componente mudar
  registerOnChange(fn: any): void {
    this.onChange = fn

  }

  // se quiser registrar que o usuário ENTROU no componente:
  // registerOnTouched(fn: any): void;




}
