import { Component } from '@angular/core';
import { EditorComponent } from './editor/editor.component'; // Importa o EditorComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Aplicação Standalone';
}
