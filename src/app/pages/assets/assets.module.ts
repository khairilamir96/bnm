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

import { AssetComponent } from "./asset/asset.component";
import { ConsumComponent } from "./consum/consum.component";

import { RouterModule } from "@angular/router";
import { AssetsRoutes } from "./assets.routing";
@NgModule({
  declarations: [
    AssetComponent,
    ConsumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AssetsRoutes),
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
    MatDatepickerModule,
    MatNativeDateModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ]
})
export class AssetsModule {}

