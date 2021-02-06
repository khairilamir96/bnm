import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { RouterModule } from "@angular/router";
import { PresentationComponent } from "./presentation.component";

@NgModule({
  declarations: [PresentationComponent],
  imports: [CommonModule, RouterModule, TooltipModule.forRoot(), BsDropdownModule.forRoot(), CollapseModule.forRoot()]
})
export class PresentationModule {}
