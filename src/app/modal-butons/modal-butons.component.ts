import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-butons',
  templateUrl: './modal-butons.component.html',
  styleUrls: ['./modal-butons.component.css']
})
export class ModalButonsComponent implements OnInit{

  ngOnInit(): void {
    this.buttons
  }

  public buttons = {
    accion: 'abrir modal',
    style: 'cambiar color'
  }

  public modal = false;

  toggleModal(){
    this.modal = !this.modal
  }

}
