import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  // esses objetos é o que eu vou referênciar no input.comp.html para validação dos campos

   @Input() label: string
   @Input() errorMessage: string

   input: any

   @ContentChild(NgModel) model: NgModel
   // atributo que puxa a referencia para usar FormControlName ao inves de NgModel
   @ContentChild(FormControlName) control: FormControlName


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    // se a diretiva ngModel não tiver disponivel pega a diretiva FormControlName:
    this.input = this.model || this.control
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado como uma diretiva ngModel ou um FormControlName')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
