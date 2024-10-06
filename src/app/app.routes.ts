import { Routes } from '@angular/router';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { HomeComponent } from './features/pages/home/home.component';

export const routes: Routes = [
    {path: 'sign-in', component:SignInComponent},
    {path: 'sign-up', component:SignUpComponent},
    {path: 'home', component:HomeComponent},
    {path: '', redirectTo:'home', pathMatch:'full'}
]