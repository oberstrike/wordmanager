import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {WordTableComponent} from "./components/word-table/word-table.component";

@Component({
  selector: 'app-word-importer',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, WordTableComponent,],
  templateUrl: './word-importer.component.html',
  styleUrls: ['./word-importer.component.scss']
})
export class WordImporterComponent {
  languages: Language[] = [
    {value: 'English'},
    {value: 'German'}
  ];

}

interface Language {
  value: string
}
