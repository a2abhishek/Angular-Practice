import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './form/login.component';
import { RegisterComponent } from './form/register.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PersonComponent } from './person/person.component';
import { ReactiveRegisterComponent } from './form/reactive-register.component';


const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'ReactiveRegister',component:ReactiveRegisterComponent},
  {path:'PersonDetail',component:PersonComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent, RegisterComponent, PageNotFoundComponent, PersonComponent, ReactiveRegisterComponent
]