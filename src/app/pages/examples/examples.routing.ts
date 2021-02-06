import { Routes } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { EditprofileComponent } from "./editprofile/editprofile.component";
export const ExamplesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "editprofile",
        component: EditprofileComponent
      }
    ]
  }
];
