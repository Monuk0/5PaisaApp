import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavigationRoutingModule } from './bottom-navigation-routing.module';

import { UserComponent } from './user/user.component';
import { AddFundComponent } from './user/add-fund/add-fund.component';

@NgModule({
  declarations: [UserComponent, AddFundComponent],
  imports: [CommonModule, BottomNavigationRoutingModule],
})
export class BottomNavigationModule {}
