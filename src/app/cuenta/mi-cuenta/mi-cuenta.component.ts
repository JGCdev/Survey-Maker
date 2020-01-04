import { Component, OnInit } from '@angular/core';
import { AuthService, SocialLoginModule } from 'angularx-social-login';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/login/logged.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.scss'],
  providers: [SocialLoginModule, AuthService]
})
export class MiCuentaComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private logged: LoggedService) { }

  ngOnInit() {
    // Subscribir a este evento en un componente padre para actualizar en todo momento el estado
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.logged.setLoggedUser(user);
      if (user === null) {
        this.logged.setLogged(false);
      }
    });
  }

  signOut() {
    this.authService.signOut();
    this.logged.logOut();
    this.router.navigate(['login']);
  }

}
