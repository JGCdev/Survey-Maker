import { Component, OnInit} from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { LoggedService } from '../logged.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {

  private user: SocialUser;
  returnUrl: string;
  constructor( private route: ActivatedRoute, private authService: AuthService, private logged: LoggedService, private router: Router ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'mi-cuenta';
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (user) => {
      if (user !== null) {
        this.user = user;
        this.logged.setLoggedUser(this.user);
        this.logged.setLogged(true);
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
