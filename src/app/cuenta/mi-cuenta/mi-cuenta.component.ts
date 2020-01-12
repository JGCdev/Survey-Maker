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
  encuestas: Array<Encuesta>;
  constructor(private authService: AuthService, private router: Router, private logged: LoggedService, private es: EncuestasService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user !== null) {
        this.user = user;
        this.obtenerEncuestas();
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

  obtenerEncuestas() {
    this.es.getEncuestasByEmail(this.user.email).subscribe(
      (res: any) => {
        this.encuestas = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarEncuesta(id) {
    this.es.deleteEncuesta(id).subscribe( (res) => {
      this.obtenerEncuestas();
    },
    (err) => {
      console.log(err);
    });
  }

}
