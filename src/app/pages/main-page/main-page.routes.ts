import {Routes} from "@angular/router";
import {MainPageComponent} from "./main-page.component";
import {WordImporterComponent} from "../../features/WordImporter/word-importer.component";

export const MAIN_PAGE_ROUTES: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'importer', component: WordImporterComponent}
]
