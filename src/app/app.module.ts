import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SideComponent } from './side/side.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisternowComponent } from './registernow/registernow.component';
import { WebserviceService } from './webservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Angular4PaystackModule } from 'angular4-paystack';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SideComponent,
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    RegisternowComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Angular4PaystackModule.forRoot('pk_test_15cc7eb938c75614fd2490b056eeaeb11a8208be')

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    WebserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
