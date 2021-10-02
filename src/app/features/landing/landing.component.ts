import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings, Settings } from 'src/app/app/app.settings';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'] 
})
export class LandingComponent implements OnInit {
 
  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router) {
    this.settings = this.appSettings.settings;  
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // document.getElementById('preloader').classList.add('hide');
  }

}
