import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';


import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
	{path: '', component: LandingComponent},
	{path: 'user/register', component: UserRegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    EmployeeRegisterComponent,
    UserRegisterComponent,
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
