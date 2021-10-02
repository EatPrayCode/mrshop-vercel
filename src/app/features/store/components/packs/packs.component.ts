import { Component, Inject, OnInit, PLATFORM_ID, ViewChild, OnChanges, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

import { isPlatformBrowser } from '@angular/common';
import { Pagination, Property } from 'src/app/mock-data/app.models';
import { mockData } from 'src/app/mock-data/mockJsonPacks';
import { AppSettings, Settings } from 'src/app/app/app.settings';
import { AppService } from 'src/app/app/app.service';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit, OnChanges {

  @ViewChild('sidenav') sidenav: any;
  public properties: Property[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 33.3;
  public count: number = 12;
  public sort: string = '';
  public searchFields: any;
  public removedSearchField: string = '';
  public message: string = '';

  public settings: Settings;

  @Input() inputData: any = mockData;
  @Output() packChange = new EventEmitter();

  packsLoaded: any = false;

  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    public mediaObserver: MediaObserver,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.settings = this.appSettings.settings;
  }

  ngOnChanges(changeRecord: SimpleChanges) {
    const record = changeRecord.inputData;
    const inputData = record.currentValue || '';
    if (this.inputData) {
      this.inputData = inputData;
      this.packsLoaded = true;
    }
  }

  ngOnInit() {
    this.getProperties();
  }

  ngOnDestroy() {}

  public getProperties() {
    this.appService.getProperties().subscribe((data: any) => {
      // let result = this.filterData(data); 
      let result = {
        data: data,
        pagination: new Pagination(1, this.count, 0, 2, 0, 0)
      };
      this.properties = result.data;
    })
  }

  public searchClicked() {
    this.properties.length = 0;
    this.getProperties();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}