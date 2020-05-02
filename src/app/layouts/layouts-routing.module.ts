import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServComponent } from './serv/serv.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: LayoutsComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'service', component: ServComponent },
    { path: 'presentation', component: PresentationComponent },
    { path: 'profile', component: ProfileComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
