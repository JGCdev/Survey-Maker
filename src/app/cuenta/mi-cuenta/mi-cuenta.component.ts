import { Component, OnInit } from '@angular/core';
import { AuthService, SocialLoginModule, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/login/logged.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.scss'],
  providers: [SocialLoginModule, AuthService]
})
export class MiCuentaComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService, private router: Router, private logged: LoggedService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user !== null) {
        this.user = user;
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  signOut() {
    this.authService.signOut();
    this.logged.logOut();
    this.router.navigate(['login']);
  }

}
