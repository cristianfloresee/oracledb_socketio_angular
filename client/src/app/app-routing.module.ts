import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { AdminComponent } from './main-layouts/admin/admin.component';


const routes: Routes = [
  {
    //RUTA PADRE
    path: '',
    component: AdminComponent,
    //RUTAS HIJO
    /*children: [{
      path: '',
      loadChildren: './pages/pages.module#PagesModule'
    }]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
