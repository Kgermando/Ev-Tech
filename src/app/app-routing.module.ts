import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/guard/auth.guard';


const routes: Routes = [

  { path: 'nav', loadChildren: () => import('../app/nav/nav.module').then(m => m.NavModule)},
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]},

  { path: '', redirectTo: 'nav', pathMatch: 'full'},
  { path: '**', redirectTo: 'nav', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
