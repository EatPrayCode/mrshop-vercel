import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';  
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CustomisePackModule } from './components/customise-pack/customise-pack.module';

export const routes = [
  { path: '', component: CheckoutComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgmCoreModule, 
    FormsModule,
    ReactiveFormsModule,
    CustomisePackModule
  ],
  exports: [
    CheckoutComponent,
  ],
})
export class CheckoutModule { }

// https://codepen.io/onur-yuksekkaya/pen/eYBXOzM
