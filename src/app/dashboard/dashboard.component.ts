import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  scrHeight:any;
  scrWidth:any;
  isMobileDevice = false;
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.checkDevice();
  }
  constructor() { }

  ngOnInit(): void {
    // this.getScreenSize()
    this.checkDevice();
  }

  checkDevice(){
    console.log(window.innerWidth);
    
    if(window.innerWidth < 1200){
      this.isMobileDevice = true;
    } else {
      this.isMobileDevice = false
    }
  }
}
