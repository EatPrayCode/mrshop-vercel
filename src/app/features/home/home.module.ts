import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SidenavService } from './sidenav.service';
import { OrganiserListComponent } from './components/organiser-list/organiser-list.component';
import { ChoosOrganiserCategoriesComponent } from './components/choose-organiser-categories/choose-organiser-categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    LeftMenuComponent,
    OrganiserListComponent,
    ChoosOrganiserCategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    LeftMenuComponent,
    OrganiserListComponent,
    ChoosOrganiserCategoriesComponent
  ],
  providers: [ SidenavService ],
})
export class HomeModule { }
