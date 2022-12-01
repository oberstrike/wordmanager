import {Component} from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@Component({
  standalone: true,
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  imports: [
    RouterLink, RouterModule, MatSidenavModule, MatListModule
  ],
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

}
