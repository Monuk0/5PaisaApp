import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationComponent } from './activation/activation.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { CloggerComponent } from './clogger/clogger.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorsComponent } from './errors/errors.component';
import { LoginWithOptionComponent } from './login/login-with-option/login-with-option.component';
import { LoginWithOtpComponent } from './login/login-with-otp/login-with-otp.component';
import { LoginComponent } from './login/login.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'bottomNavigation',
    component: BottomNavigationComponent,
  },
  {
    path: 'clogger',
    component: CloggerComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'error',
    component: ErrorsComponent,
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent },
      { path: 'loginWithOtion', component: LoginWithOptionComponent },
      { path: 'loginWithOtp', component: LoginWithOtpComponent },
    ],
  },
  {
    path: 'bottomNavigation',
    loadChildren: () =>
      import('./bottom-navigation/bottom-navigation.module').then(
        (m) => m.BottomNavigationModule
      ),
  },

  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  // },
  // {
  //   path: '**',
  //   component: BottomNavigationComponent,
  // },
  {
    path: 'activation',
    component: ActivationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
