import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  
  user: User | null | undefined;
  isLoaded = false;
  
  constructor(public authService: AuthService ) {
    this.authService.user$.subscribe(user => {
      this.user = user;
      this.isLoaded = true;
  });
  }

}
