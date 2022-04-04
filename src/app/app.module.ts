import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { ActivationComponent } from './activation/activation.component';
import { CloggerComponent } from './clogger/clogger.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorsComponent } from './errors/errors.component';
import { IpoComponent } from './ipo/ipo.component';
import { LoginComponent } from './login/login.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginWithOptionComponent } from './login/login-with-option/login-with-option.component';
import { LoginWithOtpComponent } from './login/login-with-otp/login-with-otp.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavigationComponent,
    ActivationComponent,
    CloggerComponent,
    DashboardComponent,
    ErrorsComponent,
    IpoComponent,
    LoginComponent,
    SubscriptionComponent,
    LoginWithOptionComponent,
    LoginWithOtpComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
