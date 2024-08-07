import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalButonsComponent } from './modal-butons/modal-butons.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { 
  IgxButtonModule, 
  IgxIconModule, 
  IgxRippleModule, 
  IgxGridModule, 
  IgxButtonGroupModule, } from "igniteui-angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalButonsComponent,
    Hijo1Component,
    Hijo2Component,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    IgxGridModule,
    IgxButtonGroupModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
