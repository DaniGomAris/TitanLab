import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../../layout/components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(private router: Router) {}

  login() {
    const username = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    const storedUser = JSON.parse(localStorage.getItem("user") || '{}');

    if (!storedUser.username) {
      alert("No user found");
      return;
    }

    if (username === storedUser.username && password === storedUser.password) {
      console.log('Login successful, navigating to /home');
      this.router.navigate(['/home']);
    } else {
      alert("Invalid username or password.");
    }
  }
}
