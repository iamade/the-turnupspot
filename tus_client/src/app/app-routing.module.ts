import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { LandingpageComponent } from "./pages/landingpage/landingpage.component";
const routes: Routes = [
{path: '', pathMatch:'full', redirectTo: 'landingpage'},
{path: 'landingpage', loadChildren:()=> import('./pages/landingpage/landingpage.module').then(m => m.LandingpageModule)},
{path: 'auth', loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)},
// {path: 'sign-up', loadChildren:() => import('./in/loginauth/signup/signup.module').then(m => m.SignupModule)}
// {path: '**', component: LandingpageComponent, }
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule {

}