import { Component } from '@angular/core';
import { FooterComponent } from "../../../layout/components/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FooterComponent, FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  fullName: string = '';
  email: string = '';
  dob: string = '';
  password: string = '';
  rePassword: string = '';

  constructor(private router: Router) {}

  register() {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{7,14}$/;
    if (!usernameRegex.test(this.username)) {
      alert("Username must be between 8 and 15 characters, cannot contain spaces, and cannot start with a number or special character");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,20}$/;
    if (!passwordRegex.test(this.password)) {
      alert("Password must be between 12 and 20 characters, and must include at least one uppercase letter, one lowercase letter, one number and one special character");
      return;
    }

    if (this.password !== this.rePassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      username: this.username,
      fullName: this.fullName,
      email: this.email,
      dob: this.dob,
      password: this.password
    };
    localStorage.setItem("user", JSON.stringify(user));

    this.router.navigate(['/sign-in']);
  }
}
