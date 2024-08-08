import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit{
  
  @Output() abrirModal = new EventEmitter<void>();
  
  public form: FormGroup = new FormGroup({})


  ngOnInit(): void {
    this.formulario()
  }

  formulario(){
    this.form = new FormGroup({
      dot:new FormControl('', Validators.required),
      separator:new FormControl('', Validators.required),
      date:new FormControl('', [Validators.required]),
      Nombre:new FormControl('', [Validators.required, Validators.minLength(4)]),
      Apellido:new FormControl('', [Validators.required, Validators.minLength(4)]),
      email:new FormControl('', [Validators.required, Validators.email]),
    })
  }

  public toFixed = (value: string | number | undefined | null): number => {
    const formattedValue = String(value).split(' ').join('');
    if (String(value).includes('.') && String(value).split('.').length === 2) {
    const decimal = String(value).split('.')[1]?.length;
    if (decimal && decimal > 2) {
    return Number(parseFloat(formattedValue).toFixed(2));
    }
    }
    return Number(formattedValue);
    };

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  toggleModal(){
    this.abrirModal.emit()
  }

}
