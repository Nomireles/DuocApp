import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'correo',
    loadChildren: () => import('./correo/correo.module').then( m => m.CorreoPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },
  {
    path: 'correcto',
    loadChildren: () => import('./correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  },
  {
    path: 'miclase',
    loadChildren: () => import('./miclase/miclase.module').then( m => m.MiclasePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
