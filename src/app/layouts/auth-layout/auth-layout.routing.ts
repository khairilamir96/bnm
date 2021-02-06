import { Routes } from "@angular/router";

import { RegisterComponent } from "../../pages/examples/register/register.component";
import { PresentationComponent } from "../../pages/presentation/presentation.component";
import { ForgotComponent } from "../../pages/examples/forgot/forgot.component";

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "forgot",
        component: ForgotComponent
      }
    ]
  }
];
