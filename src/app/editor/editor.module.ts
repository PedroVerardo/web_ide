import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component'; // Standalone Component

@NgModule({
  imports: [
    CommonModule,
    EditorComponent // Importe o standalone component
  ],
  exports: [
    EditorComponent // Exporte o EditorComponent para ser usado em outros lugares
  ]
})
export class EditorModule { }
