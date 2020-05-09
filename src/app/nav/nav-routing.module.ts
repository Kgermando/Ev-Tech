import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/component/not-found/not-found.component';
import { NavComponent } from './nav.component';


const routes: Routes = [
  { path: '', component: NavComponent, children: 
    [
      { path: 'layouts', loadChildren: () => import('../layouts/layouts.module').then(m => m.LayoutsModule)},
      { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},

      { path: '', redirectTo: 'layouts', pathMatch: 'full'},
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
