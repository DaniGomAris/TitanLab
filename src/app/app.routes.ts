import { Routes } from '@angular/router';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { HomeComponent } from './features/pages/home/home.component';
import { UserPageComponent } from './features/pages/user-page/user-page.component';
import { CartPageComponent } from './features/pages/cart-page/cart-page.component';
import { ProductsPageComponent } from './features/pages/products-page/products-page.component';
import { EditUserComponent } from './features/pages/edit-user/edit-user.component';

export const routes: Routes = [
    {path: 'sign-in', component:SignInComponent},
    {path: 'sign-up', component:SignUpComponent},
    {path: 'home', component:HomeComponent},
    {path: 'user', component:UserPageComponent},
    {path: 'cart', component:CartPageComponent},
    {path: 'products', component:ProductsPageComponent},
    {path: 'edit-user', component:EditUserComponent},
    {path: '', redirectTo:'home', pathMatch:'full'}
]