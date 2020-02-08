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
  saveOverlayMenu = false;
  encuestaBorrarId: string;
  constructor(private authService: AuthService, private router: Router, private logged: LoggedService, private es: EncuestasService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user: SocialUser) => {
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
      (res: Array<Encuesta>) => {
        this.encuestas = res;
      },
      (err) => {
        this.encuestas = null;
      }
    );
  }

  eliminarEncuesta(): void {
    this.es.deleteEncuesta(this.encuestaBorrarId).subscribe( (res) => {
      this.obtenerEncuestas();
      this.saveOverlayMenu = false;
    },
    (err) => {
      this.encuestas = null;
    });
  }

  openSaveOverlayMenu(enc?: string) {
    if (enc) {
      this.encuestaBorrarId = enc;
    }
    this.saveOverlayMenu === false ? this.saveOverlayMenu = true : this.saveOverlayMenu = false;
  }

}
