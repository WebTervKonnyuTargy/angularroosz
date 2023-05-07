import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
