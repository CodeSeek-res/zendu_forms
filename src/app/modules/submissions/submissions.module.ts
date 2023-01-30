import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsTableComponent } from './components/submissions-table/submissions-table.component';
import { SubmissionsRoutingModule } from "./submissions-routing.module";
import { SubmissionsMainComponent } from './components/submissions-main/submissions-main.component';


@NgModule({
  declarations: [
    SubmissionsTableComponent,
    SubmissionsMainComponent
  ],
  imports: [
    CommonModule,
    SubmissionsRoutingModule
  ]
})
export class SubmissionsModule { }