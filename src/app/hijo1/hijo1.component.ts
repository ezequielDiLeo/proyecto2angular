import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {

  @Input() buttons:any;
  @Output() abrirModal = new EventEmitter<void>();

  botonColor = 'purple'

  cambiarColor(){
    this.botonColor = this.botonColor == 'purple' ? 'red' : 'purple'
  }

  openModal(){
    this.abrirModal.emit();
  }

}
