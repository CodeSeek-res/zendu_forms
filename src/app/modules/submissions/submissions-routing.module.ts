import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubmissionsTableComponent } from "./components/submissions-table/submissions-table.component";
import { SubmissionsMainComponent } from "./components/submissions-main/submissions-main.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: SubmissionsMainComponent, children: [

    ]},
  { path: 'table', component: SubmissionsTableComponent},
  { path: 'map', component: SubmissionsTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule{

}
