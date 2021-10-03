import { DemoMaterialModule } from 'src/app/shared/material.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from '../core/auth/auth.module';
import { NgBottomNavigationModule } from 'ng-bottom-navigation';

import { BlankComponent } from './blank/blank.component';
import { PagesComponent } from './pages/pages.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FullScreenComponent } from './components/fullscreen/fullscreen.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { CustomisePackModule } from '../features/checkout/components/customise-pack/customise-pack.module';

@NgModule({
  declarations: [
    BlankComponent,
    PagesComponent,
    MenuComponent,
    UserMenuComponent,
    FullScreenComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgBottomNavigationModule,
    AuthModule,
    CustomisePackModule
  ],
  exports: [
    BlankComponent,
    PagesComponent,
    MenuComponent,
    UserMenuComponent,
    FullScreenComponent,
    BreadcrumbComponent
  ]
})
export class LayoutsModule { }
