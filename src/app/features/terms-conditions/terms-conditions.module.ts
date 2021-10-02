import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TermsConditionsComponent } from './terms-conditions.component';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', component: TermsConditionsComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [TermsConditionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TermsConditionsModule { }
