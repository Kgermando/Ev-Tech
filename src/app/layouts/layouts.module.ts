import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServComponent } from './serv/serv.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LayoutsComponent, AboutComponent, ContactComponent, HomeComponent, PresentationComponent, ServComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ]
})
export class LayoutsModule { }
