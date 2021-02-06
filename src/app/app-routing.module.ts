import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "presentation",
    pathMatch: "full"
  },
  {
    path: "presentation",
    component: PresentationComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "assets",
        loadChildren: "./pages/assets/assets.module#AssetsModule"
      },
      {
        path: "maintenance",
        loadChildren: "./pages/maintenance/maintenance.module#MaintenanceModule"
      },
      {
        path: "soft",
        loadChildren: "./pages/soft/soft.module#SoftModule"
      },
      {
        path: "stat",
        loadChildren: "./pages/stat/stat.module#StatModule"
      },
      {
        path: "space",
        loadChildren: "./pages/space/space.module#SpaceModule"
      },
      {
        path: "account",
        loadChildren: "./pages/account/account.module#AccountModule"
      },
      {
        path: "system",
        loadChildren: "./pages/system/system.module#SystemModule"
      },
      {
        path: "examples",
        loadChildren: "./pages/examples/examples.module#ExamplesModule"
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "examples",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
