import { Component, NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BottomNavigationComponent } from './bottom-navigation.component';
import { LiveComponent } from './live/live.component';

import { AddFundComponent } from './user/add-fund/add-fund.component';
import { BalramComponent } from './user/balram/balram.component';
import { MonuComponent } from './user/monu/monu.component';
import { SathwikComponent } from './user/sathwik/sathwik.component';
import { UserComponent } from './user/user.component';
import { VaibhavComponent } from './user/vaibhav/vaibhav.component';

const routes: Routes = [
  {
    path: 'user',

    children: [
      {
        path: '',
        // component: UserComponent,
        redirectTo: 'monu',
      },
      {
        path: 'monu',
        component: MonuComponent,
      },
      {
        path: 'vaibhav',
        component: VaibhavComponent,
      },
      {
        path: 'sathwik',
        component: SathwikComponent,
      },
      {
        path: 'balram',
        component: BalramComponent,
      },
      {
        path: 'add-fund',
        component: AddFundComponent,
      },
    ],
  },
  {
    path: 'live',
    component: LiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomNavigationRoutingModule {}
