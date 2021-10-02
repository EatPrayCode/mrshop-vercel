import { StoreComponent } from './components/store/store.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';
import { CustomerTypeComponent } from './components/customer-type/customer-type.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SidenavService } from './sidenav.service';
import { ChooseCategoriesComponent } from './components/choose-categories/choose-categories.component';
import { PacksComponent } from './components/packs/packs.component';

@NgModule({
  declarations: [
    StoreComponent,
    CustomerTypeComponent,
    LeftMenuComponent,
    ChooseCategoriesComponent,
    PacksComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
  ],
  exports: [
    StoreComponent,
    CustomerTypeComponent,
    LeftMenuComponent,
    ChooseCategoriesComponent,
    PacksComponent
  ],
  providers: [ SidenavService ],
})
export class StoreModule { }
