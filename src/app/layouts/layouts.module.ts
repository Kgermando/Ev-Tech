import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Packages
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServComponent } from './serv/serv.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';


export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [LayoutsComponent, AboutComponent, ContactComponent, HomeComponent, PresentationComponent, ServComponent, ProfileComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,

    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class LayoutsModule { }
