import { Component, OnInit } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app/app.settings';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent implements OnInit {

  public currencies = ['B2B', 'B2C'];
  public currency: any;
  public settings: Settings;

  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.currency = this.settings.customerType;
  }

  public changeCurrency(currency: any) {
    this.currency = currency;
    this.settings.currency = currency;
  }

}
