import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tus_client';
  loginpage = false

  ngOnInint() { 
this.getLogindetails()
  }

  getLogindetails(){
    console.log('loginpage 1', this.loginpage);
    
    if(localStorage.getItem('login')){
      this.loginpage = true
      console.log('loginpage 2', this.loginpage);
    }
  }
}
