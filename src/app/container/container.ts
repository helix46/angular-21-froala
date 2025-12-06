import { Component } from '@angular/core';
import { HtmlEditorComponent } from '../html-editor/html-editor.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-container',
  imports: [HtmlEditorComponent, ReactiveFormsModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {
  formGroup = new FormGroup({
    editor: new FormControl(''),
  });
}
