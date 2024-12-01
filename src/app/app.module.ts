import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module'; // Importa o EditorModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule // Adiciona o módulo que contém o EditorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
