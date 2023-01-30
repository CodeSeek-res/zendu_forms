import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule
  ],
  exports: [
    AngularMaterialModule,
    NavBarComponent,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule
  ]
})
export class SharedModule { }
