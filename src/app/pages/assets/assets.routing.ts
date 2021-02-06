import { Routes } from "@angular/router";

import { AssetComponent } from "./asset/asset.component";
import { ConsumComponent } from "./consum/consum.component";

export const AssetsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "asset",
        component: AssetComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "consum",
        component: ConsumComponent
      }
    ]
  }
];
