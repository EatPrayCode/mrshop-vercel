import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app/app.settings';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  @Input('menuItems') menuItems: any[] = [];
  @Input('menuParentId') menuParentId: any;
  parentMenu: Array<any> = [];
  public settings: Settings;
  constructor(public appSettings: AppSettings, public menuService: MenuService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.parentMenu = this.menuItems.filter((item: { parentId: any; }) => item.parentId == this.menuParentId);
  }

  onClick(menuId: any) {
    this.menuService.toggleMenuItem(menuId);
    this.menuService.closeOtherSubMenus(this.menuItems, menuId);
  }

}
