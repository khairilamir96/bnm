import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import {MatStepperModule} from '@angular/material/stepper';

import { ManagementComponent } from "./management/management.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { WarrantyComponent } from "./warranty/warranty.component";

import { RouterModule } from "@angular/router";
import { AccountRoutes } from "./account.routing";

@NgModule({
  declarations: [ManagementComponent,AnalysisComponent,WarrantyComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatStepperModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(AccountRoutes)
  ]
})
export class AccountModule {}
