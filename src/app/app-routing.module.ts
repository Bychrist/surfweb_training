import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisternowComponent } from './registernow/registernow.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'register-now', component: RegisternowComponent },
  { path: 'list-detail', component: ListComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
