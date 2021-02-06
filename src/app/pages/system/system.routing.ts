import { Routes } from "@angular/router";

import { AuditComponent } from "./audit/audit.component";
import { UserComponent } from "./user/user.component";

export const SystemRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "user",
        component: UserComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "audit",
        component: AuditComponent
      }
    ]
  }
];
