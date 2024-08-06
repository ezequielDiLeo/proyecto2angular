import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-butons',
  templateUrl: './modal-butons.component.html',
  styleUrls: ['./modal-butons.component.css']
})
export class ModalButonsComponent {

  public buttons = {
    accion: 'abrir modal',
    style: 'cambiar color'
  }

  public modal = false;

  toggleModal(){
    this.modal = !this.modal
  }

}
