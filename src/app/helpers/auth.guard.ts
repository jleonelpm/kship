import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { StorageService } from '../services/storage.service';




export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);
 
  if(storageService.isLoggedIn()){
    return true;
  }
  else{
    alert("Requiere iniciar sesion para acceder");
    router.navigate(['']);
    return false;
  }
  
};
