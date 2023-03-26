import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { LandingpageComponent } from "./pages/landingpage/landingpage.component";
const routes: Routes = [
{path: '', pathMatch:'full', redirectTo: 'landingpage'},
{path: 'landingpage', loadChildren:()=> import('./pages/landingpage/landingpage.module').then(m => m.LandingpageModule)},
{path: 'login', loadChildren:()=>import('./pages/login/login.module').then(m => m.LoginModule)},
// {path: '**', component: LandingpageComponent, }
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule {

}