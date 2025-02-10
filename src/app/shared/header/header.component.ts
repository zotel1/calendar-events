import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-header',
  imports: [ MatButtonModule, RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    public authService: AuthService
  ){}
}
