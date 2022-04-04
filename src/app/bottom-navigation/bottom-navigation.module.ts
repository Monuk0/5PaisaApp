import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavigationRoutingModule } from './bottom-navigation-routing.module';

import { UserComponent } from './user/user.component';
import { AddFundComponent } from './user/add-fund/add-fund.component';
import { VaibhavComponent } from './user/vaibhav/vaibhav.component';
import { MonuComponent } from './user/monu/monu.component';
import { SathwikComponent } from './user/sathwik/sathwik.component';
import { BalramComponent } from './user/balram/balram.component';
import { LiveComponent } from './live/live.component';

@NgModule({
  declarations: [
    UserComponent,
    AddFundComponent,
    VaibhavComponent,
    MonuComponent,
    SathwikComponent,
    BalramComponent,
    LiveComponent,
  ],
  imports: [CommonModule, BottomNavigationRoutingModule],
})
export class BottomNavigationModule {}
