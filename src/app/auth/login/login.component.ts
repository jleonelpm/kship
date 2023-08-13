import { Component, EventEmitter, inject, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service';
import { StorageService } from 'src/app/services/storage.service';
//https://www.bezkoder.com/angular-14-jwt-auth/#Authentication_Service
//https://jasonwatmore.com/post/2022/11/08/angular-http-request-error-handling-with-the-httpclient
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.minLength(5)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  });


 
 
  status:string='init';
 
  submitted:boolean=false;

  showPassword:boolean=false;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  authService = inject(AuthService);

   user?:User;

  constructor(private fb:FormBuilder, private router:Router, private storageService:StorageService){


  }
  
  ngOnInit(): void {
   if(this.storageService.isLoggedIn()){
    this.isSuccessful=true;
   }
  }

  doLogin(){
    this.submitted=true;
    if(this.loginForm.valid){
      this.status='loading';
      const{email,password} = this.loginForm.getRawValue();
       
      this.authService.login(email,password).subscribe(
        {
          next:data=>{
            
            this.storageService.saveUser(data);
            this.isSuccessful=true;
            this.isSignUpFailed=false;
            this.router.navigate(['/dashboard']);
            
          },
          error:err=>{
            switch(err.status){
              case 401:
                this.errorMessage="Usuario o Password incorrecto";
                break;
              default:
                this.errorMessage="Se produjo un error con el codigo" + err.status;
              
            }
            
            this.isSignUpFailed=true;
           
          }
        }
      );
      

    }
    else{
      alert('Formulario Incorrecto');
      this.loginForm.markAllAsTouched();
    }
  }

 isInvalid(name:string){
  const control = this.loginForm.get(name);
    return control?.invalid && control.touched;
 }

 hasError(name: string, errorCode: string) {
  const control = this.loginForm.get(name);
  return control?.hasError(errorCode) && control.touched;
}

reloadPage(): void {
  window.location.reload();
}

}
