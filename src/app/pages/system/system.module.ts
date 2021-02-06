import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { BsDropdownModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ModalModule } from "ngx-bootstrap/modal";

import { AuditComponent } from "./audit/audit.component";
import { UserComponent } from "./user/user.component";

import { RouterModule } from "@angular/router";
import { SystemRoutes } from "./system.routing";
@NgModule({
  declarations: [
    UserComponent,
    AuditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SystemRoutes),
    BsDropdownModule.forRoot(),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ]
})
export class SystemModule {}
