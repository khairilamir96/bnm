import { Routes } from "@angular/router";

import { SoftComponent } from "./soft.component";

export const SoftRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SoftComponent
      }
    ]
  }
];
