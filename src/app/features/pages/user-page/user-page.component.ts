import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from "../../../layout/components/header/header.component";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      alert('No user is logged in.');
    }
  }
}

