import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthLayoutRoutes } from "./auth-layout.routing";

import { RegisterComponent } from "../../pages/examples/register/register.component";
import { ForgotComponent } from "../../pages/examples/forgot/forgot.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
  ],
  declarations: [
    RegisterComponent,
    ForgotComponent
  ]
})
export class AuthLayoutModule {}
