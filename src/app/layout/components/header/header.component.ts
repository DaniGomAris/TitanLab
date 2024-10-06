import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;
  isDropdownVisible: boolean = false;
  showWarning: boolean = false;

  constructor(private eRef: ElementRef, private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userName = user.username || null;
    }
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  logout() {
    this.userName = null;
    this.router.navigate(['/home']);
  }

  goToCart() {
    if (!this.userName) {
      this.showWarning = true;
      setTimeout(() => {
        this.showWarning = false;
      }, 3000);
    } else {
      this.router.navigate(['/cart']);
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sign-in-button')) {
      this.isDropdownVisible = false;
    }
  }
}
