import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from "../../../layout/components/header/header.component";
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {
  user: any;

  constructor(private router: Router) {} // Inyecta Router

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      alert('No user is logged in.');
    }
  }

  // Método para navegar a la página de edición
  navigateToEdit(): void {
    this.router.navigate(['/edit-user']); // Asegúrate de que esta ruta esté configurada en tu módulo de enrutamiento
  }
}

