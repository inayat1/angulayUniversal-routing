import { Routes, RouterModule } from '@angular/router';
import { Fruits } from './fruits/fruits.component';
import { Landing } from './landing/landing.component';

const Route_Const:Routes=[
  {path:'', redirectTo:'landing', pathMatch:'full'},
  {path:'frucomp', component: Fruits},
  {path:'landing', component: Landing},
]

export const routing = RouterModule.forRoot(Route_Const)