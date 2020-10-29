import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'swagger', loadChildren: () => import('./modules/swagger/swagger.module').then(m => m.SwaggerModule) },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
