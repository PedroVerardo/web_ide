import { Component, OnInit } from '@angular/core';
import { EditorState } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import {syntaxHighlighting, defaultHighlightStyle} from "@codemirror/language";
import {defaultKeymap} from "@codemirror/commands";
import {EditorView, basicSetup} from "codemirror";
import { oneDark, oneDarkHighlightStyle } from '@codemirror/theme-one-dark';

@Component({
  selector: 'app-editor',
  standalone: true,
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  private editor!: EditorView;
  public output = '';

  ngOnInit() {
    const editorElement = document.querySelector('#editor');
    if (!editorElement) {
      console.error('Elemento #editor não encontrado!');
      return;
    }

    this.editor = new EditorView({
      state: EditorState.create({
        doc: 'console.log("Hello, CodeMirror!");', // código base
        extensions: [basicSetup,
          oneDark,
          javascript(),
          syntaxHighlighting(oneDarkHighlightStyle), 
          keymap.of(defaultKeymap)],
      }),
      parent: editorElement,
    });
  }

  runCode() {
    if (this.editor) {
      const code = this.editor.state.doc.toString();
      console.log('Código executado:', code);
      fetch('localhost:4848', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      })
      .then(response => response.json())
      .then(data => {
        this.output = data.result;
        console.log('Resultado da execução:', this.output);
      })
      .catch(error => {
        console.error('Erro ao executar o código:', error);
      });
    }
  }

}
