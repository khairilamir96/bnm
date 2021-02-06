import { Routes } from "@angular/router";

import { AppraisalComponent } from "./appraisal/appraisal.component";
import { PreventiveComponent } from "./preventive/preventive.component";
import { CorrectiveComponent } from "./corrective/corrective.component";

export const MaintenanceRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "appraisal",
        component: AppraisalComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "preventive",
        component: PreventiveComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "corrective",
        component: CorrectiveComponent
      }
    ]
  }
];
