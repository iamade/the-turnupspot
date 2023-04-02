import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{'path': '', component:SignupComponent}])
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
