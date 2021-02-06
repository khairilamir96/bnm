import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import {MatStepperModule} from '@angular/material/stepper';

import { SpaceComponent } from "./space.component";

import { RouterModule } from "@angular/router";
import { SpaceRoutes } from "./space.routing";

@NgModule({
  declarations: [SpaceComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatStepperModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(SpaceRoutes)
  ],
  exports: [SpaceComponent]
})
export class SpaceModule {}
