import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation:true
  };
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen:boolean = true;
  public links = [ 
    { name: 'Orders', href: 'my-properties', icon: 'person' },
    { name: 'Favorites', href: 'favorites', icon: 'favorite' },
    { name: 'Logout', href: '/login', icon: 'power_settings_new' },
  ];
  
  constructor(public router:Router) { }

  ngOnInit() {
    if(window.innerWidth < 960){
      this.sidenavOpen = false;
    };
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {  
        if(window.innerWidth < 960){
          this.sidenav.close(); 
        }
      }                
    });
  } 


}
