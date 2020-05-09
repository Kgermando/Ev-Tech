import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';


const routes: Routes = [

  { path: 'nav', loadChildren: () => import('../app/nav/nav.module').then(m => m.NavModule)},
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)},


  { path: '', redirectTo: 'nav', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
