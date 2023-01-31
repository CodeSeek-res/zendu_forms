import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsTableComponent } from './components/submissions-table/submissions-table.component';
import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsMainComponent } from './components/submissions-main/submissions-main.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SubmissionsTableComponent, SubmissionsMainComponent],
  imports: [CommonModule, SubmissionsRoutingModule, SharedModule],
})
export class SubmissionsModule {}
