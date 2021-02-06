import { Routes } from "@angular/router";

import { SpaceComponent } from "./space.component";

export const SpaceRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SpaceComponent
      }
    ]
  }
];
