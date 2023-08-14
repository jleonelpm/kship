import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private storageService:StorageService){}
  token:String="";
  
  
  ngOnInit(): void {
   var  user = this.storageService.getUser()
    this.token = user["token"];
  }

  

}
