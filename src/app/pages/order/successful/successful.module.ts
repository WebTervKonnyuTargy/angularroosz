import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessfulRoutingModule } from './successful-routing.module';
import { SuccessfulComponent } from './successful.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SuccessfulComponent
  ],
  imports: [
    CommonModule,
    SuccessfulRoutingModule,
    MatButtonModule
  ]
})
export class SuccessfulModule { }
