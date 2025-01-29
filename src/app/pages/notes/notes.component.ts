import { Component } from '@angular/core';
import { TextEditorComponent } from '../../components/text-editor/text-editor.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-notes',
  imports: [NavbarComponent, TextEditorComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

}
