import { Component, OnInit } from '@angular/core';
import { AuthService, SocialLoginModule, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/login/logged.service';
import { EncuestasService } from 'src/app/encuestas/encuestas.service';
import { Encuesta } from 'src/app/interfaces/encuesta';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.scss'],
  providers: [SocialLoginModule, AuthService]
})
export class MiCuentaComponent implements OnInit {

  user: SocialUser;
  encuestas: any;
  constructor(private authService: AuthService, private router: Router, private logged: LoggedService, private es: EncuestasService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user !== null) {
        this.user = user;
        console.log(this.user.email);
        this.es.getEncuestasByEmail(this.user.email).subscribe(
          (res: any) => {
            this.encuestas = res;
            console.log(res);
          },
          (err) => {
            console.log(err);
            console.log('aún no hay encuestas');
          }
        );
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
