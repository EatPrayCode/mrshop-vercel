import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FirebaseModule } from './firebase.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AuthModule,
    FirebaseModule
  ]
})
export class CoreModule { }
