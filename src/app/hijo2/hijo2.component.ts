import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {

  formData = {
    Nombre: '',
    Apellido: '',
    email: '',
    DNI: ''
  };

  submitForm() {
    console.log(this.formData)
  }

}
