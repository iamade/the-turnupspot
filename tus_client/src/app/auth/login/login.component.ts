import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  remember: boolean;
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
   this.initializeLoginForm()
  }

  initializeLoginForm(){
    this.loginForm = this.fb.group({
      email:['', 
      [Validators.required, 
        Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$'),
      ],],
      password:[
        '',
        [
          Validators.required,
          Validators.pattern('(?=^.{6,30}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;?/&gt;.&lt;,])(?!.*\\s).*$'),
        ],
      ],
    })

  }

  login(body){
    // localStorage.setItem('login', '1')
    console.log('login', body);
    
  }

  goToLanding(){
    this.router.navigate(['/landingpage'])
  }

  checkClicked(data){

  }

}
