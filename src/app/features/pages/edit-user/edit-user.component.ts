import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../layout/components/header/header.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
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
