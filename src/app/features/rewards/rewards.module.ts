import { RewardsRoutingModule } from './rewards-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RewardsComponent } from './components/rewards/rewards.component';

@NgModule({
  declarations: [
    RewardsComponent
  ],
  imports: [
    CommonModule,
    RewardsRoutingModule
  ]
})
export class RewardsModule { }
