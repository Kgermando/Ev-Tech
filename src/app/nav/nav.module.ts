import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NavRoutingModule,

    SharedModule
  ]
})
export class NavModule { }
