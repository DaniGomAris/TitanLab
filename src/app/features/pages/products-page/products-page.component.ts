import { Component } from '@angular/core';
import { HeaderComponent } from "../../../layout/components/header/header.component";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
