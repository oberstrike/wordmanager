import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-word-importer',
  standalone: true,
  imports: [CommonModule, MatTableModule, ],
  templateUrl: './word-importer.component.html',
  styleUrls: ['./word-importer.component.scss']
})
export class WordImporterComponent {

}
