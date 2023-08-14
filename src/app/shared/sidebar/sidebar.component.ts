import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private storageService:StorageService,private router:Router){}

  public logOut(){
    this.storageService.clean();
    this.router.navigate(['']);
    
  }
}
