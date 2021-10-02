import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app/app.service';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.scss']
})
export class MyPropertiesComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
    // this.appService.getProperties().subscribe(res => {
    //   this.initDataSource(res);
    // });    
  }

}