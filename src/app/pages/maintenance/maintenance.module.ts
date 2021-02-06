import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

import { AppraisalComponent } from "./appraisal/appraisal.component";
import { PreventiveComponent } from "./preventive/preventive.component";
import { CorrectiveComponent } from "./corrective/corrective.component";

import { RouterModule } from "@angular/router";
import { MaintenanceRoutes } from "./maintenance.routing";
@NgModule({
  declarations: [
    AppraisalComponent,
    PreventiveComponent,
    CorrectiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MaintenanceRoutes),
    BsDropdownModule.forRoot(),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule, 
    MatStepperModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ]
})
export class MaintenanceModule {}

