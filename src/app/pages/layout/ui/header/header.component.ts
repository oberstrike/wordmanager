import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterLink, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <h1><a mat-button [routerLink]="'/main'" style="color: white"> WordManager</a></h1>
        <span class="menu-spacer"></span>
        <div>
          <a mat-button [routerLink]="'/main'">Main</a>
          <a mat-button [routerLink]="'/about'">About</a>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
