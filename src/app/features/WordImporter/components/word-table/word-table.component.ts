import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-word-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './word-table.component.html',
  styleUrls: ['./word-table.component.scss']
})
export class WordTableComponent {
  words: Word[] = [
    {text: 'home', translations: 'Zuhause', wordType: 'Noun'}
  ]

  displayedColumns: string[] = ['text', 'wordType', 'translations'];

}


interface Word {
  text: string;
  translations: string;
  wordType: string
}
