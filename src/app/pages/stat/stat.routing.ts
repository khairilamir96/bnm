import { Routes } from "@angular/router";

import { StatComponent } from "./stat.component";

export const StatRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: StatComponent
      }
    ]
  }
];
