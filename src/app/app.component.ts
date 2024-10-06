import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { CartPageComponent } from './features/pages/cart-page/cart-page.component';
import { ProductsPageComponent } from './features/pages/products-page/products-page.component';
import { UserPageComponent } from './features/pages/user-page/user-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CartPageComponent, ProductsPageComponent, UserPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TitanLab';
}