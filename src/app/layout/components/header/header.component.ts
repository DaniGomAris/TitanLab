import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    const dropdownContent = this.eRef.nativeElement.querySelector('#dropdownContent');
    dropdownContent.classList.toggle('show');
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sign-in-button')) {
      const dropdownContent = this.eRef.nativeElement.querySelector('#dropdownContent');
      if (dropdownContent && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  }
}
