import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
const routes: Routes = [
  {path:'first-component',component:Comp1Component},
  {path:'second-component',component:Comp2Component},
  {path:'third-component',component:Comp3Component},
  {path:'fourth-component',component:Comp4Component},
  {path:'fifth-component',component:Comp5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
