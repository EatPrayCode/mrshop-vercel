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

@NgModule({
  declarations: [
    BlankComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    NgBottomNavigationModule,
    AuthModule,
  ],
  exports: [
    BlankComponent,
    PagesComponent
  ]
})
export class LayoutsModule { }
