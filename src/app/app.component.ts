import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { LoggedService } from './login/logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'surveymaker';
  constructor(private authService: AuthService, private logged: LoggedService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.logged.setLoggedUser(user);
      if (user === null) {
        this.logged.setLogged(false);
      }
    });
  }
}
