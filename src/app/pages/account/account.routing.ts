import { Routes } from "@angular/router";

import { ManagementComponent } from "./management/management.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { WarrantyComponent } from "./warranty/warranty.component";

export const AccountRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "management",
        component: ManagementComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "analysis",
        component: AnalysisComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "warranty",
        component: WarrantyComponent
      }
    ]
  }
];
