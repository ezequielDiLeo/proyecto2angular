import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit{

  
  @Output() abrirModal = new EventEmitter<void>();
  isVisible: boolean = false;
  formData: any = {};
  
  public form: FormGroup = new FormGroup({})


  ngOnInit(): void {
    this.formulario()
  }

  formulario(){
    this.form = new FormGroup({
      Nombre:new FormControl('', [Validators.required, Validators.minLength(4)]),
      Apellido:new FormControl('', [Validators.required, Validators.minLength(4)]),
      email:new FormControl('', [Validators.required, Validators.email]),
    })
  }

  submitForm() {
    console.log(this.formData)
  }

  toggleModal(){
    this.abrirModal.emit()
  }

}
