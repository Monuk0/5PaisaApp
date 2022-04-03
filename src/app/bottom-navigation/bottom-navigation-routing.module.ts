import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BottomNavigationComponent } from './bottom-navigation.component';

import { AddFundComponent } from './user/add-fund/add-fund.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user',
    // component: UserComponent, it's mistake
    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'addfund',
        component: AddFundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomNavigationRoutingModule {}
