import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';  
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { MyPropertiesComponent } from './my-properties/my-properties.component';

export const routes = [
  { 
    path: '', 
    component: AccountComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, 
      { path: 'my-properties', component: MyPropertiesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,  
    MyPropertiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgmCoreModule
  ]
})
export class AccountModule { }
