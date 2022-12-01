import {Route} from "@angular/router";

export const routes: Route[] = [
  {
    path: "main",
   // loadComponent: () => import("../main-page/main-page.component").then((m) => m.MainPageComponent),
    loadChildren: () => import("../main-page/main-page.routes").then((m) => m.MAIN_PAGE_ROUTES)
  },
  {
    path: "about",
    loadComponent: () => import("../about-page/about-page.component").then((m) => m.AboutPageComponent),
  },
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
];
