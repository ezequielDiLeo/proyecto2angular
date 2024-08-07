import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component{

  
  @Output() abrirModal = new EventEmitter<void>();
  isVisible: boolean = false;
  formData: any = {};

  submitForm() {
    console.log(this.formData)
  }

  toggleModal(){
    this.abrirModal.emit()
  }

}
