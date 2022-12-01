import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {bootstrapApplication} from "@angular/platform-browser";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {LayoutModule} from "@angular/cdk/layout";
import {provideRouter, Route} from "@angular/router";
import {routes} from "./app/pages/layout/layout.routes";

const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => import("./app/pages/layout/layout.component").then((m) => m.LayoutComponent),
    loadChildren: () => import("./app/pages/layout/layout.routes").then((m) => m.routes),
  },
];

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(appRoutes),
      provideAnimations()
    ]
  }
).catch(err => console.error(err))
