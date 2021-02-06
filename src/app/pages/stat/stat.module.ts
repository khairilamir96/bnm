import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import {MatStepperModule} from '@angular/material/stepper';

import { StatComponent } from "./stat.component";

import { RouterModule } from "@angular/router";
import { StatRoutes } from "./stat.routing";

@NgModule({
  declarations: [StatComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatStepperModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(StatRoutes)
  ],
  exports: [StatComponent]
})
export class StatModule {}
