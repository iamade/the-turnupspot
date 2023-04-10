import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  remember: boolean
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.login()
  }

  login(){
    localStorage.setItem('login', '1')
  }

  goToLanding(){
    this.router.navigate(['/landingpage'])
  }

  checkClicked(data){

  }

}
